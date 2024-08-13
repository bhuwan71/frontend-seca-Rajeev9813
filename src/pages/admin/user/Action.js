/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Api from "../../../apis/Api";
import Layout from "../admin_dashboard/layout";

const UserAction = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("firstName", data.firstName);
    formData.append("lastName", data.lastName);
    formData.append("email", data.email);
    if (data.password) {
      formData.append("password", data.password);
    }
    try {
      let promise;
        promise = Api.post("/user/create", formData);
      await toast.promise(promise, {
        pending:"Adding User...",
        success: "User Added Successfully",
        error: "Error",
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      navigate("/admin/users");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Layout>
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-6">
          {id ? "Update User" : "Create User"}
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="mb-5 w-full">
              <label
                className="mb-3 block text-sm font-medium text-gray-700"
                htmlFor="firstName"
              >
                First Name
              </label>
              <input
                className={`w-full rounded-lg border ${
                  errors.firstName ? "border-red-500" : "border-gray-300"
                } bg-gray-50 py-2 px-4 text-gray-700 focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none`}
                type="text"
                {...register("firstName", {
                  required: "First Name is required",
                })}
              />
              {errors.firstName && (
                <span className="text-red-500 text-sm mt-1">
                  {errors.firstName.message}
                </span>
              )}
            </div>
            <div className="mb-5 w-full">
              <label
                className="mb-3 block text-sm font-medium text-gray-700"
                htmlFor="lastName"
              >
                Last Name
              </label>
              <input
                className={`w-full rounded-lg border ${
                  errors.lastName ? "border-red-500" : "border-gray-300"
                } bg-gray-50 py-2 px-4 text-gray-700 focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none`}
                type="text"
                {...register("lastName", {
                  required: "Last Name is required",
                })}
              />
              {errors.lastName && (
                <span className="text-red-500 text-sm mt-1">
                  {errors.lastName.message}
                </span>
              )}
            </div>
          </div>
          <div className="mb-5 w-full">
            <label
              className="mb-3 block text-sm font-medium text-gray-700"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className={`w-full rounded-lg border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } bg-gray-50 py-2 px-4 text-gray-700 focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none`}
              type="email"
              {...register("email", {
                required: "Email is required",
              })}
            />
            {errors.email && (
              <span className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </span>
            )}
          </div>
          <div className="mb-5 w-full">
            <label
              className="mb-3 block text-sm font-medium text-gray-700"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className={`w-full rounded-lg border ${
                errors.password ? "border-red-500" : "border-gray-300"
              } bg-gray-50 py-2 px-4 text-gray-700 focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none`}
              type="password"
              {...register("password")}
            />
            {errors.password && (
              <span className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </span>
            )}
          </div>
          <div className="flex justify-end gap-4 pt-4">
            <button
              className="bg-primary text-white py-2 px-6 rounded-lg shadow hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
              type="submit"
            >
              {id ? "Update" : "Save"}
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default UserAction;
