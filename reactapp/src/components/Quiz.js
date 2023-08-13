import React, { useState, useEffect } from 'react';
import Card from './UI/Card';
import Button from './UI/Button';
import { questions } from '../data'; // Replace with your trivia questions data
import { checkAnswers } from '../functions/quizFunctions';

const Quiz = () => {
    const [selectedOptions, setSelectedOptions] = useState({});
    const [showResults, setShowResults] = useState(false);
    const [score, setScore] = useState(0);

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

    return (
        <div>
            <h1>React Quiz Application</h1>
            {questions.map((question) => (
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
            {!showResults && (
                <Button text="Show Results" onClick={handleShowResults} />
            )}
            {showResults && (
                <Card>
                    <h2>Quiz Results</h2>
                    <p>Your score: {score} out of {questions.length}</p>
                </Card>
            )}
        </div>
    );
};

export default Quiz;
