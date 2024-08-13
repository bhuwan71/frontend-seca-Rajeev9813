import { Spin, Modal } from "antd";
import { useState, useEffect } from "react";
import debounce from "lodash/debounce";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { ExclamationCircleFilled } from "@ant-design/icons";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Api from "../apis/Api";
import React from "react";
import QuizDetailsModal from "./QuizDetailsModal"; // Import the QuizDetailsModal component

const { confirm } = Modal;

const QuizTable = ({ heading, tableData, loading, fetchData }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredData, setFilteredData] = useState(tableData);
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedQuiz, setSelectedQuiz] = useState(null);

  const debouncedSearch = debounce((term) => {
    setSearchTerm(term);
  }, 300);

  const handleSearch = (e) => {
    debouncedSearch(e.target.value);
  };

  const handleDelete = async (rowData) => {
    try {
      const response = await Api.delete(`/quiz/delete_quiz/${rowData._id}`);
      if (response) {
        fetchData(currentPage);
        toast.success("Quiz Deleted Successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } catch (error) {
      toast.error("Something went wrong", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const showDeleteConfirm = (rowData) => {
    confirm({
      title: "Are you sure you want to delete this Quiz?",
      icon: <ExclamationCircleFilled />,
      content: `${rowData.quizName}`,
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        handleDelete(rowData);
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  const handleRowClick = async (rowData) => {
    try {
      const response = await Api.get(`/quiz/get_single_quiz/${rowData._id}`);
      if (response) {
        setSelectedQuiz(response?.data?.quiz);
        setIsModalOpen(true);
      }
    } catch (error) {
      toast.error("Failed to load quiz details", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  useEffect(() => {
    const filtered = tableData?.filter((rowData) =>
      rowData.quizName?.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  }, [searchTerm, tableData]);

  return (
    <>
      <div className="relative sm:rounded-lg rounded-xl bg-white dark:bg-boxdark">
        <div className="flex flex-col lg:flex-row gap-5 items-center justify-between px-6 py-4 rounded-xl">
          <div>
            <h2 className="text-2xl font-bold text-black dark:text-white">
              {heading}
            </h2>
          </div>
          <div>
            <label htmlFor="table-search" className="sr-only">
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="table-search-users"
                className="block px-10 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search for Quiz"
                onChange={handleSearch}
              />
            </div>
          </div>
        </div>
        <div className="overflow-x-auto">
          {loading ? (
            <div className="flex justify-center py-10 items-center h-full">
              <Spin size="large" />
            </div>
          ) : (
            <table className="w-full shadow-xl text-sm text-left text-gray-500 dark:text-gray-dark">
              <thead className="text-xs bg-black text-white text-gray-700 uppercase bg-gray-50 dark:text-gray-400">
                <tr>
                  <th className="px-4 py-3">Quiz Name</th>
                  <th className="px-4 py-3">Category</th>
                  <th className="px-4 py-3">Number of Questions</th>
                  <th className="px-4 py-3">Difficulty Level</th>
                  <th className="px-4 py-3">Description</th>
                  <th className="px-4 py-3">Actions</th>
                </tr>
              </thead>
              {filteredData && filteredData?.length > 0 ? (
                <tbody>
                  {filteredData?.map((rowData, index) => (
                    <tr
                      key={index}
                      className="bg-white cursor-pointer dark:text-white border-b border-[#DFDFDF] hover:bg-gray-100 dark:hover:bg-gray-700"
                      onClick={() => handleRowClick(rowData)}
                    >
                      <td className="px-6 py-4">{rowData.quizName}</td>
                      <td className="px-6 py-4">{rowData.quizCategory}</td>
                      <td className="px-6 py-4">{rowData.questions.length}</td>
                      <td className="px-6 py-4">{rowData.difficultyLevel}</td>
                      <td className="px-6 py-4">{rowData.quizDescription}</td>
                      <td className="flex py-5 gap-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            showDeleteConfirm(rowData);
                          }}
                          className="bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-4 mx-2 rounded-md transition duration-300"
                        >
                          <AiOutlineDelete size={16} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              ) : (
                <tbody>
                  <tr>
                    <td colSpan={6} className="text-center py-20">
                      <p className="text-lg dark:text-white text-gray-500">
                        No Quizzes found.
                      </p>
                    </td>
                  </tr>
                </tbody>
              )}
            </table>
          )}
        </div>
      </div>
      {isModalOpen && (
        <QuizDetailsModal
          visible={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          quizData={selectedQuiz}
        />
      )}
    </>
  );
};

export default QuizTable;
