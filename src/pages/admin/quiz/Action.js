/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Api from "../../../apis/Api";
import Layout from "../admin_dashboard/layout";

const QuizAction = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      questions: [
        { questionText: "", options: ["", "", "", ""], correctAnswer: 0 },
      ],
    },
  });

  const { fields, append, remove, replace } = useFieldArray({
    control,
    name: "questions",
  });

  const onSubmit = async (data) => {
    try {
      let promise;
      if (id) {
        // Update existing quiz
        promise = Api.put(`/quiz/update_quiz/${id}`, data);
      } else {
        // Create new quiz
        promise = Api.post("/quiz/create", data);
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
        const { quiz } = response.data;
        setValue("quizName", quiz.quizName);
        setValue("quizCategory", quiz.quizCategory);
        setValue("quizDescription", quiz.quizDescription);
        setValue("duration", quiz.duration);
        setValue("difficultyLevel", quiz.difficultyLevel);
        replace(quiz.questions);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (id) {
      fetchData();
    }
  }, [id]);

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
                {...register("quizName", { required: "Quiz Name is required" })}
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
                {...register("duration", { required: "Duration is required" })}
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
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
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
          <div className="my-5">
            <h3 className="text-lg font-semibold">Questions</h3>
            {fields.map((field, index) => (
              <div key={field.id} className="mb-5">
                <label
                  className="mb-3 block text-sm font-medium text-black dark:text-white"
                  htmlFor={`questions[${index}].questionText`}
                >
                  Question Text
                </label>
                <input
                  className={`w-full p-3 rounded border ${
                    errors.questions?.[index]?.questionText
                      ? "border-error"
                      : "border-stroke"
                  } bg-gray py-1 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary`}
                  type="text"
                  {...register(`questions[${index}].questionText`, {
                    required: "Question Text is required",
                  })}
                />
                {errors.questions?.[index]?.questionText && (
                  <span className="text-error text-danger text-sm mt-1">
                    {errors.questions[index].questionText.message}
                  </span>
                )}
                <label
                  className="mb-3 block text-sm font-medium text-black dark:text-white"
                  htmlFor={`questions[${index}].options`}
                >
                  Options
                </label>
                {Array.from({ length: 4 }).map((_, optionIndex) => (
                  <div key={optionIndex} className="mb-2">
                    <input
                      className={`w-full p-3 rounded border ${
                        errors.questions?.[index]?.options?.[optionIndex]
                          ? "border-error"
                          : "border-stroke"
                      } bg-gray py-1 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary`}
                      type="text"
                      {...register(
                        `questions[${index}].options[${optionIndex}]`,
                        { required: "Option is required" }
                      )}
                    />
                    {errors.questions?.[index]?.options?.[optionIndex] && (
                      <span className="text-error text-danger text-sm mt-1">
                        {errors.questions[index].options[optionIndex].message}
                      </span>
                    )}
                  </div>
                ))}

                <label
                  className="mb-3 block text-sm font-medium text-black dark:text-white"
                  htmlFor={`questions[${index}].correctAnswer`}
                >
                  Correct Answer (index)
                </label>
                <input
                  className={`w-full p-3 rounded border ${
                    errors.questions?.[index]?.correctAnswer
                      ? "border-error"
                      : "border-stroke"
                  } bg-gray py-1 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary`}
                  type="number"
                  min="0"
                  max="3"
                  {...register(`questions[${index}].correctAnswer`, {
                    required: "Correct Answer is required",
                    valueAsNumber: true,
                  })}
                />
                {errors.questions?.[index]?.correctAnswer && (
                  <span className="text-error text-danger text-sm mt-1">
                    {errors.questions[index].correctAnswer.message}
                  </span>
                )}

                <button
                  type="button"
                  onClick={() => remove(index)}
                  className="text-red-600"
                >
                  Remove Question
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() =>
                append({
                  questionText: "",
                  options: ["", "", "", ""],
                  correctAnswer: 0,
                })
              }
              className="text-blue-600"
            >
              Add Question
            </button>
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
