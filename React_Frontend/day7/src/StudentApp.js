import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import StudentDetails from './StudentDetails';
import StudentForm from './StudentForm';
import StudentContext from './StudentContext';  // Import the context provider

function App() {
  return (
    <StudentContext>  {/* Wrap the context */}
      <div>
        <h1>I am App component</h1>
        <StudentForm />
        <StudentDetails />
      </div>
    </StudentContext>
  );
}

export default App;