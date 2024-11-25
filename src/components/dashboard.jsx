import React from "react";
import Sidebar from "./sidebar";
import RepairForm from "./repair";
import "./dashboard.css";
import Navbar from "../components/navbar/navbar";

function Dashboard() {
  return (
    <>
      <Navbar />
      <div className="dashboard">
        <Sidebar />

        <RepairForm />
      </div>
    </>
  );
}

export default Dashboard;
