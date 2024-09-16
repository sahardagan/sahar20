import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// פונקציה לערבוב של האופציות
const shuffleArray = (array) => {
  let currentIndex = array.length, temporaryValue, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

const QuestionComponent = ({ question, onAnswer }) => {
  const [shuffledAnswers, setShuffledAnswers] = useState([]);

  useEffect(() => {
    if (question.answers) {
      setShuffledAnswers(shuffleArray([...question.answers]));
    }
  }, [question]);

  const handleAnswerClick = (isCorrect) => {
    onAnswer(isCorrect);
  };

  return (
    <div className="question-component">
      <h2>{question.text}</h2>
      <div className="answers">
        {shuffledAnswers.map((answer, index) => (
          <button
            key={index}
            onClick={() => handleAnswerClick(answer.isCorrect)}
          >
            {answer.text}
          </button>
        ))}
      </div>
    </div>
  );
};

QuestionComponent.propTypes = {
  question: PropTypes.shape({
    text: PropTypes.string.isRequired,
    answers: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string.isRequired,
        isCorrect: PropTypes.bool.isRequired
      })
    ).isRequired
  }).isRequired,
  onAnswer: PropTypes.func.isRequired
};

export default QuestionComponent;
