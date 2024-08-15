/* eslint-disable jsx-a11y/img-redundant-alt */
import { Spin } from "antd";
import { useState, useEffect } from "react";
import debounce from "lodash/debounce";
import "react-toastify/dist/ReactToastify.css";
import React from "react";


const TicketTable = ({ heading, tableData, loading, fetchData }) => {
  const [filteredData, setFilteredData] = useState(tableData);
  const [searchTerm, setSearchTerm] = useState("");

  const debouncedSearch = debounce((term) => {
    setSearchTerm(term);
  }, 300);

  const handleSearch = (e) => {
    debouncedSearch(e.target.value);
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

export default TicketTable;
