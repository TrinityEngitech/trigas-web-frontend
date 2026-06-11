import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminLayout from "./AdminLayout";
import {
  MdWorkOutline,
  MdOutlineContactMail,
  MdDescription,
  MdPeopleAlt,
} from "react-icons/md";

function Dashboard() {
  const [counts, setCounts] = useState({
    inquiries: 0,
    careers: 0,
    applications: 0,
    admins: 1,
  });

  useEffect(() => {
    fetchDashboardCounts();
  }, []);

  const fetchDashboardCounts = async () => {
    try {
      const [inqRes, careerRes, appRes] = await Promise.all([
        axios.get("http://localhost:2003/adminDashboard"),
        axios.get("http://localhost:2003/api/careers"),
        axios.get("http://localhost:2003/api/career-applications"),
      ]);

      setCounts({
        inquiries: inqRes.data?.length || 0,
        careers: careerRes.data?.data?.length || 0,
        applications: appRes.data?.data?.length || 0,
        admins: 1,
      });
    } catch (error) {
      console.log("Dashboard count error:", error);
    }
  };

  const cards = [
    {
      title: "Contact Inquiries",
      count: counts.inquiries,
      icon: <MdOutlineContactMail />,
    },
    {
      title: "Career Jobs",
      count: counts.careers,
      icon: <MdWorkOutline />,
    },
    {
      title: "Applications",
      count: counts.applications,
      icon: <MdDescription />,
    },
    {
      title: "Admin Users",
      count: counts.admins,
      icon: <MdPeopleAlt />,
    },
  ];

  return (
    <AdminLayout>
      <div className="admin-hed">
        <h2>Dashboard</h2>
      </div>

      <div className="dashboard-welcome">
        <div>
          <h3>Hello Trigas Admin 👋</h3>
          <p>Welcome back! Manage inquiries, careers and applications here.</p>
        </div>
      </div>

      <div className="row mt-4">
        {cards.map((item, index) => (
          <div className="col-lg-3 col-md-6 mb-4" key={index}>
            <div className="dashboard-card">
              <div>
                <h4>{item.count}</h4>
                <p>{item.title}</p>
              </div>
              <span>{item.icon}</span>
            </div>
          </div>
        ))}
      </div>
    </AdminLayout>
  );
}

export default Dashboard;