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
} from "react-icons/md";

function Career() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCareers();
  }, []);

  const fetchCareers = async () => {
    try {
      const res = await axios.get("http://localhost:2003/api/careers/website");
      setJobs(res.data.data || []);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Header />

      <div className="career-page">
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

                      <a href="#apply" className="career-btn">
                        Apply Now
                      </a>
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

        <section className="career-cta-section" id="apply">
          <div className="container">
            <div className="career-cta-box">
              <h2>Interested in working with us?</h2>
              <p>
                Send your resume to our team and we will contact you when a
                suitable opportunity is available.
              </p>
              <a href="mailto:info@trigas.in" className="career-cta-btn">
                Send Resume
              </a>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default Career;