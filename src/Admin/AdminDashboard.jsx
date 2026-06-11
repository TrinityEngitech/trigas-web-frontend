import React, { useEffect, useState } from "react";
import axios from "axios";
import MUIDataTable from "mui-datatables";
import AdminLayout from "../Admin/AdminLayout";
import { FaEye, FaTrash } from "react-icons/fa";

function AdminDashboard() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await axios.get("http://localhost:2003/adminDashboard");

      const sortedData = (response.data || [])
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .map((item, index) => ({
          ...item,
          srNo: index + 1,
        }));

      setContacts(sortedData);
    } catch (error) {
      console.error("Error fetching contacts:", error);
    }
  };
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this inquiry?"
    );

    if (!confirmDelete) return;

    try {
      await axios.delete(
        `http://localhost:2003/adminDashboard/${id}`
      );

      fetchContacts();

      alert("Inquiry deleted successfully");
    } catch (error) {
      console.error(error);
      alert("Failed to delete inquiry");
    }
  };

  const columns = [
    {
      name: "_id",
      label: "Sr No.",
      options: {
        filter: false,
        sort: false,
        customBodyRender: (value, tableMeta) => {
          return tableMeta.rowIndex + 1;
        },
      },
    },
    {
      name: "name",
      label: "Name",
      options: {
        sort: true,
      },
    },
    {
      name: "email",
      label: "Email",
      options: {
        sort: true,
      },
    },
    {
      name: "number",
      label: "Contact No",
      options: {
        sort: false,
      },
    },
    {
      name: "message",
      label: "Message",
      options: {
        sort: false,
        customBodyRender: (value) => (
          <div className="message-cell">
            {value?.length > 80 ? `${value.substring(0, 80)}...` : value}
          </div>
        ),
      },
    },
    {
      name: "_id",
      label: "Action",
      options: {
        filter: false,
        sort: false,
        customBodyRender: (value) => (
          <div className="d-flex gap-2">
            <button
              className="btn btn-sm "
              onClick={() => handleDelete(value)}
            >
              <FaTrash size={14} />
            </button>
          </div>
        ),
      },
    },
  ];

  const options = {
    selectableRows: "none",
    responsive: "standard",
    rowsPerPage: 10,
    rowsPerPageOptions: [10, 25, 50],
    download: true,
    print: false,
    viewColumns: true,
    filter: true,
    search: true,
    sort: true,
    sortOrder: {
      name: "createdAt",
      direction: "desc",
    },
    textLabels: {
      body: {
        noMatch: "No contact inquiries found",
      },
    },
  };

  return (
    <AdminLayout >
      <div className="admin-hed">
        <h2>Contact Inquiries</h2>
      </div>

      <div className="admin-content-card">
        <MUIDataTable
          // title="Latest Contact Inquiries"
          data={contacts}
          columns={columns}
          options={options}
        />
      </div>
    </AdminLayout>
  );
}

export default AdminDashboard;