# ChatBot Component Setup

This ChatBot component integrates OpenAI's GPT-4 model into your React application, allowing users to have interactive conversations with an AI assistant that represents Martin Calo's professional portfolio.

## Installation

The component is already installed in the project. It uses the following key dependencies:
- React (for UI components)
- OpenAI API (for generating responses)

## Configuration

### 1. OpenAI API Key

You need to set up your OpenAI API key:

1. Create a `.env` file in the root of your frontend directory
2. Add your OpenAI API key:
   ```
   REACT_APP_OPENAI_API_KEY=your_openai_api_key_here
   ```
3. Replace `your_openai_api_key_here` with your actual OpenAI API key
4. Restart your development server for the changes to take effect

### 2. Usage

The ChatBot component is already added to the App.js file and will appear in the bottom-right corner of your website.

If you want to move it to a specific page or component:

```jsx
import React from 'react';
import ChatBot from './components/ChatBot';

const YourComponent = () => {
  return (
    <div>
      {/* Your component content */}
      <ChatBot />
    </div>
  );
};

export default YourComponent;
```

## Customization

### Modifying the System Prompt

To change the AI's personality or information, edit the `systemPrompt` variable in `src/components/ChatBot.jsx`:

```javascript
const systemPrompt = `Your custom prompt here...`;
```

### Styling

To customize the appearance of the ChatBot:

1. Edit the CSS in `src/components/ChatBot.css`
2. Adjust colors, sizes, positions as needed

## Troubleshooting

Common issues:

- **API key errors**: Ensure your OpenAI API key is correct and properly set in the `.env` file
- **CORS issues**: Make sure your OpenAI account has proper permissions
- **Rate limiting**: The free tier of OpenAI API has rate limits, so you may encounter limits in usage

## Production Considerations

For production deployment:

1. Ensure your API key is stored securely
2. Consider using a backend proxy to make OpenAI API calls rather than exposing your API key in the frontend
3. Implement proper error handling and rate limiting
4. Monitor API usage to control costs 