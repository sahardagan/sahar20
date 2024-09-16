// src/components/Login.js
import React, { useState } from 'react';
import '../App.css'; // ודא שהקובץ מיובא אם יש צורך בסגנונות

const Login = ({ onLogin }) => {
  const [playerName, setPlayerName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (playerName) {
      onLogin(playerName);
    }
  };

  return (
    <div className="login-container">
      <h1>ברוך הבא למשחק הטריוויה!</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
          placeholder="הכנס את שמך"
          required
        />
        <button type="submit">התחל משחק</button>
      </form>
    </div>
  );
};

export default Login;
