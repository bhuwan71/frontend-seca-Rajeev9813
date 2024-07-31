/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { PlusOutlined } from "@ant-design/icons";
import { Modal, Upload, message } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Api from "../../../apis/Api";
import Layout from "../admin_dashboard/layout";

const CourseAction = () => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [fileList, setFileList] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const beforeUpload = (file) => {
    const isImage = file.type.startsWith("image/");
    if (!isImage) {
      message.error("You can only upload image files!");
      return false;
    }

    const isLt1M = file.size / 1024 / 1024 < 1;
    if (!isLt1M) {
      message.error("Image must be smaller than 1MB!");
      return false;
    }

    return true;
  };

  const handleCancel = () => setPreviewOpen(false);

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
  };

  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);

  const onSubmit = async (data) => {
    const formData = new FormData();
    if (fileList.length > 0 && fileList[0]?.originFileObj) {
      formData.append("courseImage", fileList[0]?.originFileObj);
    }
    formData.append("courseName", data.courseName);
    formData.append("coursePrice", data.coursePrice);
    formData.append("courseCategory", data.courseCategory);
    formData.append("courseDescription", data.courseDescription);
    try {
      let promise;
      if (id) {
        promise = Api.put(`/course/update_course/${id}`, formData);
      } else {
        promise = Api.post("/course/create", formData);
      }
      const toastMessage = id ? "Course Updated Successfully" : "Course Added";
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
      navigate(`/admin/courses`);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    if (id) {
      fetchData();
    }
  }, [id, setValue]);

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  const fetchData = async () => {
    try {
      const response = await Api.get(`course/get_single_course/${id}`);
      if (response) {
        setValue("courseName", response?.data?.course?.courseName);
        setValue("coursePrice", response?.data?.course?.coursePrice);
        setValue("courseCategory", response?.data?.course?.courseCategory);
        setValue(
          "courseDescription",
          response?.data?.course?.courseDescription
        );
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

  return (
    <>
      <Layout>
        <div className="bg-white p-4 rounded-xl shadow-4">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex gap-5 flex-col lg:flex-row">
              <div className="mb-5.5 w-full">
                <label
                  className="mb-3 block text-sm font-medium text-black dark:text-white"
                  htmlFor="courseName"
                >
                  Course Name
                </label>
                <input
                  className={`w-full p-3 rounded border ${
                    errors.courseName ? "border-error" : "border-stroke"
                  } bg-gray py-1 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary`}
                  type="text"
                  {...register("courseName", {
                    required: "Course Name is required",
                  })}
                />
                {errors.courseName && (
                  <span className="text-error text-danger text-sm mt-1">
                    {errors.courseName.message}
                  </span>
                )}
              </div>
              <div className="mb-5.5 w-full">
                <label
                  className="mb-3 block text-sm font-medium text-black dark:text-white"
                  htmlFor="coursePrice"
                >
                  Course Price
                </label>
                <input
                  className={`w-full p-3 rounded border ${
                    errors.coursePrice ? "border-error" : "border-stroke"
                  } bg-gray py-1 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary`}
                  type="number"
                  {...register("coursePrice", {
                    required: "Course Price is required",
                  })}
                />
                {errors.coursePrice && (
                  <span className="text-error text-danger text-sm mt-1">
                    {errors?.coursePrice?.message}
                  </span>
                )}
              </div>
            </div>
            <div className="flex my-4 gap-5 flex-col lg:flex-row">
              <div className="mb-5.5 w-full">
                <label
                  className="mb-3 block text-sm font-medium text-black dark:text-white"
                  htmlFor="courseCategory"
                >
                  Course Category
                </label>
                <input
                  className={`w-full p-3 rounded border ${
                    errors.courseCategory ? "border-error" : "border-stroke"
                  } bg-gray py-1 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary`}
                  type="text"
                  {...register("courseCategory", {
                    required: "Course Category is required",
                  })}
                />
                {errors.courseCategory && (
                  <span className="text-error text-danger text-sm mt-1">
                    {errors.courseCategory.message}
                  </span>
                )}
              </div>
              <div className="mb-5.5 w-full">
                <label
                  className="mb-3 p-3 block text-sm font-medium text-black dark:text-white"
                  htmlFor="courseDescription"
                >
                  Course Description
                </label>
                <textarea
                  className={`w-full p-3 rounded border ${
                    errors.courseDescription ? "border-error" : "border-stroke"
                  } bg-gray py-1 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary`}
                  {...register("courseDescription", {
                    required: "Course Description is required",
                  })}
                />
                {errors.courseDescription && (
                  <span className="text-error text-danger text-sm mt-1">
                    {errors.courseDescription.message}
                  </span>
                )}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5 px-2">
              <div className="mb-5.5">
                <label
                  className="mb-3 p-3 block text-sm font-medium text-black dark:text-white"
                  htmlFor="image"
                >
                  Course Image
                </label>
                <Upload
                  action=""
                  listType="picture-card"
                  fileList={fileList}
                  beforeUpload={beforeUpload}
                  onPreview={handlePreview}
                  onChange={handleChange}
                >
                  {fileList.length >= 1 ? null : uploadButton}
                </Upload>
                <Modal
                  open={previewOpen}
                  title={previewTitle}
                  footer={null}
                  onCancel={handleCancel}
                >
                  <img
                    alt="example"
                    style={{ width: "100%" }}
                    src={previewImage}
                  />
                </Modal>
              </div>
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
    </>
  );
};

export default CourseAction;

function getBase64(file, callback) {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => callback(reader.result);
  reader.onerror = (error) => console.error("Error: ", error);
}
