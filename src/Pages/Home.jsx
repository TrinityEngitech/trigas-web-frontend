// package
import { Link } from "react-router-dom";
// pages
import Navbar from "../Component/Navbar";
import Home_HeroSection from "../Component/Home_HeroSection";
import Footer from "../Component/Footer";
import Testimonal from "../Component/Testimonal";
import "../assets/css/Home.css";
import "../assets/css/font.css";
// img
import ab_home from "../assets/image/AboutHome.png";
import ab1 from "../assets/image/ab1.png";
import ab2 from "../assets/image/ab2.png";
import ab3 from "../assets/image/ab3.png";
import ab4 from "../assets/image/ab4.png";
import service_bg from "../assets/image/service-bg.png";
import s1 from "../assets/image/s1.jpeg";
import s2 from "../assets/image/s2.jpg";
import s3 from "../assets/image/s3.jpeg";
import s4 from "../assets/image/s4.jpeg";
import s5 from "../assets/image/s5.jpeg";
import s6 from "../assets/image/s6.jpeg";
import s7 from "../assets/image/s7.jpg";

import b1 from "../assets/image/b1.webp";
import b2 from "../assets/image/b2.webp";
import b3 from "../assets/image/b3.webp";
import b4 from "../assets/image/b4.webp";
import b5 from "../assets/image/b5.webp";
import b6 from "../assets/image/b6.webp";
import b7 from "../assets/image/b7.webp";

import faq from "../assets/image/faq.jpeg";

// icon
import { MdOutlineArrowOutward } from "react-icons/md";

// slider
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { FreeMode, Autoplay } from "swiper/modules";

function Home() {
  return (
    <div>
      <Navbar />
      <Home_HeroSection />

      {/* about  */}
      <div className="container mt-5" id="about">
        <div className="row">
          <div className="col-lg-12 d-flex flex-wrap flex-sm-wrap flex-md-wrap justify-content-between">
            <div className="col-lg-6">
              <img src={ab_home} alt="" class="img-fluid" id="ab-home-img" />
            </div>
            <div className="col-lg-6">
              <div className="heading">
                <h6 className="mb-4">
                  <span id="symbol">⦿</span> About Trigas
                </h6>
                <h1>Your Partner in Gas Process Solution Management</h1>
                <hr className=" mt-5 mb-5" />
              </div>
              <p className="fw-semibold">
                Welcome to TRIGAS, a leading industry innovator with a rich
                history of excellence.
              </p>
              <p>
                Established in 1999, TRIGAS is a leading Indian company
                dedicated to providing comprehensive solutions for natural gas
                plants. We specialize in the Engineering, Procurement, and
                Construction (EPC) of LNG, Propane, and LPG facilities,
                encompassing transportation, storage, and ongoing maintenance.
              </p>
              <Link to="/about" target="_top" class="btn-get-in-touch1 mt-4">
                <span>More About</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-lg-12 d-flex flex-wrap flex-sm-wrap flex-md-wrap justify-content-evenly">
            {/* 1 */}
            <div class="card text-center" id="ab-card">
              <img src={ab1} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title mb-3 mt-2">Proven Track Record</h5>
                <p class="card-text">
                  With over 400 successful plant commissions across India,
                  TRIGAS is known for its reliability, efficiency, and technical
                  excellence, making us a trusted name in the gas industry.
                </p>
              </div>
            </div>
            {/* 2 */}
            <div class="card text-center" id="ab-card">
              <img src={ab2} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title mb-3 mt-2">Client-Centric Approach</h5>
                <p class="card-text">
                  At TRIGAS, we focus on building long-term partnerships by
                  delivering exceptional service and tailoring each project to
                  our clients' unique needs through transparent communication.
                </p>
              </div>
            </div>
            {/* 3 */}
            <div class="card text-center" id="ab-card">
              <img src={ab3} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title mb-3 mt-2">Innovation and Safety</h5>
                <p class="card-text">
                  Innovation is central to TRIGAS as we adopt cutting-edge
                  technologies to enhance efficiency, safety, and sustainability
                  while upholding the highest safety standards for our people
                  and clients.
                </p>
              </div>
            </div>
            {/* 4 */}
            <div class="card text-center" id="ab-card">
              <img src={ab4} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title mb-3 mt-2">Expert Team</h5>
                <p class="card-text">
                  Our skilled engineers and project managers ensure TRIGAS’s
                  success with precise results, supported by ongoing training
                  and development, fostering innovation and excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* about  */}

      {/* services  */}
      <div className="container-fulid" id="services">
        <div className="container p-5">
          <div className="row">
            <div className="col-lg-12 d-flex flex-wrap flex-sm-wrap flex-md-wrap justify-content-between ">
              <div className="col-lg-6 heading">
                <h6 className="mb-4">
                  <span id="symbol">⦿</span> OUR SERVICES
                </h6>
                <h1>
                  Your Trusted Partner in Safe and Sustainable Gas Solutions
                </h1>
                <Link to="/service" target="_top" class="btn-get-in-touch mt-3">
                  <span>
                    View All Services
                    <i class="arrow">
                      <MdOutlineArrowOutward />
                    </i>
                  </span>
                </Link>
                <hr className=" mt-5 mb-5" />
              </div>
              <div className="col-lg-6">
                <img
                  src={service_bg}
                  alt=""
                  className="img-fulid service-bg-home"
                  // width={"530px"}
                />
              </div>
            </div>
            <div className="col-lg-12">
              <Swiper
                slidesPerView={3}
                spaceBetween={10}
                freeMode={true}
                // pagination={{
                //   clickable: true,
                // }}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  480: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                  },
                }}
                // modules={[Pagination]}
                modules={[FreeMode]}
                className="mySwiper"
              >
                {/* 1 */}
                <SwiperSlide>
                  <div className="slide-content">
                    <div className="image-container">
                      <img src={s1} alt="" id="img-inner" />
                    </div>
                    <div className="slide-text">
                      <p style={{ color: "#fff", fontWeight: "bolder" }}>
                        Above Ground Propane /LPG Storage Installation
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                {/* 7 */}
                <SwiperSlide>
                  <div className="slide-content">
                    <div className="image-container">
                      <img src={s7} alt="" id="img-inner" />
                    </div>
                    <div className="slide-text">
                      <p style={{ color: "#fff", fontWeight: "bolder" }}>
                        Mounded Propane/LPG Storage Installation
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                {/* 6 */}
                <SwiperSlide>
                  <div className="slide-content">
                    <div className="image-container">
                      <img src={s6} alt="" id="img-inner" />
                    </div>
                    <div className="slide-text">
                      <p style={{ color: "#fff", fontWeight: "bolder" }}>
                        LPG Manifold Installation
                      </p>
                    </div>
                  </div>
                </SwiperSlide>

                {/* 3 */}
                <SwiperSlide>
                  <div className="slide-content">
                    <div className="image-container">
                      <img src={s3} alt="" id="img-inner" />
                    </div>
                    <div className="slide-text">
                      <p style={{ color: "#fff", fontWeight: "bolder" }}>
                        Conversion Assistance
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                {/* 4 */}
                <SwiperSlide>
                  <div className="slide-content">
                    <div className="image-container">
                      <img src={s4} alt="" id="img-inner" />
                    </div>
                    <div className="slide-text">
                      <p style={{ color: "#fff", fontWeight: "bolder" }}>
                        Cryogenic Storage Installation
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                {/* 5 */}
                <SwiperSlide>
                  <div className="slide-content">
                    <div className="image-container">
                      <img src={s5} alt="" id="img-inner" />
                    </div>
                    <div className="slide-text">
                      <p style={{ color: "#fff", fontWeight: "bolder" }}>
                        Green Hydrogen Solution
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                {/* 2 */}
                <SwiperSlide>
                  <div className="slide-content">
                    <div className="image-container">
                      <img src={s2} alt="" id="img-inner" />
                    </div>
                    <div className="slide-text">
                      <p style={{ color: "#fff", fontWeight: "bolder" }}>
                        450/420 LPG Cylinder
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      {/* services  */}

      {/* client */}
      <div className="container-fulid" id="client">
        <div className="container p-5">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="mb-5">
                Join industry leaders and become a partner with TRIGAS, where we
                drive energy forward with reliable and innovative gas solutions.
              </h1>
              <div className="row">
  {[b2, b1, b3, b4, b5, b6, b7].map((img, i) => (
    <div className="col-lg-3 col-md-4 col-sm-6 col-6 d-flex justify-content-center mb-3" key={i}>
      <div className="client-img">
        <img src={img} alt={`client-${i}`} className="img-fluid" />
      </div>
    </div>
  ))}
</div>

            </div>
          </div>
        </div>
        <div class="background-section">
          <div class="text-over-image">
            <h1 className="w-75 m-auto">
              We're proud to be a useful and valuable partner to our customers
              and communities.
            </h1>
          </div>
        </div>
      </div>
      {/* client */}

      {/* FAQ */}
      <div className="container" id="faq">
        <div className="row">
          <div className="col-lg-12 d-flex flex-wrap flex-sm-wrap flex-md-wrap justify-content-between ">
            <div className="col-lg-6 ">
              <img src={faq} alt="" id="faq-img" />
            </div>
            <div className="col-lg-6 ">
              <div className="heading ms-4">
                <h6 className="mb-4">
                  <span id="symbol">⦿</span> Asked Questions
                </h6>
                <h1 className="mb-5">Building for the best</h1>
              </div>
              <div
                class="accordion accordion-flush ms-4"
                id="accordionFlushExample"
              >
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      What services does TRIGAS offer?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    class="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      We offer comprehensive gas process solutions, including
                      engineering & construction (EPC) of natural gas plants,
                      expertise in LNG, Propane & LPG, safe and efficient
                      transportation & storage, and Green Hydrogen solutions.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseTwo"
                      aria-expanded="false"
                      aria-controls="flush-collapseTwo"
                    >
                      What types of fuel does TRIGAS handle?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseTwo"
                    class="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      TRIGAS specializes in Propane, LPG and LNG along with
                      Green Hydrogen solutions. We offer end-to-end services
                      including EPC of gas plants, transportation, and storage.
                      Our focus is on safe, reliable, and sustainable energy
                      delivery across industries.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseThree"
                      aria-expanded="false"
                      aria-controls="flush-collapseThree"
                    >
                      Where is TRIGAS located?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseThree"
                    class="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      Our corporate office is located in Rajkot, Gujarat, India.
                      However, we serve clients across the entire nation.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseFour"
                      aria-expanded="false"
                      aria-controls="flush-collapseThree"
                    >
                      How can I contact TRIGAS?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseFour"
                    class="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      There are several ways to connect with us! You can fill
                      out the contact form on our website, call us directly at
                      +91 8866210228, send us an email at info@trigas.in, or
                      visit our corporate office in Rajkot.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* FAQ */}

      <Testimonal />

      <Footer />
    </div>
  );
}

export default Home;
