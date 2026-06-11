import React, { useEffect, useState } from "react";
import axios from "axios";
import MUIDataTable from "mui-datatables";
import AdminLayout from "./AdminLayout";
import { FaEye, FaTrash } from "react-icons/fa";
import { Modal } from "react-bootstrap";

function CareerApplications() {
  const [applications, setApplications] = useState([]);
  const [viewData, setViewData] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const res = await axios.get(
        "http://localhost:2003/api/career-applications"
      );
      console.log(res.data.data);
      const sortedData = (res.data.data || []).sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );

      setApplications(sortedData);
    } catch (error) {
      console.log(error);
    }
  };
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this application?")) return;

    try {
      await axios.delete(
        `http://localhost:2003/api/career-applications/${id}`
      );

      fetchApplications();
    } catch (error) {
      console.log(error);
    }
  };

  const columns = [
    {
      name: "_id",
      label: "Sr No.",
      options: {
        customBodyRender: (value, tableMeta) =>
          tableMeta.rowIndex + 1,
      },
    },

    {
      name: "careerId",
      label: "Job Position",
      options: {
        customBodyRender: (value) =>
          value?.jobTitle || "-",
      },
    },

    {
      name: "fullName",
      label: "Candidate Name",
    },

    {
      name: "mobile",
      label: "Mobile",
    },

    {
      name: "createdAt",
      label: "Applied Date",
      options: {
        customBodyRender: (value) =>
          new Date(value).toLocaleDateString("en-IN"),
      },
    },

    {
      name: "_id",
      label: "Action",
      options: {
        sort: false,
        filter: false,
        customBodyRender: (value, tableMeta) => {
          const row =
            applications[tableMeta.rowIndex];

          return (
            <div className="d-flex ">
              <button
                className="btn btn-sm"
                onClick={() => {
                  setViewData(row);
                  setShowModal(true);
                }}
              >
                <FaEye size={19} />
              </button>

              <button
                className="btn btn-sm"
                onClick={() =>
                  handleDelete(value)
                }
              >
                <FaTrash size={18} />
              </button>
            </div>
          );
        },
      },
    },
  ];
  return (
    <AdminLayout >
      <div className="admin-hed">
        <h2>Career Applications</h2>
      </div>

      <MUIDataTable
        data={applications}
        columns={columns}
        options={{
          selectableRows: "none",
          responsive: "standard",
        }}
      />
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        size="lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>
            Application Details
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {viewData && (
            <div className="row">

              <div className="col-md-6 mb-3">
                <strong>Name:</strong>
                <br />
                {viewData.fullName}
              </div>

              <div className="col-md-6 mb-3">
                <strong>Email:</strong>
                <br />
                {viewData.email}
              </div>

              <div className="col-md-6 mb-3">
                <strong>Mobile:</strong>
                <br />
                {viewData.mobile}
              </div>

              <div className="col-md-6 mb-3">
                <strong>Location:</strong>
                <br />
                {viewData.currentLocation}
              </div>

              <div className="col-md-6 mb-3">
                <strong>Experience:</strong>
                <br />
                {viewData.experience}
              </div>

              <div className="col-md-6 mb-3">
                <strong>Applied For:</strong>
                <br />
                {viewData.careerId?.jobTitle}
              </div>

              <div className="col-md-12 mb-3">
                <strong>Cover Letter:</strong>
                <br />
                {viewData.coverLetter || "-"}
              </div>

              {viewData.resume?.filePath && (
                <div className="col-md-12">
                  <a
                    href={`http://localhost:2003/${viewData.resume.filePath.replace(
                      /\\/g,
                      "/"
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary"
                  >
                    View Resume
                  </a>
                </div>
              )}
            </div>
          )}
        </Modal.Body>
      </Modal>
    </AdminLayout>
  );
}

export default CareerApplications;