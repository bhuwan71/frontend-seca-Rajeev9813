import React from "react";
import { Modal, Button } from "antd";
import { FaQuestionCircle, FaList, FaRegClock } from "react-icons/fa";

const QuizDetailsModal = ({ visible, onClose, quizData }) => {
  return (
    <Modal
      title="Quiz Details"
      visible={visible}
      onCancel={onClose}
      footer={[
        <Button key="close" onClick={onClose} type="primary">
          Close
        </Button>,
      ]}
      width={800} // Increased width
      centered // Center the modal
      className="custom-modal"
      bodyStyle={{ maxHeight: "500px", overflowY: "auto" }} // Fixed height and scroll
    >
      {quizData ? (
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-4 flex items-center text-indigo-600">
            <FaQuestionCircle className="mr-2" /> {quizData.quizName}
          </h2>
          <div className="mb-4 flex items-center text-lg">
            <FaList className="mr-2 text-blue-500" />
            <span className="font-semibold text-gray-700">Category:</span>
            <span className="ml-2 text-gray-900">{quizData.quizCategory}</span>
          </div>
          <div className="mb-4 flex items-center text-lg">
            <FaRegClock className="mr-2 text-blue-500" />
            <span className="font-semibold text-gray-700">Difficulty Level:</span>
            <span className="ml-2 text-gray-900">{quizData.difficultyLevel}</span>
          </div>
          <div className="mb-4 text-lg">
            <span className="font-semibold text-gray-700">Description:</span>
            <p className="ml-2 text-gray-900">{quizData.quizDescription}</p>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold text-xl text-gray-700">Questions:</h3>
            <ul className="list-disc list-inside mt-2 max-h-80 overflow-y-auto">
              {quizData.questions.map((question, index) => (
                <li key={index} className="mb-2">
                  <strong className="text-gray-800">{question.questionText}</strong>
                  <ul className="list-disc list-inside ml-6 mt-1 text-gray-600">
                    {question.options.map((option, i) => (
                      <li key={i}>{option}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <p className="text-center">Loading...</p>
      )}
    </Modal>
  );
};

export default QuizDetailsModal;
