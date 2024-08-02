/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Api from "../../../apis/Api";
import Layout from "../admin_dashboard/layout";

const QuizAction = () => {
  const [fileList, setFileList] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      let promise;
      if (id) {
        // Update existing quiz
        promise = Api.put(`/quiz/update_quiz/${id}`, {
          quizName: data.quizName,
          quizCategory: data.quizCategory,
          quizDescription: data.quizDescription,
          duration: data.duration,
          difficultyLevel: data.difficultyLevel,
        });
      } else {
        // Create new quiz
        promise = Api.post("/quiz/create", {
          quizName: data.quizName,
          quizCategory: data.quizCategory,
          quizDescription: data.quizDescription,
          duration: data.duration,
          difficultyLevel: data.difficultyLevel,
        });
      }

      const toastMessage = id ? "Quiz Updated Successfully" : "Quiz Added";
      await toast.promise(promise, {
        pending: id ? "Updating Quiz..." : "Adding Quiz...",
        success: toastMessage,
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
      navigate(`/admin/quizzes`);
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred. Please try again.");
    }
  };

  const fetchData = async () => {
    try {
      const response = await Api.get(`quiz/get_single_quiz/${id}`);
      if (response) {
        setValue("quizName", response?.data?.quiz?.quizName);
        setValue("quizCategory", response?.data?.quiz?.quizCategory);
        setValue("quizDescription", response?.data?.quiz?.quizDescription);
        setValue("duration", response?.data?.quiz?.duration);
        setValue("difficultyLevel", response?.data?.quiz?.difficultyLevel);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (id) {
      fetchData();
    }
  }, [id, setValue]);

  return (
    <Layout>
      <div className="bg-white p-4 rounded-xl shadow-4">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex gap-5 flex-col lg:flex-row">
            <div className="mb-5.5 w-full">
              <label
                className="mb-3 block text-sm font-medium text-black dark:text-white"
                htmlFor="quizName"
              >
                Quiz Name
              </label>
              <input
                className={`w-full p-3 rounded border ${
                  errors.quizName ? "border-error" : "border-stroke"
                } bg-gray py-1 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary`}
                type="text"
                {...register("quizName", {
                  required: "Quiz Name is required",
                })}
              />
              {errors.quizName && (
                <span className="text-error text-danger text-sm mt-1">
                  {errors.quizName.message}
                </span>
              )}
            </div>
            <div className="mb-5.5 w-full">
              <label
                className="mb-3 block text-sm font-medium text-black dark:text-white"
                htmlFor="quizCategory"
              >
                Quiz Category
              </label>
              <input
                className={`w-full p-3 rounded border ${
                  errors.quizCategory ? "border-error" : "border-stroke"
                } bg-gray py-1 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary`}
                type="text"
                {...register("quizCategory", {
                  required: "Quiz Category is required",
                })}
              />
              {errors.quizCategory && (
                <span className="text-error text-danger text-sm mt-1">
                  {errors.quizCategory.message}
                </span>
              )}
            </div>
          </div>
          <div className="flex my-4 gap-5 flex-col lg:flex-row">
            <div className="mb-5.5 w-full">
              <label
                className="mb-3 block text-sm font-medium text-black dark:text-white"
                htmlFor="duration"
              >
                Duration (minutes)
              </label>
              <input
                className={`w-full p-3 rounded border ${
                  errors.duration ? "border-error" : "border-stroke"
                } bg-gray py-1 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary`}
                type="number"
                {...register("duration", {
                  required: "Duration is required",
                })}
              />
              {errors.duration && (
                <span className="text-error text-danger text-sm mt-1">
                  {errors.duration.message}
                </span>
              )}
            </div>
            <div className="mb-5.5 w-full">
              <label
                className="mb-3 p-3 block text-sm font-medium text-black dark:text-white"
                htmlFor="difficultyLevel"
              >
                Difficulty Level
              </label>
              <select
                className={`w-full p-3 rounded border ${
                  errors.difficultyLevel ? "border-error" : "border-stroke"
                } bg-gray py-1 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary`}
                {...register("difficultyLevel", {
                  required: "Difficulty Level is required",
                })}
              >
                <option value="">Select Difficulty Level</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
              {errors.difficultyLevel && (
                <span className="text-error text-danger text-sm mt-1">
                  {errors.difficultyLevel.message}
                </span>
              )}
            </div>
          </div>
          <div className="mb-5.5 w-full">
            <label
              className="mb-3 p-3 block text-sm font-medium text-black dark:text-white"
              htmlFor="quizDescription"
            >
              Quiz Description
            </label>
            <textarea
              className={`w-full p-3 rounded border ${
                errors.quizDescription ? "border-error" : "border-stroke"
              } bg-gray py-1 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary`}
              {...register("quizDescription", {
                required: "Quiz Description is required",
              })}
            />
            {errors.quizDescription && (
              <span className="text-error text-danger text-sm mt-1">
                {errors.quizDescription.message}
              </span>
            )}
          </div>
          <div className="flex justify-end gap-4.5">
            <button
              className="flex text-white justify-center rounded bg-black py-2 px-6 font-medium text-gray hover:shadow-1"
              type="submit"
            >
              {id ? <>Update</> : <>Save</>}
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default QuizAction;
