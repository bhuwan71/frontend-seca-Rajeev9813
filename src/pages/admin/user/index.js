import { Link } from "react-router-dom";
import { IoMdAddCircleOutline } from "react-icons/io";
import { useEffect, useState } from "react";
import Api from "../../../apis/Api";
import Layout from "../admin_dashboard/layout";
import UserTable from "../../../components/UserTable";

const Users = () => {
  const [loading, setLoading] = useState(true);
  const [tableData, setTableData] = useState([]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await Api.get("/course/get_all_course");
      if (res) {
        setTableData(res.data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Layout>
      <div className="py-2 flex justify-end">
        <Link to="/admin/user/UserAdd">
          <button
            type="button"
            className="flex items-center gap-2 rounded-full w-auto bg-black px-6 py-2.5 text-xs font-medium leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          >
            <IoMdAddCircleOutline size={18} />
            Add New User
          </button>
        </Link>
      </div>
      <div className="col-span-12 xl:col-span-8">
        <UserTable
          // fetchData={fetchData}
          heading={"List of  Users"}
          // tableData={tableData}
          loading={loading}
        />
      </div>
    </Layout>
  );
};

export default Users;
