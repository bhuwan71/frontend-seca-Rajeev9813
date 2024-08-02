import React, { useState } from "react";
import { FaCheck, FaTimes } from "react-icons/fa";
import Navbar from "../../components/Navbar";

const QuizItem = ({ quiz }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleOptionClick = (questionIndex, optionIndex) => {
    if (!showAnswer) {
      setSelectedAnswer({ questionIndex, optionIndex });
    }
  };

  const handleShowAnswer = () => {
    setShowAnswer(true);
  };

  return (
    <div className="border rounded-lg p-4 mb-4 shadow-lg bg-white">
      <h2 className="text-2xl font-semibold mb-2 text-gray-800">
        {quiz?.quizName}
      </h2>
      <p className="mb-4 text-gray-600">{quiz.quizDescription}</p>
      {quiz?.questions.map((question, qIndex) => (
        <div key={question._id} className="mb-6">
          <h3 className="text-lg font-medium mb-2 text-gray-700">
            {question.questionText}
          </h3>
          <div className=" flex flex-row justify-between">
            {question?.options?.map((option, oIndex) => {
              const isCorrect = oIndex === question.correctAnswer;
              const isSelected =
                selectedAnswer?.questionIndex === qIndex &&
                selectedAnswer?.optionIndex === oIndex;

              // Define classes for option styling
              const optionClass = showAnswer
                ? isCorrect
                  ? "bg-green-100 text-green-800 border-green-400"
                  : isSelected
                  ? "bg-red-100 text-red-800 border-red-400"
                  : "bg-gray-200 text-gray-700"
                : "bg-gray-100 text-gray-700";

              // Add hover and click effects
              const hoverClass = !showAnswer
                ? "hover:bg-gray-300 active:scale-95 transition-transform"
                : "";

              return (
                <div
                  key={oIndex}
                  onClick={() => handleOptionClick(qIndex, oIndex)}
                  className={`px-2 py-1 border w-[20%] rounded-lg cursor-pointer transition-all ${optionClass} ${hoverClass} ${
                    isSelected && !showAnswer ? "border-2 border-blue-500" : ""
                  }`}
                >
                  {option}
                </div>
              );
            })}
          </div>
          {showAnswer && (
            <div className="mt-2">
              {selectedAnswer?.questionIndex === qIndex &&
              selectedAnswer?.optionIndex === question.correctAnswer ? (
                <p className="text-green-700 flex items-center">
                  <FaCheck className="mr-2 text-green-600" /> Correct!
                </p>
              ) : (
                <p className="text-red-700 flex items-center">
                  <FaTimes className="mr-2 text-red-600" /> Incorrect
                </p>
              )}
            </div>
          )}
        </div>
      ))}
      <button
        onClick={handleShowAnswer}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
      >
        Show Answers
      </button>
    </div>
  );
};

const Quizzes = () => {
  const quizzes = [
    {
      _id: "66acca8cac9ef503f20e2a41",
      quizName: "English Language Quiz",
      quizDescription:
        "Test your knowledge of English grammar, vocabulary, and comprehension.",
      quizCategory: "Language",
      questions: [
        {
          _id: "66acd1410210a8588f4e8edb",
          questionText: "What is the synonym of 'happy'?",
          options: ["Sad", "Joyful", "Angry", "Tired"],
          correctAnswer: 1,
        },
        {
          _id: "66acd1410210a8588f4e8edc",
          questionText: "Which of the following is a noun?",
          options: ["Run", "Beautiful", "Happiness", "Quickly"],
          correctAnswer: 2,
        },
        {
          _id: "66acd1410210a8588f4e8edd",
          questionText:
            "Choose the correct form of the verb: 'She ______ to the market every day.'",
          options: ["go", "goes", "went", "gone"],
          correctAnswer: 1,
        },
        {
          _id: "66acd1410210a8588f4e8ede",
          questionText:
            "Identify the adjective in this sentence: 'The quick brown fox jumps over the lazy dog.'",
          options: ["quick", "fox", "jumps", "over"],
          correctAnswer: 0,
        },
        {
          _id: "66acd1410210a8588f4e8edf",
          questionText: "What is the past tense of 'eat'?",
          options: ["Eated", "Ate", "Eating", "Eats"],
          correctAnswer: 1,
        },
        {
          _id: "66acd1410210a8588f4e8ee0",
          questionText: "Which sentence is grammatically correct?",
          options: [
            "He don't like apples.",
            "She doesn't likes coffee.",
            "They doesn't like playing football.",
            "He doesn't like apples.",
          ],
          correctAnswer: 3,
        },
        {
          _id: "66acd1410210a8588f4e8ee1",
          questionText: "Fill in the blank: 'The sun rises in the ______.'",
          options: ["North", "South", "East", "West"],
          correctAnswer: 2,
        },
        {
          _id: "66acd1410210a8588f4e8ee2",
          questionText: "What is the antonym of 'expensive'?",
          options: ["Cheap", "Costly", "Affordable", "Valuable"],
          correctAnswer: 0,
        },
        {
          _id: "66acd1410210a8588f4e8ee3",
          questionText: "Which word is a conjunction?",
          options: ["Quickly", "And", "Under", "Before"],
          correctAnswer: 1,
        },
        {
          _id: "66acd1410210a8588f4e8ee4",
          questionText:
            "Choose the correct word: 'She is ______ than her sister.'",
          options: ["tall", "taller", "tallest", "more tall"],
          correctAnswer: 1,
        },
      ],
      difficultyLevel: "Medium",
      createdAt: "2024-08-02T00:00:00.000Z",
    },
    {
      _id: "66accad8ac9ef503f20e8301",
      quizName: "German Language Basics",
      quizDescription:
        "A quiz to test your knowledge of basic German vocabulary, grammar, and phrases.",
      quizCategory: "Language",
      questions: [
        {
          _id: "66acd1410210a8588f4e8ee5",
          questionText: "What is the German word for 'apple'?",
          options: ["Apfel", "Banane", "Traube", "Orange"],
          correctAnswer: 0,
        },
        {
          _id: "66acd1410210a8588f4e8ee6",
          questionText: "How do you say 'good morning' in German?",
          options: ["Guten Tag", "Guten Morgen", "Guten Abend", "Gute Nacht"],
          correctAnswer: 1,
        },
        {
          _id: "66acd1410210a8588f4e8ee7",
          questionText: "Which of these words means 'bread' in German?",
          options: ["Wasser", "Milch", "Brot", "Käse"],
          correctAnswer: 2,
        },
        {
          _id: "66acd1410210a8588f4e8ee8",
          questionText: "What is the correct translation for 'blue' in German?",
          options: ["Blau", "Rot", "Grün", "Gelb"],
          correctAnswer: 0,
        },
        {
          _id: "66acd1410210a8588f4e8ee9",
          questionText: "Which word is used to say 'please' in German?",
          options: ["Danke", "Bitte", "Entschuldigung", "Hallo"],
          correctAnswer: 1,
        },
        {
          _id: "66acd1410210a8588f4e8eea",
          questionText: "What does the German word 'Katze' mean?",
          options: ["Dog", "Cat", "Bird", "Fish"],
          correctAnswer: 1,
        },
        {
          _id: "66acd1410210a8588f4e8eeb",
          questionText: "How do you say 'I love you' in German?",
          options: [
            "Ich mag dich",
            "Ich brauche dich",
            "Ich sehe dich",
            "Ich liebe dich",
          ],
          correctAnswer: 3,
        },
        {
          _id: "66acd1410210a8588f4e8eec",
          questionText: "What is the German word for 'school'?",
          options: ["Schule", "Universität", "Bibliothek", "Krankenhaus"],
          correctAnswer: 0,
        },
        {
          _id: "66acd1410210a8588f4e8eed",
          questionText: "How do you say 'thank you' in German?",
          options: ["Bitte", "Danke", "Hallo", "Tschüss"],
          correctAnswer: 1,
        },
        {
          _id: "66acd1410210a8588f4e8eee",
          questionText: "Which of these is the German word for 'water'?",
          options: ["Wein", "Tee", "Wasser", "Saft"],
          correctAnswer: 2,
        },
      ],
      difficultyLevel: "Easy",
      createdAt: "2024-08-02T00:00:00.000Z",
    },
  ];
  return (
    <>
      <Navbar />
      <div className="py-28 px-10">
        {quizzes?.map((quiz) => (
          <QuizItem key={quiz._id} quiz={quiz} />
        ))}
      </div>
    </>
  );
};

export default Quizzes;
