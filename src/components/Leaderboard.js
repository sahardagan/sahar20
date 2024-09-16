import React, { useState, useEffect } from 'react';
import './Leaderboard.css'; // Import the styles

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    // Fetch leaderboard data from localStorage or backend
    const storedLeaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];
    setLeaderboard(storedLeaderboard);
  }, []);

  const getPaginatedLeaderboard = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return leaderboard.slice(startIndex, startIndex + itemsPerPage);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const totalPages = Math.ceil(leaderboard.length / itemsPerPage);

  return (
    <div className="leaderboard-container">
      <h2>לוח תוצאות</h2>
      <ul>
        {getPaginatedLeaderboard().map((entry, index) => (
          <li
            key={index}
            className={`leaderboard-item ${
              index === 0 ? 'first' :
              index === 1 ? 'second' :
              index === 2 ? 'third' : ''
            }`}
          >
            <span className="rank">{(currentPage - 1) * itemsPerPage + index + 1}</span>
            <span className="name">{entry.name}</span>
            <span className="score">{entry.score}</span>
            {index === 0 && <i className="fas fa-medal medal gold"></i>}
            {index === 1 && <i className="fas fa-medal medal silver"></i>}
            {index === 2 && <i className="fas fa-medal medal bronze"></i>}
          </li>
        ))}
      </ul>
      <div className="pagination-controls">
        {currentPage > 1 && (
          <button onClick={() => handlePageChange(currentPage - 1)}>קודם</button>
        )}
        {currentPage < totalPages && (
          <button onClick={() => handlePageChange(currentPage + 1)}>הבא</button>
        )}
      </div>
    </div>
  );
};

export default Leaderboard;
