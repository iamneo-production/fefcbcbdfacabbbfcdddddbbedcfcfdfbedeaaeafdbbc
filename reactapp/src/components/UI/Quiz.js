import React, { useState, useEffect } from 'react';
import Card from './UI/Card';
import Button from './UI/Button';
import { checkAnswers } from '../functions/quizFunctions';

const sampleQuestions = [
    {
        question: 'What is the capital of France?',
        options: ['Berlin', 'Paris', 'London', 'Rome'],
        correctAnswer: 'Paris',
    },
    {
        question: 'Which planet is known as the Red Planet?',
        options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
        correctAnswer: 'Mars',
    },
    {
        question: 'What gas do plants use for photosynthesis?',
        options: ['Carbon Dioxide', 'Oxygen', 'Nitrogen', 'Hydrogen'],
        correctAnswer: 'Carbon Dioxide',
    },
    {
        question: 'Which famous scientist developed the theory of relativity?',
        options: ['Isaac Newton', 'Galileo Galilei', 'Albert Einstein', 'Nikola Tesla'],
        correctAnswer: 'Albert Einstein',
    },
    {
        question: 'What is the chemical symbol for gold?',
        options: ['Go', 'Au', 'Ag', 'Gl'],
        correctAnswer: 'Au',
    },
];

const Quiz = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState('');
    const [disabledOptions, setDisabledOptions] = useState([]);
    const [score, setScore] = useState(0);
    const [showResults, setShowResults] = useState(false);
    const [randomQuestions, setRandomQuestions] = useState([]);

    useEffect(() => {
        const shuffledQuestions = sampleQuestions.sort(() => 0.5 - Math.random());
        const selectedQuestions = shuffledQuestions.slice(0, 5); // Select 5 random questions
        setRandomQuestions(selectedQuestions);
    }, []);

    const currentQuestion = randomQuestions[currentQuestionIndex];

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setDisabledOptions([...disabledOptions, option]);
    };

    const handleNextQuestion = () => {
        if (checkAnswers(selectedOption, currentQuestion.correctAnswer)) {
            setScore(score + 1);
        }

        setSelectedOption('');
        setDisabledOptions([]);
        setCurrentQuestionIndex(currentQuestionIndex + 1);

        if (currentQuestionIndex === randomQuestions.length - 1) {
            setShowResults(true);
        }
    };

    if (!currentQuestion) {
        return <div>Loading...</div>; // Handle loading state
    }

    return (
        <div>
            {!showResults && (
                <Card>
                    <h2>{currentQuestion.question}</h2>
                    {currentQuestion.options.map((option, index) => (
                        <Button
                            key={index}
                            text={option}
                            onClick={() => handleOptionClick(option)}
                            disabled={disabledOptions.includes(option)}
                        />
                    ))}
                    <Button text="Next Question" onClick={handleNextQuestion} disabled={!selectedOption} />
                </Card>
            )}
            {showResults && (
                <Card>
                    <h2>Quiz Results</h2>
                    <p>Your score: {score}</p>
                </Card>
            )}
        </div>
    );
};

export default Quiz;
