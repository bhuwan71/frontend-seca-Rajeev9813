import { useEffect, useState } from "react";
import Api from "../../../apis/Api";
import Layout from "../admin_dashboard/layout";
import TicketTable from "../../../components/TicketTable";

const TicketPage = () => {
  const [loading, setLoading] = useState(false);
  const [tableData, setTableData] = useState([]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await Api.get("/ticket");
      if (res) {
        setTableData(res?.data?.course);
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
      <div className="col-span-12 xl:col-span-8">
        <TicketTable
          fetchData={fetchData}
          heading={"List of Ticket Table"}
          tableData={tableData}
          loading={loading}
        />
      </div>
    </Layout>
  );
};

export default TicketPage;
