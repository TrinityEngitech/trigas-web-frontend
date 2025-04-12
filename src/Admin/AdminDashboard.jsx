import { Link } from "react-router-dom";
import "../assets/css/Admin.css";
import "../assets/js/AdminDashboard.js";
import "../assets/css/Responsive_AdminPanel.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import adminLogo from "../assets/logo/Trigas_Black_Logo.png";
import { FaUserCircle } from "react-icons/fa";
import { BiSolidUserRectangle } from "react-icons/bi";
import { BiLogOut } from "react-icons/bi";
import MUIDataTable from "mui-datatables";

function AdminDashboard() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get("http://localhost:2003/adminDashboard");
        setContacts(response.data);
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
    };

    fetchContacts();
  }, []);

  // Function to delete a single contact
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:2003/adminDashboard/${id}`);
      setContacts(contacts.filter(contact => contact._id !== id)); // Update local state
    } catch (error) {
      console.error("Error deleting contact:", error);
    }
  };

  const columns = [
    {
      name: "name",
      label: "Name",
      options: {
        filter: true,
        sort: true,
        setCellProps: () => ({ style: { textAlign: "center" } }),
      },
    },
    {
      name: "email",
      label: "Email",
      options: {
        filter: true,
        sort: true,
        setCellProps: () => ({ style: { textAlign: "center" } }),
        setHeaderProps: () => ({ style: { textAlign: "center" } }),
      },
    },
    {
      name: "number",
      label: "Contact No",
      options: {
        filter: true,
        sort: true,
        setCellProps: () => ({ style: { textAlign: "center" } }),
      },
    },
    {
      name: "message",
      label: "MESSAGE",
      options: {
        filter: false,
        sort: false,
        setCellProps: () => ({ style: { textAlign: "center" } }),
      },
    },
    // Uncomment the following block to enable the delete button for each row
    // {
    //   name: "actions",
    //   label: "ACTION",
    //   options: {
    //     filter: false,
    //     sort: false,
    //     setCellProps: () => ({ style: { textAlign: "center" } }),
    //     customBodyRender: (value, tableMeta) => {
    //       const contactId = contacts[tableMeta.rowIndex]._id; // Get the contact ID
    //       return (
    //         <button onClick={() => handleDelete(contactId)} className="btn btn-light">
    //           <MdDelete style={{ color: "red", fontSize: "1.3rem" }} />
    //         </button>
    //       );
    //     },
    //   },
    // },
  ];

  const options = {
    selectableRows: "none", // Disable checkboxes
    responsive: "standard",
  };

  return (
    <div>
      <div className="container-fulid">
        <div className="row">
          <div className="col-lg-12 d-flex">
            <div className="aside">
              <div className="admin-logo">
                <img src={adminLogo} alt="" className="img-fluid" />
              </div>
              <div className="admin-nav ">
                <li>
                  <Link to="/adminDashboard">
                    <BiSolidUserRectangle /> CONTACT INQUIRY
                  </Link>
                </li>
                <li>
                  <Link to="/login">
                    <BiLogOut /> LOGOUT
                  </Link>
                </li>
              </div>
            </div>
            <div className="adminbody">
              <div className="adminbody-header text-end pe-5">
                <i id="profile">
                  <Link to="/profile">
                    <FaUserCircle />
                  </Link>
                </i>
              </div>
              <div className="adminbody-content">
                <div className="admin-hed d-flex justify-content-between">
                  <h2>Inquiries</h2>
                </div>
                <div className="table-responsive" style={{ width: "100%" }}>
                  <MUIDataTable
                    data={contacts}
                    columns={columns}
                    options={options}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
