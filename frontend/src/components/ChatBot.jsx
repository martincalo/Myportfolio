import React, { useState, useEffect, useRef } from 'react';
import './ChatBot.css';

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // System prompt that describes the assistant's persona
  const systemPrompt = `You are a helpful AI chatbot (powered by GPT-4o) that represents Martin Calo's professional portfolio. Martin is a software and automation engineer with 10+ years of experience, including roles at Tesla and in the pharmaceutical sector. He has worked with robotics, MES, Snowflake, dbt, and modern data pipelines. He is currently based in Berlin and is available for remote or hybrid roles across the EU.`;

  // Backend API URL (would typically come from env var in production)
  const API_URL = 'http://localhost:5001/api/chat';

  // Debug environment variables on mount
  useEffect(() => {
    console.log("ChatBot component mounted");
    console.log("Using backend API URL:", API_URL);
  }, []);

  // Scroll to bottom of chat when messages update
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Initial greeting message
  useEffect(() => {
    setMessages([
      {
        role: 'assistant',
        content: "Hello! I'm Martin's AI assistant. How can I help you learn more about Martin's experience and skills?"
      }
    ]);
    
    // Focus the input field on component mount
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!input.trim()) return;
    
    // Add user message to chat
    const userMessage = { role: 'user', content: input };
    setMessages(prevMessages => [...prevMessages, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      console.log("Preparing to call backend API");
      
      // Prepare all messages including system prompt and history
      const allMessages = [
        { role: 'system', content: systemPrompt },
        ...messages.map(msg => ({ role: msg.role, content: msg.content })),
        userMessage
      ];
      
      // Call the backend proxy API instead of OpenAI directly
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messages: allMessages })
      });

      console.log("API response status:", response.status);
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error("API error response:", errorText);
        throw new Error(`API request failed with status ${response.status}: ${errorText}`);
      }

      const data = await response.json();
      console.log("API response received successfully");
      
      const assistantMessage = { 
        role: 'assistant', 
        content: data.choices[0].message.content 
      };
      
      setMessages(prevMessages => [...prevMessages, assistantMessage]);
    } catch (error) {
      console.error('Error calling Chat API:', error);
      setMessages(prevMessages => [
        ...prevMessages, 
        { 
          role: 'assistant', 
          content: "I'm sorry, I encountered an error processing your request. Please make sure the backend server is running and properly configured."
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-header">
        <h3>Chat with Martin's AI Assistant</h3>
      </div>
      <div className="chatbot-messages">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.role}`}>
            <div className="message-content">{message.content}</div>
          </div>
        ))}
        {isLoading && (
          <div className="message assistant loading">
            <div className="loading-indicator">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      <form className="chatbot-input" onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          disabled={isLoading}
          ref={inputRef}
        />
        <button type="submit" disabled={isLoading || !input.trim()}>
          {isLoading ? 'Sending...' : 'Send'}
        </button>
      </form>
    </div>
  );
};

export default ChatBot; 