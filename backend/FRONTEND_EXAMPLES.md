# Frontend Examples for OpenAI Proxy API

This document provides code examples for calling the OpenAI proxy API from different frontend frameworks.

## React Example (using Fetch API)

```jsx
import { useState } from 'react';

const ChatComponent = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    // Add user message to chat
    const userMessage = { role: 'user', content: input };
    setMessages(prevMessages => [...prevMessages, userMessage]);
    setInput('');
    setIsLoading(true);
    
    try {
      const response = await fetch('http://localhost:5000/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [
            // Optional system message
            { role: 'system', content: 'You are a helpful assistant.' },
            // Include conversation history
            ...messages,
            // Include current user message
            userMessage
          ]
        })
      });
      
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }
      
      const data = await response.json();
      const assistantMessage = { 
        role: 'assistant', 
        content: data.choices[0].message.content 
      };
      
      setMessages(prevMessages => [...prevMessages, assistantMessage]);
    } catch (error) {
      console.error('Error:', error);
      // Handle error
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div>
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.role}`}>
            {msg.content}
          </div>
        ))}
        {isLoading && <div>Loading...</div>}
      </div>
      
      <form onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message"
          disabled={isLoading}
        />
        <button type="submit" disabled={isLoading || !input.trim()}>
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatComponent;
```

## JavaScript (Vanilla JS)

```javascript
// Function to send a message to the chat API
async function sendMessage(messageText) {
  const messages = [
    { role: 'system', content: 'You are a helpful assistant.' },
    { role: 'user', content: messageText }
  ];
  
  try {
    const response = await fetch('http://localhost:5000/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ messages })
    });
    
    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }
    
    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

// Example usage
document.getElementById('chat-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const input = document.getElementById('message-input');
  const messageText = input.value.trim();
  
  if (!messageText) return;
  
  // Show user message
  addMessageToChat('user', messageText);
  input.value = '';
  
  try {
    // Show loading indicator
    showLoadingIndicator();
    
    // Get response from API
    const responseText = await sendMessage(messageText);
    
    // Show assistant message
    addMessageToChat('assistant', responseText);
  } catch (error) {
    // Show error message
    addMessageToChat('error', 'Failed to get response. Please try again.');
  } finally {
    // Hide loading indicator
    hideLoadingIndicator();
  }
});

// Helper functions for UI
function addMessageToChat(role, content) {
  const chatMessages = document.getElementById('chat-messages');
  const messageElement = document.createElement('div');
  messageElement.classList.add('message', role);
  messageElement.textContent = content;
  chatMessages.appendChild(messageElement);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function showLoadingIndicator() {
  const loadingIndicator = document.getElementById('loading-indicator');
  loadingIndicator.style.display = 'block';
}

function hideLoadingIndicator() {
  const loadingIndicator = document.getElementById('loading-indicator');
  loadingIndicator.style.display = 'none';
}
```

## Axios Example (can be used with any framework)

```javascript
import axios from 'axios';

const chatAPI = axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json',
  }
});

// Function to send a message and get a response
async function getChatResponse(messages) {
  try {
    const response = await chatAPI.post('/chat', { messages });
    return response.data.choices[0].message.content;
  } catch (error) {
    console.error('Error calling chat API:', error);
    throw error;
  }
}

// Example usage
const messages = [
  { role: 'system', content: 'You are a helpful assistant.' },
  { role: 'user', content: 'Hello, how are you?' }
];

getChatResponse(messages)
  .then(response => {
    console.log('Assistant:', response);
  })
  .catch(error => {
    console.error('Failed to get response:', error);
  });
``` 