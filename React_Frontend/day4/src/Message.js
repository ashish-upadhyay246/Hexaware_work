import React from "react";

const Message = () => {
  const messages = [
    "Can I track my order?",
    "How do I reset my password?",
    "What are your business hours?",
    "Do you offer international shipping?",
    "Where is your headquarters?",
  ];

  return (
    <div>
      <h2>Messages</h2>
      <ul>
        {messages.map((msg, index) => (
          <li key={index}>{msg}</li>
        ))}
      </ul>
    </div>
  );
};

export default Message;