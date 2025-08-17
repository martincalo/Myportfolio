import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import fetch from 'node-fetch';

// Load environment variables
dotenv.config();

// Check if API key is available
if (!process.env.OPENAI_API_KEY) {
  console.error('OPENAI_API_KEY is not set in the environment variables');
  process.exit(1);
}

const app = express();
const PORT = process.env.PORT || 5001;

// Middlewares
app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// OpenAI chat completion proxy endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const { messages } = req.body;
    
    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ 
        error: 'Invalid request body. "messages" array is required.' 
      });
    }
    
    console.log(`Processing chat request with ${messages.length} messages`);
    
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-4o',
        messages,
        temperature: 0.7,
        max_tokens: 800
      })
    });
    
    if (!response.ok) {
      const errorData = await response.text();
      console.error('OpenAI API error:', errorData);
      return res.status(response.status).json({ 
        error: `OpenAI API responded with status ${response.status}`,
        details: errorData
      });
    }
    
    const data = await response.json();
    console.log('Successfully received response from OpenAI');
    
    return res.json(data);
  } catch (error) {
    console.error('Error processing chat request:', error);
    return res.status(500).json({ 
      error: 'An internal server error occurred',
      message: error.message
    });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`OpenAI proxy available at http://localhost:${PORT}/api/chat`);
}); 