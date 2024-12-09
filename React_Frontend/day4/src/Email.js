import React from "react";

const Email = () => {
  const emails = [
    "ash@example.com",
    "upa@example.com",
    "piy@example.com",
    "help@example.com",
    "careers@example.com",
  ];

  return (
    <div>
      <h2>Email Contacts</h2>
      <ul>
        {emails.map((email, index) => (
          <li key={index}>{email}</li>
        ))}
      </ul>
    </div>
  );
};

export default Email;