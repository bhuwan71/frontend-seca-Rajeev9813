import React, { useEffect, useState } from "react";
import { FaUserCircle, FaRegClock } from "react-icons/fa";
import { MdQuiz } from "react-icons/md";
import Layout from "../admin_dashboard/layout";
import Api from "../../../apis/Api";
import Loader from "../../../components/Loader";

const QuizResultsGrid = () => {
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState([]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await Api.get("/result/get_all_results");
      if (res) {
        setResultData(res?.data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Layout>
        <div className="p-6 bg-gray-100 min-h-screen">
          <h1 className="text-2xl font-bold mb-6">Quiz Results</h1>
          {!loading ? (
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-lg shadow-lg">
                <thead className="bg-black text-white">
                  <tr>
                    <th className="text-left py-3 px-4 font-semibold text-sm">User</th>
                    <th className="text-left py-3 px-4 font-semibold text-sm">Quiz</th>
                    <th className="text-left py-3 px-4 font-semibold text-sm">Category</th>
                    <th className="text-left py-3 px-4 font-semibold text-sm">Difficulty</th>
                    <th className="text-left py-3 px-4 font-semibold text-sm">Score</th>
                    <th className="text-left py-3 px-4 font-semibold text-sm">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {resultData?.map((result) => (
                    <tr
                      key={result._id}
                      className="hover:bg-gray-100 transition-colors duration-300"
                    >
                      <td className="flex items-center py-3 px-4">
                        <FaUserCircle className="text-2xl text-blue-500 mr-3" />
                        <div>
                          <p className="font-semibold">
                            {result?.userId?.firstName} {result?.userId?.lastName}
                          </p>
                          <p className="text-sm text-gray-600">
                            {result?.userId?.email}
                          </p>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center">
                          <MdQuiz className="text-2xl text-green-500 mr-3" />
                          <div>
                            <p className="font-semibold">
                              {result?.quizId?.quizName}
                            </p>
                            <p className="text-sm text-gray-600">
                              {result?.quizId?.quizDescription}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-gray-600">{result?.quizId?.quizCategory}</td>
                      <td className="py-3 px-4 text-gray-600">{result?.quizId?.difficultyLevel}</td>
                      <td className="py-3 px-4 text-gray-600">{result?.score}</td>
                      <td className="py-3 px-4 text-gray-600">
                        {new Date(result?.createdAt).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <Loader />
          )}
        </div>
      </Layout>
    </>
  );
};

export default QuizResultsGrid;
