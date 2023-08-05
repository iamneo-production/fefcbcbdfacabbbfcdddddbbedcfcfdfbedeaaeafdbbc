// quizFunctions.js
const quizData = [
    {
                text: 'Question 1',
                        options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
                                correctOption: 'Option 4',
                                    },
{
                    text: 'Question 2',
                                            options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
                                                                            correctOption: 'Option 1',
                                                                                                                },

{
                    text: 'Question 3',
                                            options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
                                                                            correctOption: 'Option 2',
                                                                                                                },


    {
        text: 'Question 4',
        options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
        correctOption: 'Option 2',
    },
    {
        text: 'Question 5',
        options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
        correctOption: 'Option 3',
    },
    // Add more questions as needed...
    ];
                                                            
    export const getQuizData = () => {
    // You can fetch quiz data from an API here instead
    return quizData;
    };
    export const checkAnswer = (quizData, selectedOption) => {
        const currentQuestion = quizData.find((question) => question.options.includes(selectedOption));
        if (!currentQuestion) return false;
        return currentQuestion.correctOption === selectedOption;
    };                                                               
                                                                            
                                                                                            