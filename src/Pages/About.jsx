// package
import { Link } from "react-router-dom";
// pages
import Header from "../Component/Navbar";
import Footer from "../Component/Footer";
import "../assets/css/font.css";
import "../assets/css/About.css";
// icon
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
// img
import since from "../assets/image/since.jpeg";
import Counter from "../Component/Counter";
import ab_img from "../assets/image/ab-img.jpeg";
import Testimonal from "../Component/Testimonal";

function About() {
  return (
    <div>
      <Header />

      {/* about */}
      <div className="about">
        {/* heading */}
        <div className="container-fulid" id="heading">
          <div className="row heading-section">
            <div className="col-lg-12 heading-image">
              <h1 className="">ABOUT US</h1>
              <p>
                <Link to="/">Home</Link>{" "}
                <i>
                  <MdOutlineKeyboardArrowRight />
                </i>
                <Link>About Us</Link>{" "}
              </p>
            </div>
          </div>
        </div>
        {/* heading */}

        {/* since */}
        <div className="container-fulid">
          <div className="row">
            <div className="col-lg-12" id="since-img">
              <img src={since} alt="" className="img-fulid shadow bg-body-tertiary rounded" />
            </div>
          </div>
        </div>
        {/* since */}

        {/* history */}
        <div className="container mb-5">
          <div className="row">
            <div className="col-lg-12 d-flex flex-wrap flex-sm-wrap flex-md-wrap justify-content-between">
              <div className="col-lg-6 heading mt-5">
                <h6 className="mb-4">
                  <span id="symbol">⦿</span> OUR HISTORY
                </h6>
                <h1>
                  Your Trusted Partner in Safe and Sustainable Gas Solutions
                </h1>
                <p className="mt-4">
                  Founded in 1999, TRIGAS set out to transform India’s clean
                  fuel industry, specializing in end-to-end Engineering,
                  Procurement, and Construction (EPC) solutions for LNG,
                  propane, and LPG plants, as well as fuel transportation,
                  storage, and maintenance. Over the years, TRIGAS has earned a
                  trusted reputation, completing over 500 projects nationwide
                  and over 200 plants in Gujarat alone.
                </p>
                <p>
                  With a focus on sustainability, TRIGAS has pioneered tailored
                  fuel conversion solutions for industrial clients, helping them
                  switch to cleaner alternatives. Recently, the company embraced
                  hydrogen technology, managing the entire value chain to
                  support zero-emission fuel applications.
                </p>
                <p>
                  TRIGAS’s success is driven by a skilled workforce, a
                  commitment to innovation, and a customer-centric approach. As
                  it looks to expand internationally, TRIGAS remains dedicated
                  to advancing the clean fuel sector in India and beyond.
                </p>
              </div>
              <div className="col-lg-5 border mt-5 p-4">
                <div className="heading">
                  <h6 className="mb-4">
                    <span id="symbol">⦿</span> OUR VISION
                  </h6>
                  <p>
                    TRIGAS aims to be a top supplier in the clean fuel industry,
                    providing high-quality energy solutions while supporting
                    sustainable growth and energy transitions for industries in
                    India and beyond.
                  </p>
                  <hr className=" mt-3 mb-3" />
                </div>
                <div className="heading">
                  <h6 className="mb-4">
                    <span id="symbol">⦿</span> OUR MISSION
                  </h6>
                  <p>
                    Offering the highest quality products and value-added
                    services to our customers, we ensure a seamless experience
                    that meets their energy needs.
                  </p>
                  <hr className=" mt-3 mb-3" />
                </div>
                <div className="heading">
                  <h6 className="mb-4">
                    <span id="symbol">⦿</span> OUR VALUE
                  </h6>
                  <p>
                    Providing better solutions and new innovations, supported by
                    a robust dedication and post-sale assistance to guarantee
                    the complete solution for customers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* history */}

        {/* Achievement */}
        <div className="container-fulid mt-5" id="client">
          <div className="container p-5">
            <div className="row">
              <div className="col-lg-12">
                <div className="ab-heading">
                  <h6 className="mb-4">
                    <span id="symbol">⦿</span> Company Statistics
                  </h6>
                  <h1>Achievement in TRIGAS</h1>
                  <hr className=" mt-5 mb-5" />
                </div>
              </div>
              <Counter />
            </div>
          </div>
        </div>
        {/* Achievement */}

        {/* about company */}
        <div className="container">
          <div className="row mb-5" data-aos="fade-up">
            <div className="heading">
              <h6 className="mb-4">
                <span id="symbol">⦿</span> About Trigas
              </h6>
              <h1>Who We Are?</h1>
              <hr className=" mt-5 mb-5" />
            </div>
            <div
              className="col-lg-12 d-flex flex-wrap flex-sm-wrap flex-md-wrap"
              id="about"
            >
              <div className="col-lg-5" id="ab-wrapper">
                <img src={ab_img} alt="" width={"550px"} id="ab-inner" />
              </div>
              <div className="col-lg-6 align-self-center ms-lg-5 mt-sm-3 mt-md-3">
                <p>
                  TRIGAS, established in 1999, is a leading provider of
                  end-to-end solutions in Engineering, Procurement, and
                  Construction (EPC) for hydrocarbon gas plants, specializing in
                  LNG, propane, and LPG. With a commitment to innovation and
                  sustainable development, TRIGAS has commissioned over 500+
                  plants across India, including 200+ in Gujarat, making it a
                  trusted partner in clean fuel solutions. We excel in fuel
                  conversions for industrial clients, enabling efficient
                  transitions to LPG, propane, and LNG, and are ready to support
                  the hydrogen era with comprehensive expertise.
                </p>
                <p>
                  Our focus on quality, innovation, and customer satisfaction
                  sets us apart, backed by a dedicated team of professionals and
                  a strong emphasis on research and development. TRIGAS values
                  long-term partnerships and strives for transparency and
                  excellence. As we expand globally, we aim to lead in
                  sustainable energy production for India and beyond.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* about company */}
        <hr className=" mt-5 mb-5" />

        <Testimonal />
      </div>
      {/* about */}

      <Footer />
    </div>
  );
}

export default About;
