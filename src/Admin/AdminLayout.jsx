import React from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import "../assets/css/AdminLayout.css";
import "../assets/css/Responsive_AdminPanel.css";

import adminLogo from "../assets/logo/Trigas_Black_Logo.png";

import { FaUserCircle } from "react-icons/fa";
import { BiSolidUserRectangle, BiLogOut } from "react-icons/bi";
import { MdWorkOutline } from "react-icons/md";
import { IoDocumentTextOutline } from "react-icons/io5";
import { useAuth } from "./context/AuthContext";
import {
  MdDashboard,
  MdOutlineContactMail,
} from "react-icons/md";


function AdminLayout({ children, title }) {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="admin-layout">
      <div className="aside">
        <div className="admin-logo">
          <img src={adminLogo} alt="TRIGAS" className="img-fluid" />
        </div>

  <ul className="admin-nav">
  <li>
    <NavLink to="/dashboard">
      <MdDashboard /> Dashboard
    </NavLink>
  </li>

  <li>
    <NavLink to="/adminDashboard">
      <MdOutlineContactMail /> Contact Inquiry
    </NavLink>
  </li>

  <li>
    <NavLink to="/admin/careers">
      <MdWorkOutline /> Career Jobs
    </NavLink>
  </li>

  <li>
    <NavLink to="/admin/career-applications">
      <IoDocumentTextOutline /> Career Applications
    </NavLink>
  </li>

  <li>
    <button onClick={handleLogout} className="logout-btn">
      <BiLogOut /> Logout
    </button>
  </li>
</ul>
      </div>

      <div className="adminbody">
        <div className="adminbody-header">
          <h5>{title}</h5>
          <Link to="/profile" id="profile">
            <FaUserCircle />
          </Link>
        </div>

        <div className="adminbody-content">{children}</div>
      </div>
    </div>
  );
}

export default AdminLayout;