import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// pages
import Header from "../Component/Navbar";
import Footer from "../Component/Footer";
import Testimonal from "../Component/Testimonal";
import "../assets/css/font.css";
import "../assets/css/Service.css";
// icon
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
// img
import s1 from "../assets/image/s1.jpeg";
import s2 from "../assets/image/service2.png";
import service3 from "../assets/image/service3.jpg";
import s3 from "../assets/image/s3.jpeg";
import s4 from "../assets/image/s4.jpeg";
import s5 from "../assets/image/s5.jpeg";
import s6 from "../assets/image/s6.webp";

import e1 from "../assets/image/e1.png";
import e2 from "../assets/image/e2.png";
import e3 from "../assets/image/e3.png";
import e4 from "../assets/image/e4.png";
import e5 from "../assets/image/e5.png";

function Service() {
  useEffect(() => {
    // Function to scroll to the element with the given ID
    const scrollToElement = (id) => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };

    // Get the hash from the URL
    const hash = window.location.hash.substring(1); // Remove the '#' from the hash

    // Scroll to the element if the hash is valid
    if (hash) {
      scrollToElement(hash);
    }
  }, []);

  return (
    <div>
      <Header />
      {/* service */}
      <div className="service">
        {/* heading */}
        <div className="container-fulid" id="heading">
          <div className="row heading-section">
            <div className="col-lg-12 heading-image">
              <h1 className="">Our Services</h1>
              <p>
                <Link to="/">Home</Link>{" "}
                <i>
                  <MdOutlineKeyboardArrowRight />
                </i>
                <Link>Services</Link>{" "}
              </p>
            </div>
          </div>
        </div>
        {/* heading */}

        {/* provide services */}
        <div className="container mt-5">
          {/* service1 */}
          <div className="row mb-3">
            <div className="col-lg-12" id="propane">
              <h1 className="service-heading">
                1. Propane /LPG Storage Installation
              </h1>
              <div className="d-flex flex-column flex-lg-row">
                <img
                  src={s1}
                  alt="Propane/LPG Storage Installation"
                  className="service-img img-fluid rounded-end mb-3 mb-lg-0"
                />
                <div className="flex-grow-1 ms-lg-4">
                  <p class="text-capitalize">
                    We have a team of highly skilled engineers and technicians
                    who can design and build state-of-the-art natural gas plants
                    that comply with international standards and local
                    regulations.
                  </p>
                  <ul className="list-unstyled text-capitalize">
                    <li>
                      ❒ Propane and LPG Bulk storage installation.
                      (Mounded/Open)
                    </li>
                    <li>❒ Design and Peso Approval.</li>
                    <li>❒ Auto – LPG Installations</li>
                    <li>
                      ❒ Installation audit, Safety Training and AMC for the All
                      Kind of Bulk and Manifold installation.
                    </li>
                    <li>
                      ❒ LOT, VOT, Jumbo, Sumo, Maxima and Hippo Cylinder
                      Manifold Installation.
                    </li>
                    <li>❒ Gas Pipeline solutions (LPG/PROPANE/NG/LNG)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* service1 */}
          {/* service2 */}
          <div className="row mb-3">
            <div className="col-lg-12" id="lpg">
              <h1 className="service-heading">
                2. LPG Manifold Installation: <br /> [VOT,LOT,425 kg, 450 kg,
                Cylinder Manifold Installation]
              </h1>
              <div className="d-flex flex-column flex-lg-row">
                <img
                  src={s2}
                  alt="LPG Manifold Installation"
                  className="service-img img-fluid rounded-end mb-3 mb-lg-0"
                />
                <div className="flex-grow-1 ms-lg-4">
                  <p class="text-capitalize">
                    The Ideal and Bespoke Installations of Cylinder Manifolds.
                    We provide a variety of models to meet various industrial
                    needs, including factory-made solutions such as VOT (Vapour
                    off-Take ) , LOT ( Liquid Off Take ), 425 & 450 kg Manifold
                    Installation , on-site system installation, and other
                    associated services.
                  </p>
                  <p class="text-capitalize">
                    Non-return valves, a PRV (Pressure Relief Valves) station,
                    gas filters, a Slam Shut Off valve, a pressure gauge,
                    connecting hoses, a Pop-Up Action valve, isolation valves,
                    all safety fittings and our most cutting-edge and effective
                    LPG Vaporiser are all part of our LOT systems. our LOT
                    systems are small, safe, and incredibly economical.
                  </p>
                  <ul className="list-unstyled text-capitalize">
                    <li>❒ Range Starting from 30 Kg /Hr to 1000 Kg/Hr.</li>
                    <li>❒ TOP- Rated Safety component.</li>
                    <li>
                      ❒ Stand by system provided for uninterrupted operation.
                    </li>
                    <li>❒ Very convenient to handle.</li>
                    <li>
                      ❒ Our specialty is site selection and layout preparation,
                      which complies with the legal requirements.{" "}
                    </li>
                    <li>
                      ❒ 24-Hour Emergency Services: TRIGAS has a 24-hour
                      emergency phone number that is available seven days a week
                      to handle any emergencies or LPG leaks.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* service2 */}
          {/* service3 */}
          <div className="row mb-3">
            <div className="col-lg-12" id="logistic">
              <h1 className="service-heading">3. Logistic</h1>
              <div className="d-flex flex-column flex-lg-row">
                <img
                  src={s6}
                  alt="Logistic"
                  className="service-img img-fluid rounded-end mb-3 mb-lg-0"
                />
                <div className="flex-grow-1 ms-lg-4">
                  <p class="text-capitalize">
                    We are a leading transporter of LPG, Propane, and LNG,
                    ensuring safe and efficient delivery through our GPS-tracked
                    fleet and 24/7 support staff.
                  </p>

                  <ul className="list-unstyled text-capitalize">
                    <li>❒ Leading Transporter for supply LPG/PROPANE/LNG.</li>
                    <li>
                      ❒ Providing efficient Supply through vehicle tracking
                      system (GPS) and Online 24x7 Support Staff.
                    </li>
                    <li>
                      ❒ Following High Safety Standred with Zero Road Accident
                      Policy.
                    </li>
                    <li>
                      ❒ More than 300 Fleet Strength for LPG /Propane/LNG to
                      Supply on Time.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* service3 */}
          {/* service4 */}
          <div className="row mb-3">
            <div className="col-lg-12" id="conversion">
              <h1 className="service-heading">4. Conversion Assistance</h1>
              <div className="d-flex flex-column flex-lg-row">
                <img
                  src={s3}
                  alt="Conversion Assistance"
                  className="service-img img-fluid rounded-end mb-3 mb-lg-0"
                />
                <div className="flex-grow-1 ms-lg-4">
                  <p class="text-capitalize">
                    For industrial and commercial clients wishing to switch from
                    solid or liquid fuels to LPG or Propane for heating
                    applications, TRIGAS specializes in fuel conversion
                    solutions. Understanding fuel requirements, help for the
                    choosing best burner Vendor, arranging storage optimally,
                    building the piping system, safety compliance are some of
                    our solutions. Our Experts Ensure a Smooth, Safe transition
                    for uninterrupted Gas Usage.
                  </p>

                  <ul className="list-unstyled text-capitalize">
                    <li>
                      ❒ Customized Solution: One -Stop Conversion System
                      Solution.
                    </li>
                    <li>
                      ❒ solutions for heating applications that are specially
                      designed to satisfy the demands of commercial and
                      industrial customers.
                    </li>
                    <li>
                      ❒ thorough examination of current heating applications to
                      identify the most effective fuel conversion strategy.
                    </li>
                    <li>
                      ❒ Services for design, installation, and upkeep to
                      guarantee a smooth switch to LPG or Propane. adherence to
                      all environmental and regulatory requirements and safe
                      fuel conversion.
                    </li>
                    <li>
                      ❒ timely product and service delivery to reduce downtime
                      and guarantee heating applications operate at their best.
                    </li>
                    <li>
                      ❒ Customer service is available around-the-clock to handle
                      any problems or queries regarding fuel conversion
                      solutions.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* service4 */}
          {/* service5 */}
          <div className="row mb-3">
            <div className="col-lg-12" id="Cryogenic">
              <h1 className="service-heading">
                {" "}
                5. Cryogenic Storage Installation <br /> (LIN, LOX, LAR Etc.)
              </h1>
              <div className="d-flex flex-column flex-lg-row">
                <img
                  src={s4}
                  alt="Conversion Assistance"
                  className="service-img img-fluid rounded-end mb-3 mb-lg-0"
                />
                <div className="flex-grow-1 ms-lg-4">
                  <p class="text-capitalize text-capitalize">
                    We specialize in the installation of cryogenic storage
                    systems for gases like LIN (Liquid Nitrogen), LOX (Liquid
                    Oxygen), and LAR (Liquid Argon), ensuring safe and efficient
                    storage for industrial applications.
                  </p>

                  <ul className="list-unstyled">
                    <li>❒ LNG Storage and regasification facility.</li>
                    <li>
                      ❒ Cryogenic storage installation (LIN, LOX, LAR Etc.)
                    </li>
                    <li>❒ Auto LNG & LCNG dispensing stations.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* service5 */}
          {/* service6 */}
          <div className="row mb-3">
            <div className="col-lg-12" id="green">
              <h1 className="service-heading"> 6. Green Hydrogen</h1>
              <div className="d-flex flex-column flex-lg-row">
                <img
                  src={s5}
                  alt="Green Hydrogen"
                  className="service-img img-fluid rounded-end mb-3 mb-lg-0"
                />
                <div className="flex-grow-1 ms-lg-4">
                  <p class="text-capitalize">
                    We provide innovative green hydrogen solutions, harnessing
                    renewable energy sources for sustainable production. Our
                    services support the transition to clean energy, helping
                    industries reduce carbon footprints and meet environmental
                    goals.
                  </p>

                  <ul className="list-unstyled text-capitalize">
                    <li>
                      ❒ Optimization of Storage Capacity with the Correct
                      Analysis of Layout and Plot Plan.
                    </li>
                    <li>
                      ❒ Depth knowledge about technical safety and risk
                      Management.
                    </li>
                    <li>
                      ❒ End to End Expertise for cater all type of Application.
                    </li>
                    <li>
                      ❒ Having Both equipment and technology to sustainably and
                      safely transport both gaseous and Liquid hydrogen upto the
                      uses point.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* service6 */}
        </div>
        {/* provide services */}

        {/* our expertices */}
        <div className="container-fulid mt-5" id="client">
          <div className="container p-5">
            <div className="row">
              <div className="col-lg-12">
                <div className="ab-heading">
                  <h6 className="mb-4">
                    <span id="symbol">⦿</span> Our Expertise
                  </h6>
                  <h1>Experts in Gas Solutions</h1>
                  <hr className=" mt-5 mb-5" />
                </div>
              </div>
            </div>
            <div className="row">
              <div
                className="col-lg-12 d-flex justify-content-between flex-wrap flex-sm-wrap flex-md-wrap"
                id="expertise"
              >
                <div className="col-lg-2 border rounded p-3 text-center fs-4  border-light ">
                  <img src={e1} alt="" className="mb-3" width={"50px"} />
                  <h4> Propane/LPG Storage Installation</h4>
                </div>
                <div className="col-lg-2 border rounded p-3 text-center fs-4  border-light ">
                  <img src={e2} alt="" className="mb-3" width={"50px"} />
                  <h4> Transport & Logistics</h4>
                </div>
                <div className="col-lg-2 border rounded p-3 text-center fs-4  border-light ">
                  <img src={e3} alt="" className="mb-3" width={"50px"} />
                  <h4>Maintenance & Safety Compliance</h4>
                </div>
                <div className="col-lg-2 border rounded p-3 text-center fs-4  border-light ">
                  <img src={e4} alt="" className="mb-3" width={"50px"} />
                  <h4>Green Hydrogen Solutions</h4>
                </div>
                <div className="col-lg-2 border rounded p-3 text-center fs-4  border-light ">
                  <img src={e5} alt="" className="mb-3" width={"50px"} />
                  <h4>LNG Solutions</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* our expertices */}

        <Testimonal />
      </div>
      {/* service */}

      <Footer />
    </div>
  );
}

export default Service;