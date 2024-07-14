import React, { useEffect, useState } from "react";
import AllOrders from "./AllOrders";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Earnings from "../../components/vendor/Earnings";

const Dashboard = () => {
  const navigate = useNavigate();
  const userInfo = useSelector((state) => state.auth.userInfo);
  const [date, setDate] = useState(new Date().toLocaleDateString().split("/").reverse().join("-"));
  useEffect(() => {
    if (userInfo.role === "user") {
      navigate("/page-note-found");
    }
  }, [userInfo, navigate]);

  if (!userInfo) {
    // You can return a loading message or something else while userInfo is being checked
    return <div>Loading...</div>;
  }
  return (
    <div className="mt-20 mb-10">
      <Earnings date={date}/>
      <AllOrders setDashboardDate={setDate}/>
    </div>
  );
};

export default Dashboard;
