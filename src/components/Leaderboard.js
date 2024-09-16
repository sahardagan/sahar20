// src/components/Leaderboard.js
import React, { useState, useEffect } from 'react';
import './Leaderboard.css'; // Import the styles

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    // Fetch leaderboard data from localStorage or backend
    const storedLeaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];
    setLeaderboard(storedLeaderboard);
  }, []);

  return (
    <div className="leaderboard-container">
      <h2>לוח תוצאות</h2>
      <ul>
        {leaderboard.slice(0, 10).map((entry, index) => (
          <li key={index} className={`leaderboard-item ${index === 0 ? 'first' : index === 1 ? 'second' : index === 2 ? 'third' : ''}`}>
            <span className="rank">{index + 1}</span>
            <span className="name">{entry.name}</span>
            <span className="score">{entry.score}</span>
            {index === 0 && <i className="fas fa-medal medal gold"></i>}
            {index === 1 && <i className="fas fa-medal medal silver"></i>}
            {index === 2 && <i className="fas fa-medal medal bronze"></i>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
