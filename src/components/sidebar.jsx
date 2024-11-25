
import React from 'react';
import './sidebar.css';
import { Link, Navigate, useNavigate } from "react-router-dom";
// import { GrHostMaintenance } from "react-icons/gr";


const Sidebar = () => {
  const navigate = useNavigate()

  const adminpannal =()=>{
    navigate("/admin")
  }
  const repairform = ()=>{
    navigate("/dashboard")
  }
  return (
    <div>
       <div className="sidebar">
      
      <ul>
        
        <li onClick={repairform}>Repair Request </li>
        {/* <li>Spare Part</li> */}
        <li onClick={adminpannal}>Repair Management</li>
        {/* <li>User List</li>
        <li>LogOut</li> */}
      </ul>
    </div>
    
    </div>
  );
  };

export default Sidebar;
