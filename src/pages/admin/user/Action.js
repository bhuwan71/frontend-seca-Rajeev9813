/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Api from "../../../apis/Api";
import Layout from "../admin_dashboard/layout";

const UserAction = () => {
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
    const formData = new FormData();
    if (fileList.length > 0 && fileList[0]?.originFileObj) {
      formData.append("icon", fileList[0]?.originFileObj);
    }
    formData.append("name", data.title);
    try {
      let promise;
      if (id) {
        promise = Api.patch(`/user/${parseInt(id)}`, formData);
      } else {
        promise = Api.post("/user/create", formData);
      }

      const toastMessage = id ? "Courses Update Successfully" : "Courses Added";
      await toast.promise(promise, {
        pending: id ? "Updating Course..." : "Adding Course...",
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

      navigate("/courses");
    } catch (error) {
      console.error("Error:", error);
    }
  };


  // const uploadButton = (
  //   <div>
  //     <PlusOutlined />
  //     <div style={{ marginTop: 8 }}>Upload</div>
  //   </div>
  // );

  const fetchData = async () => {
    try {
      const response = await Api.get(`/courses/${parseInt(id)}`);
      if (response) {
        setValue("title", response?.data?.data?.title);
        setFileList([
          {
            uid: "-1",
            name: response?.data?.data?.photo_url,
            status: "done",
            url: response?.data?.data?.photo_url,
          },
        ]);
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
    <>
      <Layout>
        <div className="bg-white p-4 rounded-xl shadow-4">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex  gap-5 flex-col lg:flex-row">
              <div className="mb-5.5 w-full ">
                <label
                  className="mb-3 block text-sm font-medium text-black dark:text-white"
                  htmlFor="age"
                >
                  First Name
                </label>
                <input
                  className={`w-full rounded border ${
                    errors.title ? "border-error" : "border-stroke"
                  } bg-gray py-1 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary`}
                  type="text"
                  {...register("firstName", {
                    required: "Courses Name is required",
                  })}
                />
                {errors.title && (
                  <span className="text-error text-danger text-sm mt-1">
                    {errors.title.message}
                  </span>
                )}
              </div>
              <div className="mb-5.5 w-full ">
                <label
                  className="mb-3 block text-sm font-medium text-black dark:text-white"
                  htmlFor="age"
                >
                  Last Name
                </label>
                <input
                  className={`w-full rounded border ${
                    errors.title ? "border-error" : "border-stroke"
                  } bg-gray py-1 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary`}
                  type="text"
                  {...register("lastName", {
                    required: "Course Price is required",
                  })}
                />
                {errors.title && (
                  <span className="text-error text-danger text-sm mt-1">
                    {errors.title.message}
                  </span>
                )}
              </div>
            </div>
            <div className="mb-5.5 w-full ">
              <label
                className="mb-3 block text-sm font-medium text-black dark:text-white"
                htmlFor="age"
              >
                Email
              </label>
              <input
                className={`w-full rounded border ${
                  errors.title ? "border-error" : "border-stroke"
                } bg-gray py-1 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary`}
                type="email"
                {...register("email", {
                  required: "Email Price is required",
                })}
              />
              {errors.title && (
                <span className="text-error text-danger text-sm mt-1">
                  {errors.title.message}
                </span>
              )}
            </div>
            <div className="flex pt-3 justify-end gap-4.5">
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
    </>
  );
};

export default UserAction;

// function getBase64(file, callback) {
//   const reader = new FileReader();
//   reader.readAsDataURL(file);
//   reader.onload = () => callback(reader.result);
//   reader.onerror = (error) => console.error("Error: ", error);
// }
