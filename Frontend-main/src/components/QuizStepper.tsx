import React, { useState, useEffect } from 'react';

const questions = [
    { question: "What is the capital of France?", options: ["Paris", "London", "Berlin", "Madrid"], answer: "Paris" },
    { question: "What is the largest planet in our solar system?", options: ["Earth", "Jupiter", "Mars", "Saturn"], answer: "Jupiter" },
    { question: "What is the smallest prime number?", options: ["0", "1", "2", "3"], answer: "2" },
    { question: "What is the chemical symbol for gold?", options: ["Au", "Ag", "Pb", "Fe"], answer: "Au" },
    { question: "Which element has the atomic number 1?", options: ["Hydrogen", "Helium", "Oxygen", "Carbon"], answer: "Hydrogen" },
    { question: "What is the boiling point of water?", options: ["100°C", "90°C", "80°C", "70°C"], answer: "100°C" },
    { question: "Who wrote 'To Kill a Mockingbird'?", options: ["Harper Lee", "Mark Twain", "Ernest Hemingway", "J.K. Rowling"], answer: "Harper Lee" },
    { question: "Which planet is known as the Red Planet?", options: ["Mars", "Venus", "Mercury", "Neptune"], answer: "Mars" },
    { question: "What gas do plants absorb from the atmosphere?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], answer: "Carbon Dioxide" },
    { question: "What is the hardest natural substance on Earth?", options: ["Gold", "Diamond", "Iron", "Platinum"], answer: "Diamond" },
];

const QuizStepper = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [answers, setAnswers] = useState<string[]>(Array(questions.length).fill(''));
    const [answerCorrectness, setAnswerCorrectness] = useState<boolean[]>(Array(questions.length).fill(false));
    const [timeLeft, setTimeLeft] = useState(60);
    const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

    useEffect(() => {
        if (intervalId) {
            clearInterval(intervalId);
        }

        const id = setInterval(() => {
            setTimeLeft(prevTime => {
                if (prevTime <= 1) {
                    clearInterval(id);
                    handleNext();
                    return 60;
                }
                return prevTime - 1;
            });
        }, 1000);

        setIntervalId(id);

        return () => {
            clearInterval(id);
        };
    }, [currentStep]);

    const handleNext = () => {
        if (currentStep === questions.length) {
            handleFinish();
        } else {
            setCurrentStep(prevStep => Math.min(prevStep + 1, questions.length));
            setTimeLeft(60);
        }
    };

    const handleSkip = () => {
        if (!answers[currentStep - 1]) {
            setCurrentStep(prevStep => Math.min(prevStep + 1, questions.length));
            setTimeLeft(60);
        }
    };

    const handleOptionChange = (option: string) => {
        if (answers[currentStep - 1]) return;

        const isCorrect = option === questions[currentStep - 1].answer;
        setAnswers(prevAnswers => {
            const newAnswers = [...prevAnswers];
            newAnswers[currentStep - 1] = option;
            return newAnswers;
        });
        setAnswerCorrectness(prevCorrectness => {
            const newCorrectness = [...prevCorrectness];
            newCorrectness[currentStep - 1] = isCorrect;
            return newCorrectness;
        });
    };

    const handleFinish = () => {
        if (intervalId) {
            clearInterval(intervalId);
        }
        alert(`Quiz completed! Your score is ${calculateScore()} XP.`);
    };

    const calculateScore = () => {
        const correctAnswers = answerCorrectness.filter(correct => correct).length;
        return correctAnswers * 10;
    };

    const stepContent = (step: number) => {
        const question = questions[step - 1];
        return (
            <div>
                <h3 className="text-lg text-white dark:text-neutral-500 mb-4">{question.question}</h3>
                <div className="space-y-4">
                    {question.options.map((option, index) => {
                        const isSelected = answers[step - 1] === option;
                        const isCorrect = answerCorrectness[step - 1] && isSelected;
                        const isIncorrect = !isCorrect && isSelected;
                        return (
                            <label key={index} className="relative block">
                                <input
                                    type="radio"
                                    name={`question-${step}`}
                                    value={option}
                                    checked={isSelected}
                                    onChange={() => handleOptionChange(option)}
                                    className="sr-only"
                                />
                                <a
                                    href="#"
                                    className={`block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 ${isSelected ? (isCorrect ? 'bg-green-100 dark:bg-green-700' : 'bg-red-100 dark:bg-red-700') : ''}`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleOptionChange(option);
                                    }}
                                >
                                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                        {option}
                                    </h5>
                                    {isCorrect && isSelected && (
                                        <svg className="absolute top-2 right-2 w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    )}
                                    {isIncorrect && isSelected && (
                                        <svg className="absolute top-2 right-2 w-5 h-5 text-red-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <line x1="18" y1="6" x2="6" y2="18"></line>
                                            <line x1="6" y1="6" x2="18" y2="18"></line>
                                        </svg>
                                    )}
                                </a>
                            </label>
                        );
                    })}
                </div>
            </div>
        );
    };

    return (
        <div>
            <ul className="relative flex-wrap gap-2 hidden 2xl:flex 2xl:flex-wrap 2xl:gap-2">
                {[...Array(questions.length)].map((_, index) => (
                    <li
                        key={index + 1}
                        className={`flex items-center gap-x-2 shrink basis-0 flex-1 ${currentStep === index + 1 ? 'active' : ''}`}
                    >
                        <span
                            className={`min-w-7 min-h-7 flex justify-center items-center text-xs align-middle rounded-full ${index + 1 <= currentStep && answers[index] ? (answerCorrectness[index] ? 'bg-green-600 text-white' : 'bg-red-600 text-white') : (index + 1 === currentStep ? 'bg-blue-600 text-gray-800' : 'bg-gray-300 text-gray-800')} dark:bg-neutral-700 dark:text-white`}
                        >
                            {index + 1 <= currentStep && answers[index] ? (
                                answerCorrectness[index] ? (
                                    <svg className="flex-shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                ) : (
                                    <svg className="flex-shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="18" y1="6" x2="6" y2="18"></line>
                                        <line x1="6" y1="6" x2="18" y2="18"></line>
                                    </svg>
                                )
                            ) : (
                                index + 1
                            )}
                        </span>
                        <span className="hidden text-sm font-medium text-gray-800 dark:text-white md:inline">
                            Question {index + 1}
                        </span>
                        {index < questions.length - 1 && (
                            <div className="flex-1 h-px bg-white dark:bg-gray-600"></div>
                        )}
                    </li>
                ))}
            </ul>

            <div className="2xl:hidden flex items-center justify-center text-lg font-medium text-gray-800 dark:text-white">
                Question {currentStep} / {questions.length}
            </div>
            <div className="p-4 mt-5 sm:mt-8 flex justify-center items-center border-4 border-solid border-green-600 dark:bg-neutral-800 dark:border-neutral-700 shadow-lg dark:shadow-xl">
                {stepContent(currentStep)}
            </div>


            <div className="mt-5 flex justify-between items-center gap-x-2">
                <div className="text-sm text-gray-700 dark:text-gray-300">
                    Time Left: {timeLeft} seconds
                </div>
                <div className="text-sm text-gray-700 dark:text-gray-300">
                    Score: {calculateScore()} XP
                </div>
                <button
                    type="button"
                    className="py-2 px-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50"
                    onClick={handleNext}
                >
                    {currentStep === questions.length ? 'Finish' : 'Next'}
                </button>
                <button
                    type="button"
                    className="py-2 px-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent bg-red-600 text-white hover:bg-red-700 disabled:opacity-50"
                    onClick={handleSkip}
                    disabled={!!answers[currentStep - 1]}
                >
                    Skip
                </button>
            </div>
        </div>
    );
};

export default QuizStepper;
