/* eslint-disable jsx-a11y/img-redundant-alt */
import { Spin, Modal } from "antd";
import { useState, useEffect } from "react";
import debounce from "lodash/debounce";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai"; // Import edit icon
import { ExclamationCircleFilled } from "@ant-design/icons";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Api from "../apis/Api";
import React from "react";

const { confirm } = Modal;

const UserTable = ({ heading, tableData, loading, fetchData }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredData, setFilteredData] = useState(tableData);
  const [searchTerm, setSearchTerm] = useState("");

  const debouncedSearch = debounce((term) => {
    setSearchTerm(term);
  }, 300);

  const handleSearch = (e) => {
    debouncedSearch(e.target.value);
  };

  const handleDelete = async (rowData) => {
    try {
      const response = await Api.delete(`/user/delete_user/${rowData._id}`);
      if (response) {
        fetchData(currentPage);
        toast.success("User Deleted Successfully", {
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
      title: "Are you sure you want to delete this user?",
      icon: <ExclamationCircleFilled />,
      content: `${rowData.firstName} ${rowData.lastName}`,
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

  const handleEdit = (rowData) => {
    // Logic for editing user
    console.log("Edit user:", rowData);
    // You can navigate to an edit page or open a modal for editing here
  };

  useEffect(() => {
    const filtered = tableData?.filter(
      (rowData) =>
        rowData.firstName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        rowData.lastName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        rowData.email?.toLowerCase().includes(searchTerm.toLowerCase())
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
                placeholder="Search for Users"
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
              <thead className="text-xs bg-black text-white text-gray-700 uppercase dark:text-gray-400">
                <tr>
                  <th className="px-6 py-3">First Name</th>
                  <th className="px-6 py-3">Last Name</th>
                  <th className="px-6 py-3">Email</th>
                  <th className="px-6 py-3">Action</th>
                </tr>
              </thead>
              {filteredData && filteredData.length > 0 ? (
                <tbody>
                  {filteredData.map((rowData, index) => (
                    <tr
                      key={index}
                      className="bg-white cursor-pointer dark:text-white border-b border-[#DFDFDF] hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                      <td className="px-6 py-3">{rowData?.firstName}</td>
                      <td className="px-6 py-3">{rowData?.lastName}</td>
                      <td className="px-6 py-3">{rowData?.email}</td>
                      <td className="flex py-3 gap-4">
                        <button
                          onClick={() => showDeleteConfirm(rowData)}
                          className="bg-red-500 hover:bg-red-700 mx-3 text-white font-bold py-1 px-4 rounded-md transition duration-300"
                        >
                          <AiOutlineDelete size={12} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              ) : (
                <tbody>
                  <tr>
                    <td colSpan={4} className="text-center py-20">
                      <p className="text-lg dark:text-white text-gray-500">
                        No Users found.
                      </p>
                    </td>
                  </tr>
                </tbody>
              )}
            </table>
          )}
        </div>
      </div>
    </>
  );
};

export default UserTable;
