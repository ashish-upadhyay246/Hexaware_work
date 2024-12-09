import React from "react";

const Phone = () => {
  const phoneNumbers = [
    "+1-800-123-4567",
    "+1-800-234-5678",
    "+1-800-345-6789",
    "+1-800-456-7890",
    "+1-800-567-8901",
  ];

  return (
    <div>
      <h2>Phone Numbers</h2>
      <ul>
        {phoneNumbers.map((phone, index) => (
          <li key={index}>{phone}</li>
        ))}
      </ul>
    </div>
  );
};

export default Phone;