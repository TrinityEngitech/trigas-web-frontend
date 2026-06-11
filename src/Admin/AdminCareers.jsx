import React, { useEffect, useState } from "react";
import axios from "axios";
import MUIDataTable from "mui-datatables";
import AdminLayout from "./AdminLayout";
import { FaEye, FaTrash } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";

const initialForm = {
  jobTitle: "",
  department: "",
  location: "",
  employmentType: "Full Time",
  experience: "",
  vacancies: 1,
  description: "",
  requirements: "",
  lastDateToApply: "",
  status: true,
};

function AdminCareers() {
  const [careers, setCareers] = useState([]);
  const [formData, setFormData] = useState(initialForm);
  const [editId, setEditId] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetchCareers();
  }, []);

  const fetchCareers = async () => {
    try {
      const res = await axios.get(
        "http://localhost:2003/api/careers"
      );

      const sortedData = (res.data.data || []).sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );

      setCareers(sortedData);
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...formData,
      requirements: formData.requirements
        ? formData.requirements.split(",").map((item) => item.trim())
        : [],
    };

    try {
      if (editId) {
        await axios.put(`http://localhost:2003/api/careers/${editId}`, payload);
        alert("Job updated successfully");
      } else {
        await axios.post("http://localhost:2003/api/careers", payload);
        alert("Job added successfully");
      }

      setFormData(initialForm);
      setEditId(null);
      setShowForm(false);
      fetchCareers();
    } catch (error) {
      console.log(error);
      alert(error.response?.data?.message || "Something went wrong");
    }
  };

  const handleEdit = (job) => {
    setEditId(job._id);
    setFormData({
      jobTitle: job.jobTitle || "",
      department: job.department || "",
      location: job.location || "",
      employmentType: job.employmentType || "Full Time",
      experience: job.experience || "",
      vacancies: job.vacancies || 1,
      description: job.description || "",
      requirements: job.requirements?.join(", ") || "",
      lastDateToApply: job.lastDateToApply
        ? job.lastDateToApply.substring(0, 10)
        : "",
      status: job.status,
    });
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this job?")) return;

    try {
      await axios.delete(`http://localhost:2003/api/careers/${id}`);
      alert("Job deleted successfully");
      fetchCareers();
    } catch (error) {
      console.log(error);
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

    { name: "jobTitle", label: "Job Title" },
    { name: "department", label: "Department" },
    { name: "location", label: "Location" },
    { name: "employmentType", label: "Type" },
    { name: "experience", label: "Experience" },
    { name: "vacancies", label: "Vacancies" },

    {
      name: "status",
      label: "Status",
      options: {
        customBodyRender: (value) => (
          <span
            className={`badge ${value ? "bg-success" : "bg-danger"
              }`}
          >
            {value ? "Active" : "Inactive"}
          </span>
        ),
      },
    },

    {
      name: "_id",
      label: "Action",
      options: {
        customBodyRender: (value, tableMeta) => {
          const job = careers[tableMeta.rowIndex];

          return (
            <div className="d-flex gap-2">
              <button
                className="btn btn-sm"
                onClick={() => handleEdit(job)}
              >
                <FaEdit size={18} />
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
      <div className="admin-hed d-flex justify-content-between align-items-center">
        <h2>Career Jobs</h2>

        <button
          className="btn btn-dark"
          onClick={() => {
            setShowForm(!showForm);
            setEditId(null);
            setFormData(initialForm);
          }}
        >
          {showForm ? "Close" : "Add Job"}
        </button>
      </div>

      {showForm && (
        <div className="admin-form-box mb-4">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-lg-4 mb-3">
                <input
                  type="text"
                  name="jobTitle"
                  className="form-control"
                  placeholder="Job Title"
                  value={formData.jobTitle}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-lg-4 mb-3">
                <input
                  type="text"
                  name="department"
                  className="form-control"
                  placeholder="Department"
                  value={formData.department}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-lg-4 mb-3">
                <input
                  type="text"
                  name="location"
                  className="form-control"
                  placeholder="Location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-lg-4 mb-3">
                <select
                  name="employmentType"
                  className="form-control"
                  value={formData.employmentType}
                  onChange={handleChange}
                >
                  <option>Full Time</option>
                  <option>Part Time</option>
                  <option>Contract</option>
                  <option>Internship</option>
                  <option>Remote</option>
                </select>
              </div>

              <div className="col-lg-4 mb-3">
                <input
                  type="text"
                  name="experience"
                  className="form-control"
                  placeholder="Experience"
                  value={formData.experience}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-lg-4 mb-3">
                <input
                  type="number"
                  name="vacancies"
                  className="form-control"
                  placeholder="Vacancies"
                  value={formData.vacancies}
                  onChange={handleChange}
                />
              </div>

              <div className="col-lg-6 mb-3">
                <input
                  type="date"
                  name="lastDateToApply"
                  className="form-control"
                  value={formData.lastDateToApply}
                  onChange={handleChange}
                />
              </div>

              <div className="col-lg-6 mb-3">
                <label className="d-flex align-items-center gap-2">
                  <input
                    type="checkbox"
                    name="status"
                    checked={formData.status}
                    onChange={handleChange}
                  />
                  Active Job
                </label>
              </div>

              <div className="col-lg-12 mb-3">
                <textarea
                  name="description"
                  className="form-control"
                  rows="4"
                  placeholder="Job Description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <div className="col-lg-12 mb-3">
                <textarea
                  name="requirements"
                  className="form-control"
                  rows="3"
                  placeholder="Requirements comma separated"
                  value={formData.requirements}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="col-lg-12">
                <button className="btn btn-success" type="submit">
                  {editId ? "Update Job" : "Save Job"}
                </button>
              </div>
            </div>
          </form>
        </div>
      )}

      <MUIDataTable
        data={careers}
        columns={columns}
        options={{
          selectableRows: "none",
          responsive: "standard",
        }}
      />
    </AdminLayout>
  );
}

export default AdminCareers;