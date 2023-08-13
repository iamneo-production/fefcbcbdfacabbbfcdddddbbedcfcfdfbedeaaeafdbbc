import React, { useState } from 'react';
import Card from './UI/Card/Card';
import Button from './UI/Button/Button';
import { questions } from '../data'; // Import questions from data.js
import { checkAnswers } from '../functions/quizFunctions';
import './quiz.css';
const Quiz = () => {
    const [selectedOptions, setSelectedOptions] = useState({});
    const [showResults, setShowResults] = useState(false);
    const [score, setScore] = useState(0);
    const [isQuizStarted, setIsQuizStarted] = useState(false);

    const handleOptionClick = (questionId, option) => {
        setSelectedOptions({
            ...selectedOptions,
            [questionId]: option,
        });
    };

    const handleShowResults = () => {
        let correctAnswers = 0;
        questions.forEach((question) => {
            if (selectedOptions[question.questionId] === question.correctAnswer) {
                correctAnswers++;
            }
        });
        setScore(correctAnswers);
        setShowResults(true);
    };

    const handleStartQuiz = () => {
        setIsQuizStarted(true);
    };

    return (
        <div>
            {!isQuizStarted && (
                <Button text="Start Quiz" onClick={handleStartQuiz} />
            )}
            {isQuizStarted && !showResults && questions.map((question) => (
                <Card key={question.questionId}>
                    <h2>{question.question}</h2>
                    {question.options.map((option, index) => (
                        <Button
                            key={index}
                            text={option}
                            onClick={() => handleOptionClick(question.questionId, option)}
                            disabled={showResults}
                        />
                    ))}
                </Card>
            ))}
            {isQuizStarted && showResults && (
                <Card>
                    <h2>Quiz Results</h2>
                    <p>Your score: {score} out of {questions.length}</p>
                </Card>
            )}
            {isQuizStarted && !showResults && Object.keys(selectedOptions).length === questions.length && (
                <Button text="Show Results" onClick={handleShowResults} />
            )}
        </div>
    );
};

export default Quiz;
