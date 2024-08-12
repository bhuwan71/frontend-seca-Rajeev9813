import React, { useEffect, useState } from 'react'
import { getAllCourse } from '../../../apis/Api';

const Learnings = () => {
    const [courses, setCourses] = useState(null);
    useEffect(()=>{
        fetchData();
    })

    const fetchData = async()=>{
        getAllCourse().then(response => {
            setCourses(response.data.course);
          })
          .catch(error => {
            console.error('Error fetching courses data:', error);
          });
    }
  return (
    <>
      <div className="relative sm:rounded-lg rounded-xl bg-white dark:bg-boxdark">
        <div className="flex flex-col lg:flex-row gap-5 items-center justify-between px-6 py-4 rounded-xl">
          <div>
            <h2 className="text-2xl font-bold text-black dark:text-white">
              
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

            </div>
          </div>
        </div>
        <div className="overflow-x-auto">
          {/* {loading ? (
            <div className="flex justify-center py-10 items-center h-full">
              <Spin size="large" />
            </div> */}
          ) : (
            <table className="w-full shadow-xl text-sm text-left text-gray-500 dark:text-gray-dark">
              <thead className="text-xs bg-black text-white text-gray-700 uppercase bg-gray-50 dark:text-gray-400">
                <tr>
                  <th className="px-4 py-3">Course Name</th>
                  <th className="px-4 py-3">Category</th>
                  <th className="px-4 py-3">Number of Questions</th>
                  <th className="px-4 py-3">Difficulty Level</th>
                  <th className="px-4 py-3">Duration (mins)</th>
                  <th className="px-4 py-3">Description</th>
                  <th className="px-4 py-3">Actions</th>
                </tr>
              </thead>
              {courses && courses?.length > 0 ? (
                <tbody>
                  {courses?.map((rowData, index) => (
                    <tr
                      key={index}
                      className={`bg-white cursor-pointer dark:text-white border-b border-[#DFDFDF]`}
                    >
                      <td className="px-6 py-2 whitespace-nowrap">
                        <img
                          className="w-10 h-10 rounded-full object-cover"
                          src={rowData?.courseImage} alt="course image"
                        //   onClick={() => handleImageClick(rowData?.courseImage)}
                        />
                      </td>
                      <td className="px-6 py-4">{rowData?.courseName}</td>
                      <td className="px-6 py-4">{rowData?.courseCategory}</td>
                      <td className="px-6 py-4">{rowData?.coursePrice}</td>
                      <td className="px-6 py-4">
                        {rowData?.courseDescription}
                      </td>
                      {/* <td className="flex py-5 gap-2"> */}
                        {/* <button
                          onClick={() => handleEdit(rowData)}
                          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-1 px-4 mx-2 rounded-md transition duration-300"
                        >
                          <AiOutlineEdit size={16} />
                        </button>
                        <button
                          onClick={() => showDeleteConfirm(rowData)}
                          className="bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-4 mx-2 rounded-md transition duration-300"
                        >
                          <AiOutlineDelete size={16} />
                        </button> */}
                      {/* </td> */}
                    </tr>
                  ))}
                </tbody>
              ) : (
                <tbody>
                  <tr>
                    <td colSpan={6} className="text-center py-20">
                      <p className="text-lg dark:text-white text-gray-500">
                        No courses found.
                      </p>
                    </td>
                  </tr>
                </tbody>
              )}
            </table>
          {/* )} */}
        </div>
      </div>


    </>
  )
}

export default Learnings