# OpenAI API Proxy Server

A secure Express.js server that acts as a proxy for the OpenAI Chat Completions API. This keeps your OpenAI API key secure on the server side rather than exposing it in your frontend code.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create a `.env` file in the root of the backend directory:
   ```
   OPENAI_API_KEY=sk-your-openai-api-key-here
   PORT=5000
   ```
   Replace `sk-your-openai-api-key-here` with your actual OpenAI API key.

3. Start the server:
   ```bash
   # Production mode
   npm start
   
   # Development mode with auto-restart
   npm run dev
   ```

4. The server will be running at:
   - API endpoint: http://localhost:5000/api/chat
   - Health check: http://localhost:5000/api/health

## API Usage

Send POST requests to `/api/chat` with a JSON body containing a `messages` array:

```json
{
  "messages": [
    { "role": "system", "content": "You are a helpful assistant." },
    { "role": "user", "content": "Hello, how are you?" }
  ]
}
```

## Security Considerations

- This proxy server should be deployed in a secure environment
- Consider adding rate limiting and authentication for production use
- Never expose your API key in client-side code 