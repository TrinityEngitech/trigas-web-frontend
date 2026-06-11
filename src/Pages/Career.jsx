import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "../Component/Navbar";
import Footer from "../Component/Footer";
import "../assets/css/font.css";
import "../assets/css/Career.css";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import {
  MdWorkOutline,
  MdLocationOn,
  MdGroups,
  MdAccessTime,
  MdClose,
} from "react-icons/md";

const initialApplication = {
  careerId: "",
  fullName: "",
  email: "",
  mobile: "",
  currentLocation: "",
  experience: "",
  resume: null,
  coverLetter: "",
};

function Career() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [applyModal, setApplyModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [application, setApplication] = useState(initialApplication);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    fetchCareers();
  }, []);

  const fetchCareers = async () => {
    try {
      const res = await axios.get("http://localhost:2003/api/careers");
      setJobs(res.data.data || []);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const openApplyModal = (job) => {
    setSelectedJob(job);
    setApplication({
      ...initialApplication,
      careerId: job._id,
    });
    setApplyModal(true);
  };

  const closeApplyModal = () => {
    setApplyModal(false);
    setSelectedJob(null);
    setApplication(initialApplication);
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setApplication({
      ...application,
      [name]: files ? files[0] : value,
    });
  };

  const submitApplication = async (e) => {
    e.preventDefault();

    try {
      setSubmitting(true);

      const data = new FormData();

      data.append("careerId", application.careerId);
      data.append("fullName", application.fullName);
      data.append("email", application.email);
      data.append("mobile", application.mobile);
      data.append("currentLocation", application.currentLocation);
      data.append("experience", application.experience);
      data.append("coverLetter", application.coverLetter);

      if (application.resume) {
        data.append("resume", application.resume);
      }

      const res = await axios.post(
        "http://localhost:2003/api/career-applications",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      alert(res.data.message || "Application submitted successfully");
      closeApplyModal();
    } catch (error) {
      console.log(error);
      alert(error.response?.data?.message || "Something went wrong");
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <div>
      <Header />

      <div className="career">
        <div className="container-fluid" id="heading">
          <div className="row heading-section">
            <div className="col-lg-12 heading-image">
              <h1>Career</h1>
              <p>
                <Link to="/">Home</Link>{" "}
                <i>
                  <MdOutlineKeyboardArrowRight />
                </i>
                <span> Career</span>
              </p>
            </div>
          </div>
        </div>

        <section className="career-jobs-section">
          <div className="container">
            <div className="row mb-5">
              <div className="col-lg-12 text-center">
                <h6>
                  <span id="symbol">⦿</span> Current Openings
                </h6>
                <h2>Explore Career Opportunities</h2>
                <p className="career-section-text">
                  Find the right opportunity and grow your career with TRIGAS.
                </p>
              </div>
            </div>

            <div className="row">
              {loading ? (
                <div className="col-lg-12 text-center">
                  <h4>Loading jobs...</h4>
                </div>
              ) : jobs.length > 0 ? (
                jobs.map((job) => (
                  <div className="col-lg-4 col-md-6 mb-4" key={job._id}>
                    <div className="career-card">
                      <div>
                        <span className="career-badge">
                          {job.employmentType}
                        </span>

                        <h3>{job.jobTitle}</h3>

                        <p className="career-desc">
                          {job.description?.length > 120
                            ? `${job.description.substring(0, 120)}...`
                            : job.description}
                        </p>
                      </div>

                      <div className="career-info">
                        <div className="info-item">
                          <span>
                            <MdWorkOutline /> Department
                          </span>
                          <strong>{job.department}</strong>
                        </div>

                        <div className="info-item">
                          <span>
                            <MdAccessTime /> Experience
                          </span>
                          <strong>{job.experience}</strong>
                        </div>

                        <div className="info-item">
                          <span>
                            <MdLocationOn /> Location
                          </span>
                          <strong>{job.location}</strong>
                        </div>

                        <div className="info-item">
                          <span>
                            <MdGroups /> Vacancies
                          </span>
                          <strong>{job.vacancies}</strong>
                        </div>
                      </div>

                      <button
                        type="button"
                        className="career-btn"
                        onClick={() => openApplyModal(job)}
                      >
                        Apply Now
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-lg-12">
                  <div className="empty-career">
                    <h3>No Open Positions</h3>
                    <p>
                      Currently there are no openings available. Please check
                      back later.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>

      {applyModal && (
        <div className="career-modal-overlay">
          <div className="career-modal">
            <div className="career-modal-header">
              <div>
                <h3>Apply for {selectedJob?.jobTitle}</h3>
                <p>{selectedJob?.department}</p>
              </div>

              <button type="button" onClick={closeApplyModal}>
                <MdClose />
              </button>
            </div>

            <form onSubmit={submitApplication}>
              <div className="row">
                <div className="col-lg-6 mb-3">
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={application.fullName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-lg-6 mb-3">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={application.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-lg-6 mb-3">
                  <input
                    type="text"
                    name="mobile"
                    placeholder="Mobile Number"
                    value={application.mobile}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-lg-6 mb-3">
                  <input
                    type="text"
                    name="currentLocation"
                    placeholder="Current Location"
                    value={application.currentLocation}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-lg-6 mb-3">
                  <input
                    type="text"
                    name="experience"
                    placeholder="Experience e.g. 3 Years"
                    value={application.experience}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-lg-6 mb-3">
                  <input
                    type="file"
                    name="resume"
                    accept=".pdf,.doc,.docx"
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-lg-12 mb-3">
                  <textarea
                    name="coverLetter"
                    placeholder="Cover Letter"
                    rows="4"
                    value={application.coverLetter}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <div className="col-lg-12">
                  <button
                    type="submit"
                    className="career-modal-submit"
                    disabled={submitting}
                  >
                    {submitting ? "Submitting..." : "Submit Application"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
      <section className="career-cta-section">
        <div className="container">
          <div className="career-cta-box">
            <h2>Have Questions About Career Opportunities?</h2>

            <p>
              Our team is here to help. Get in touch with us to learn more about
              current openings, recruitment process, and career growth opportunities
              at TRIGAS.
            </p>

            <Link to="/contact" className="career-cta-btn">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Career;