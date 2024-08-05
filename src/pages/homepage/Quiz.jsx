import React, { useEffect, useState } from "react";
import { FaCheck, FaTimes } from "react-icons/fa";
import Navbar from "../../components/Navbar";
import Api from "../../apis/Api";
const QuizItem = ({ quiz }) => {
  const [selectedAnswer, setSelectedAnswer] = useState({});
  const [showAnswer, setShowAnswer] = useState(false);

  const handleOptionClick = (questionIndex, optionIndex) => {
    if (!showAnswer) {
      setSelectedAnswer((prev) => ({
        ...prev,
        [questionIndex]: optionIndex,
      }));
    }
  };

  const handleShowAnswer = () => {
    setShowAnswer(!showAnswer); // Toggle between showing and hiding answers
    setSelectedAnswer({}); // Reset selected answers when showing answers
  };

  const calculateScore = () => {
    return quiz.questions.reduce((score, question, index) => {
      if (selectedAnswer[index] === question.correctAnswer) {
        return score + 1;
      }
      return score;
    }, 0);
  };

  const totalQuestions = quiz.questions.length;
  const score = calculateScore();

  return (
    <div className="border rounded-lg p-6 mb-6 shadow-lg bg-white">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">
        {quiz?.quizName}
      </h2>
      <p className="mb-6 text-gray-600">{quiz.quizDescription}</p>
      {quiz?.questions.map((question, qIndex) => (
        <div key={question._id} className="mb-6">
          <h3 className="text-lg font-medium mb-2 text-gray-700">
            {question.questionText}
          </h3>
          <div className="flex flex-wrap gap-2">
            {question?.options?.map((option, oIndex) => {
              const isCorrect = oIndex === question.correctAnswer;
              const isSelected = selectedAnswer[qIndex] === oIndex;
              const optionClass = showAnswer
                ? isCorrect
                  ? "bg-green-100 text-green-800 border-green-400"
                  : isSelected
                  ? "bg-red-100 text-red-800 border-red-400"
                  : "bg-gray-200 text-gray-700"
                : "bg-gray-100 text-gray-700";

              // Highlight selected option with blue border
              const borderClass =
                isSelected && !showAnswer ? "border-1 bg-blue-100" : "";

              // Add hover and click effects
              const hoverClass = !showAnswer
                ? "hover:bg-gray-300  active:scale-95 transition-transform"
                : "";

              return (
                <div
                  key={oIndex}
                  onClick={() => handleOptionClick(qIndex, oIndex)}
                  className={`px-4 py-2 border rounded-lg cursor-pointer transition-all ${optionClass} ${borderClass} ${hoverClass}`}
                >
                  {option}
                </div>
              );
            })}
          </div>
          {showAnswer && (
            <div className="mt-2">
              {selectedAnswer[qIndex] === question.correctAnswer ? (
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
      {showAnswer && (
        <div className="mt-4 p-4 border-t border-gray-200">
          <h4 className="text-lg font-semibold text-gray-800">
            Your Score: {score} / {totalQuestions}
          </h4>
        </div>
      )}
      <button
        onClick={handleShowAnswer}
        className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors mt-4"
      >
        {showAnswer ? "Reset Quiz" : "Show Results"}
      </button>
    </div>
  );
};

const Quizzes = () => {
  const [quizData, setQuizData] = useState([]);
  const fetchData = async () => {
    try {
      const res = await Api.get("/quiz/get_all_quizzes");
      if (res) {
        setQuizData(res?.data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <Navbar />
      <div className="py-28 px-10">
        {quizData?.map((quiz) => (
          <QuizItem key={quiz._id} quiz={quiz} />
        ))}
      </div>
    </>
  );
};

export default Quizzes;
