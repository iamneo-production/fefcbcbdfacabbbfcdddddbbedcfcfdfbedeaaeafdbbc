// app.js
import React, { useState } from 'react';
import Button from './UI/Button';
import Card from './UI/Card';
import { getQuizData, checkAnswer } from '../functions/quizFunctions';

const App = () => {
  const [quizData, setQuizData] = useState(getQuizData());
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const handleOptionClick = (option) => {
    if (!showResults) {
      setSelectedOption(option);
    }
  };

  const handleShowResults = () => {
    if (selectedOption !== null) {
      const isCorrect = checkAnswer(quizData, selectedOption);
      if (isCorrect) {
        setScore((prevScore) => prevScore + 1);
      }
      setShowResults(true);
    }
  };

  const handleRestartQuiz = () => {
    setQuizData(getQuizData());
    setSelectedOption(null);
    setScore(0);
    setShowResults(false);
  };

  return (
    <div className="quiz-app">
      {quizData.map((question, index) => (
        <Card key={index}>
          <h3>{question.text}</h3>
          <div className="options">
            {question.options.map((option, optionIndex) => (
              <Button
                key={optionIndex}
                onClick={() => handleOptionClick(option)}
                disabled={showResults || (selectedOption !== null && selectedOption !== option)}
              >
                {option}
              </Button>
            ))}
          </div>
        </Card>
      ))}
      <div className="actions">
        {!showResults && (
          <Button onClick={handleShowResults} disabled={selectedOption === null}>
            Show Results
          </Button>
        )}
        {showResults && (
          <div className="result">
            <p>Your Score: {score}</p>
            <Button onClick={handleRestartQuiz}>Restart Quiz</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
