import React from 'react';
import Button from './Button';

const Card = ({ question, options, answer, correctAnswerMarkUpdate, attempt }) => {
  const handleOptionClick = (selectedOption) => {
    // You can implement your logic to check the selected option here
    attempt(); // Call the attempt function to indicate that an option was selected
    if (selectedOption === answer) {
      correctAnswerMarkUpdate(); // Call the correctAnswerMarkUpdate function for scoring
    }
  };

  return (
    <div className="card">
      <h4>{question}</h4>
      {Object.keys(options).map((optionKey, index) => (
        <Button
          key={index}
          text={options[optionKey]}
          onClick={() => handleOptionClick(options[optionKey])}
        />
      ))}
    </div>
  );
};

export default Card;
