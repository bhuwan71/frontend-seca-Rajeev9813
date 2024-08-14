import React, { useEffect, useState } from 'react'
import { getAllCourse } from '../../../apis/Api';
import { Navigate, useNavigate } from 'react-router-dom';

const Learnings = () => {
    const [courses, setCourses] = useState(null);

    const navigate = useNavigate();
    useEffect(()=>{
        fetchData();
    },[])

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
      <div className="relative sm:rounded-lg rounded-xl bg-white dark:bg-boxdark mt-8">
        <div className="flex flex-col lg:flex-row  items-center justify-center px-6 py-2  rounded-xl">
          <div >
            <h2 className="text-2xl text-center font-bold text-black dark:text-white">
              Courses
            </h2>
          </div>

        </div>
        <div className="overflow-x-auto">
         
            <table className="w-full shadow-xl  text-sm text-left text-gray-500 dark:text-gray-dark">
              <thead className="text-xs bg-black dark: text-white text-gray-700 uppercase dark: bg-gray-50 dark:text-gray-400">
                <tr>
                  <th className="px-4 py-3">Course Name</th>
                  <th className="px-4 py-3">Category</th>
                  <th className="px-4 py-3">CoursePrice</th>
                  <th className="px-4 py-3">Description</th>
                  <th className="px-4 py-3">Action</th>
                </tr>
              </thead>
              {courses && courses?.length > 0 ? (
                <tbody>
                  {courses?.map((rowData, index) => (
                    <tr
                      key={index}
                      className={`bg-white cursor-pointer dark:text-white border-b border-[#DFDFDF] text-black`}
                    >
                      <td className="px-6 py-4">{rowData?.courseName}</td>
                      <td className="px-6 py-4">{rowData?.courseCategory}</td>
                      <td className="px-6 py-4">{rowData?.coursePrice}</td>
                      <td className="px-6 py-4">
                        {rowData?.courseDescription}
                      </td>
                      <td className="px-6 py-4 flex justify-center items-center">
                        <button onClick={()=>navigate("/dashboard/module")} className='px-5 py-2 bg-blue-400 text-blue-700 font-bold'> Go To Module/Subject </button>
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