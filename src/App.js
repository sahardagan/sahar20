import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // ייבוא של useNavigate
import Question from './components/QuestionComponent';
import Result from './components/Result';
import Login from './components/Login';
import Leaderboard from './components/Leaderboard';
import GameInfo from './components/GameInfo';
import Questions from './questions';
import './App.css';

// פונקציה לקבלת השאלות לפי שלב
const getStageQuestions = (stage) => {
  return Questions[`stage${stage}Questions`] || [];
};

const App = () => {
  const navigate = useNavigate(); // יצירת מופע של useNavigate
  const [playerName, setPlayerName] = useState('');
  const [currentStage, setCurrentStage] = useState(1);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(5);
  const [gameOver, setGameOver] = useState(false);
  const [showGameInfo, setShowGameInfo] = useState(true);
  const [stageCompleted, setStageCompleted] = useState(false);

  useEffect(() => {
    const savedPlayerName = localStorage.getItem('playerName');
    if (savedPlayerName) {
      setPlayerName(savedPlayerName);
      setShowGameInfo(false);
    } else {
      setShowGameInfo(true);
    }
  }, []);

  const handleLogin = (name) => {
    setPlayerName(name);
    localStorage.setItem('playerName', name);
    setShowGameInfo(false);
  };

  const handleAnswer = (isCorrect) => {
    const points = [10, 25, 50, 100, 200, 400, 800, 1600, 3200, 6400][currentStage - 1];
    if (isCorrect) {
      setScore(score + points);
      nextQuestion();
    } else {
      setLives(lives - 1);
      if (lives <= 1) {
        setGameOver(true);
        updateLeaderboard(playerName, score);
      } else {
        nextQuestion();
      }
    }
  };

  const nextQuestion = () => {
    const questionsInStage = getStageQuestions(currentStage);
    if (currentQuestionIndex < questionsInStage.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else if (currentStage < 10) {
      setStageCompleted(true);
    } else {
      setGameOver(true);
      updateLeaderboard(playerName, score);
    }
  };

  const handleContinue = () => {
    setStageCompleted(false);
    setCurrentStage(currentStage + 1);
    setCurrentQuestionIndex(0);
  };

const handleExit = () => {
  setGameOver(true);
  updateLeaderboard(playerName, score);
  navigate('/'); // העבר לדף הבית
  localStorage.removeItem('currentStage'); // ניקוי מצב שלב נוכחי אם קיים
  localStorage.removeItem('currentQuestionIndex'); // ניקוי מצב אינדקס שאלה אם קיים
};


  const updateLeaderboard = (name, score) => {
    const leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];
    const newEntry = { name, score };
    leaderboard.push(newEntry);

    leaderboard.sort((a, b) => b.score - a.score);
    localStorage.setItem('leaderboard', JSON.stringify(leaderboard));
  };

  const resetLeaderboard = () => {
    localStorage.removeItem('leaderboard');
  };

  useEffect(() => {
    const lastReset = localStorage.getItem('lastReset');
    const now = Date.now();
    const twentyFourHours = 24 * 60 * 60 * 1000;

    if (!lastReset || now - lastReset > twentyFourHours) {
      resetLeaderboard();
      localStorage.setItem('lastReset', now);
    }
  }, []);

const handleLogout = () => {
  if (window.confirm("האם אתה בטוח שברצונך לצאת מהמשחק?")) {
    // איפוס המצב של המשחק
    setPlayerName('');
    localStorage.removeItem('playerName');
    setGameOver(false);
    setCurrentStage(1); // להחזיר לשלב הראשון
    setCurrentQuestionIndex(0); // להחזיר לאינדקס השאלה הראשון
    setScore(0); // לאפס את הניקוד
    setLives(5); // להחזיר את מספר חיי השחקן ל-5
    setStageCompleted(false); // לאפס את מצב סיום השלב
    setShowGameInfo(true); // להציג את מסך ההסברים

    // ניקוי מצב נוסף מ-localStorage אם קיים
    localStorage.removeItem('currentStage');
    localStorage.removeItem('currentQuestionIndex');
    
    navigate('/'); // העבר לדף הבית
  }
};


  const handleResetLeaderboard = () => {
    resetLeaderboard();
    alert('לוח התוצאות אולף בהצלחה!');
  };

const handleNewGame = () => {
  // איפוס המצב של המשחק
  setPlayerName('');
  localStorage.removeItem('playerName');
  setGameOver(false);
  setCurrentStage(1); // להחזיר לשלב הראשון
  setCurrentQuestionIndex(0); // להחזיר לאינדקס השאלה הראשון
  setScore(0); // לאפס את הניקוד
  setLives(5); // להחזיר את מספר חיי השחקן ל-5
  setStageCompleted(false); // לאפס את מצב סיום השלב
  setShowGameInfo(false); // להסתיר את מסך ההסברים
};



  if (showGameInfo) {
    return <GameInfo onClose={() => setShowGameInfo(false)} />;
  }

  if (!playerName) {
    return (
      <div id="welcome-screen">
        <Login onLogin={handleLogin} />
        <Leaderboard />
      </div>
    );
  }

  const currentQuestions = getStageQuestions(currentStage);
  const currentQuestion = currentQuestions[currentQuestionIndex];
  const points = [10, 25, 50, 100, 200, 400, 800, 1600, 3200, 6400][currentStage - 1];

  return (
    <div id="game">
      {gameOver ? (
        <div>
          <Result score={score} />
          <Leaderboard />
          <button onClick={handleLogout}>יציאה מהמשחק</button>
          <button onClick={handleNewGame}>התחל משחק חדש</button>
          {playerName === 'admin' && (
            <button onClick={handleResetLeaderboard}>אפס את לוח התוצאות</button>
          )}
        </div>
      ) : stageCompleted ? (
        <div>
          <p>סיימת את שלב {currentStage}!</p>
          <p>נקודות צבורות: {score}</p>
          <button onClick={handleContinue}>המשך לשלב הבא</button>
          <button onClick={handleExit}>עזוב עם הניקוד הנוכחי</button>
        </div>
      ) : (
        <div>
          <div className="game-info">
            <p>שלב: {currentStage} מתוך 10</p>
            <p>שאלה: {currentQuestionIndex + 1} מתוך 5</p>
            <p>סכום לכל שאלה: {points} נקודות</p>
            <p>פסילות שנותרו: {lives}</p>
          </div>
          {currentQuestion ? (
            <Question
              question={currentQuestion}
              onAnswer={handleAnswer}
            />
          ) : (
            <p>טעינת שאלה...</p>
          )}
          <button onClick={handleLogout}>יציאה מהמשחק</button>
        </div>
      )}
    </div>
  );
};

export default App;
