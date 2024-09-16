// src/components/Result.js
import React from 'react';
import './Result.css'; // Import the styles

const Result = ({ score }) => {
  return (
    <div className="result-container">
      <h2>תוצאה סופית</h2>
      <p>סך הכל נקודות: <span className="score">{score}</span></p>
    </div>
  );
};

export default Result;
