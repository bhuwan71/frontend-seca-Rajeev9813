import React from "react";
import { FaUserCircle, FaRegClock } from "react-icons/fa";
import { MdQuiz } from "react-icons/md";
import { motion } from "framer-motion";
import Layout from "../admin_dashboard/layout";

const quizResults = [
  {
    _id: "66b5e776423597164a38b516",
    userId: {
      _id: "66b5d5bc6f9b19b562fd1565",
      firstName: "karan",
      lastName: "chettri",
      email: "karan12@gmail.com",
    },
    quizId: {
      _id: "66acca8cac9ef503f20e2a41",
      quizName: "English Language Quiz",
      quizDescription:
        "Test your knowledge of English grammar, vocabulary, and comprehension.",
      quizCategory: "Language",
      questions: [
        {
          _id: "66b5e932f4e80f78407ae5ec",
          questionText: "What is the synonym of 'happy'?",
          options: ["Sad", "Joyful", "Angry", "Tired"],
          correctAnswer: 1,
        },
        {
          _id: "66b5e932f4e80f78407ae5ed",
          questionText: "Which of the following is a noun?",
          options: ["Run", "Beautiful", "Happiness", "Quickly"],
          correctAnswer: 2,
        },
        {
          _id: "66b5e932f4e80f78407ae5ee",
          questionText:
            "Choose the correct form of the verb: 'She ______ to the market every day.'",
          options: ["go", "goes", "went", "gone"],
          correctAnswer: 1,
        },
        {
          _id: "66b5e932f4e80f78407ae5ef",
          questionText:
            "Identify the adjective in this sentence: 'The quick brown fox jumps over the lazy dog.'",
          options: ["quick", "fox", "jumps", "over"],
          correctAnswer: 0,
        },
        {
          _id: "66b5e932f4e80f78407ae5f0",
          questionText: "What is the past tense of 'eat'?",
          options: ["Eated", "Ate", "Eating", "Eats"],
          correctAnswer: 1,
        },
        {
          _id: "66b5e932f4e80f78407ae5f1",
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
          _id: "66b5e932f4e80f78407ae5f2",
          questionText: "Fill in the blank: 'The sun rises in the ______.'",
          options: ["North", "South", "East", "West"],
          correctAnswer: 2,
        },
        {
          _id: "66b5e932f4e80f78407ae5f3",
          questionText: "What is the antonym of 'expensive'?",
          options: ["Cheap", "Costly", "Affordable", "Valuable"],
          correctAnswer: 0,
        },
        {
          _id: "66b5e932f4e80f78407ae5f4",
          questionText: "Which word is a conjunction?",
          options: ["Quickly", "And", "Under", "Before"],
          correctAnswer: 1,
        },
        {
          _id: "66b5e932f4e80f78407ae5f5",
          questionText:
            "Choose the correct word: 'She is ______ than her sister.'",
          options: ["tall", "taller", "tallest", "more tall"],
          correctAnswer: 1,
        },
      ],
      difficultyLevel: "Medium",
    },
    score: "7/10",
    createdAt: "2024-08-09T09:55:02.077Z",
    __v: 0,
  },
  {
    _id: "66b5e831423597164a38b562",
    userId: {
      _id: "66b5d5bc6f9b19b562fd1565",
      firstName: "karan",
      lastName: "chettri",
      email: "karan12@gmail.com",
    },
    quizId: {
      _id: "66b5e80cac9ef503f2285506",
      quizName: "Advanced English Syntax",
      quizDescription: "A quiz to test advanced English syntax knowledge.",
      quizCategory: "English Syntax",
      questions: [
        {
          _id: "66b5e932f4e80f78407ae5fb",
          questionText:
            "What is the correct order of adjectives in the sentence: 'She wore a ___ dress.'?",
          options: [
            "beautiful, red",
            "red, beautiful",
            "beautifully, red",
            "red, beautifully",
          ],
          correctAnswer: 1,
        },
        {
          _id: "66b5e932f4e80f78407ae5fc",
          questionText:
            "Identify the error in the sentence: 'Neither the teachers or the students knew the answer.'",
          options: [
            "Neither should be replaced by Either",
            "Or should be replaced by nor",
            "The sentence is correct",
            "Replace knew with know",
          ],
          correctAnswer: 1,
        },
        {
          _id: "66b5e932f4e80f78407ae5fd",
          questionText: "Choose the sentence with correct parallel structure.",
          options: [
            "She likes reading, to swim, and going to the gym.",
            "She likes to read, to swim, and going to the gym.",
            "She likes reading, swimming, and going to the gym.",
            "She likes reading, to swim, and going to gym.",
          ],
          correctAnswer: 2,
        },
        {
          _id: "66b5e932f4e80f78407ae5fe",
          questionText: "Which sentence is correctly punctuated?",
          options: [
            "Let's eat, Grandma!",
            "Lets eat Grandma!",
            "Let's eat Grandma!",
            "Lets eat, Grandma!",
          ],
          correctAnswer: 0,
        },
        {
          _id: "66b5e932f4e80f78407ae5ff",
          questionText:
            "Choose the correct form of the verb: 'If I ___ him yesterday, I would have told him.'",
          options: ["saw", "had seen", "see", "have seen"],
          correctAnswer: 1,
        },
      ],
      difficultyLevel: "Hard",
    },
    score: "2/5",
    createdAt: "2024-08-09T09:58:09.203Z",
    __v: 0,
  },
  {
    _id: "66b5e83f423597164a38b564",
    userId: {
      _id: "66b5d5bc6f9b19b562fd1565",
      firstName: "karan",
      lastName: "chettri",
      email: "karan12@gmail.com",
    },
    quizId: {
      _id: "66b5e80cac9ef503f2285505",
      quizName: "Intermediate English Comprehension",
      quizDescription:
        "A quiz to test intermediate English comprehension skills.",
      quizCategory: "English Comprehension",
      questions: [
        {
          _id: "66b5e932f4e80f78407ae5f6",
          questionText:
            "What is the main idea of the passage: 'The sky is blue because of the way sunlight interacts with the Earth's atmosphere.'?",
          options: [
            "The sky is blue due to sunlight.",
            "Sunlight changes color in the atmosphere.",
            "The Earth's atmosphere is blue.",
            "Sunlight has no effect on the sky's color.",
          ],
          correctAnswer: 0,
        },
        {
          _id: "66b5e932f4e80f78407ae5f7",
          questionText:
            "What does the word 'diligent' mean in the context: 'She is a diligent student.'?",
          options: ["Lazy", "Hardworking", "Careless", "Tired"],
          correctAnswer: 1,
        },
        {
          _id: "66b5e932f4e80f78407ae5f8",
          questionText: "Choose the correct sentence.",
          options: [
            "He asked if I was coming to the party.",
            "He asked I was coming to the party.",
            "He asked if was I coming to the party.",
            "He asked if I coming to the party.",
          ],
          correctAnswer: 0,
        },
        {
          _id: "66b5e932f4e80f78407ae5f9",
          questionText:
            "Identify the type of sentence: 'Do you know where she is?'",
          options: [
            "Declarative",
            "Interrogative",
            "Imperative",
            "Exclamatory",
          ],
          correctAnswer: 1,
        },
        {
          _id: "66b5e932f4e80f78407ae5fa",
          questionText: "Which sentence uses the word 'their' correctly?",
          options: [
            "Their going to the store.",
            "They are going to their store.",
            "There going to the store.",
            "They're going to their store.",
          ],
          correctAnswer: 1,
        },
      ],
      difficultyLevel: "Medium",
    },
    score: "5/5",
    createdAt: "2024-08-09T09:58:23.221Z",
    __v: 0,
  },
  {
    _id: "66b5e84e423597164a38b566",
    userId: {
      _id: "66b5e0fb8ce0a3ec3ca7cea9",
      firstName: "manish",
      lastName: "rai",
      email: "manish1@gmail.com",
    },
    quizId: {
      _id: "66b5e80cac9ef503f2285505",
      quizName: "Intermediate English Comprehension",
      quizDescription:
        "A quiz to test intermediate English comprehension skills.",
      quizCategory: "English Comprehension",
      questions: [
        {
          _id: "66b5e932f4e80f78407ae5f6",
          questionText:
            "What is the main idea of the passage: 'The sky is blue because of the way sunlight interacts with the Earth's atmosphere.'?",
          options: [
            "The sky is blue due to sunlight.",
            "Sunlight changes color in the atmosphere.",
            "The Earth's atmosphere is blue.",
            "Sunlight has no effect on the sky's color.",
          ],
          correctAnswer: 0,
        },
        {
          _id: "66b5e932f4e80f78407ae5f7",
          questionText:
            "What does the word 'diligent' mean in the context: 'She is a diligent student.'?",
          options: ["Lazy", "Hardworking", "Careless", "Tired"],
          correctAnswer: 1,
        },
        {
          _id: "66b5e932f4e80f78407ae5f8",
          questionText: "Choose the correct sentence.",
          options: [
            "He asked if I was coming to the party.",
            "He asked I was coming to the party.",
            "He asked if was I coming to the party.",
            "He asked if I coming to the party.",
          ],
          correctAnswer: 0,
        },
        {
          _id: "66b5e932f4e80f78407ae5f9",
          questionText:
            "Identify the type of sentence: 'Do you know where she is?'",
          options: [
            "Declarative",
            "Interrogative",
            "Imperative",
            "Exclamatory",
          ],
          correctAnswer: 1,
        },
        {
          _id: "66b5e932f4e80f78407ae5fa",
          questionText: "Which sentence uses the word 'their' correctly?",
          options: [
            "Their going to the store.",
            "They are going to their store.",
            "There going to the store.",
            "They're going to their store.",
          ],
          correctAnswer: 1,
        },
      ],
      difficultyLevel: "Medium",
    },
    score: "5/5",
    createdAt: "2024-08-09T09:58:38.405Z",
    __v: 0,
  },
];

const QuizResultsGrid = () => {
  return (
    <>
      <Layout>
        <div className="p-6 bg-gray-100 min-h-screen">
          <h1 className="text-2xl font-bold mb-6">Quiz Results</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {quizResults.map((result) => (
              <motion.div
                key={result._id}
                className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center mb-4">
                  <FaUserCircle className="text-3xl text-blue-500 mr-3" />
                  <div>
                    <p className="font-semibold text-lg">
                      {result.userId.firstName} {result.userId.lastName}
                    </p>
                    <p className="text-sm text-gray-600">
                      {result.userId.email}
                    </p>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  <MdQuiz className="text-3xl text-green-500 mr-3" />
                  <div>
                    <p className="font-semibold text-lg">
                      {result.quizId.quizName}
                    </p>
                    <p className="text-sm text-gray-600">
                      {result.quizId.quizDescription}
                    </p>
                    <p className="text-sm text-gray-600">
                      Category: {result.quizId.quizCategory}
                    </p>
                    <p className="text-sm text-gray-600">
                      Difficulty: {result.quizId.difficultyLevel}
                    </p>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  <FaRegClock className="text-3xl text-purple-500 mr-3" />
                  <div>
                    <p className="font-semibold text-lg">
                      Score: {result.score}
                    </p>
                    <p className="text-sm text-gray-600">
                      Date: {new Date(result.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default QuizResultsGrid;
