import React from "react";
import Sidebar from "./sidebar";
import RepairForm from "./repair";
import "./dashboard.css";
import Navbar from "../components/navbar/navbar";
import { jwtDecode } from "jwt-decode";

function Dashboard() {
     const getToken = localStorage.getItem("token");
      const checktoken  = jwtDecode(getToken)
      const roleName = checktoken.role;
      console.log( roleName)

  return (
    <>
      <Navbar/>

      <div className="dashboard">
        <Sidebar role={roleName} />

        <RepairForm />
      </div>
    </>
  );
}

export default Dashboard;
