// packages
import { Link as ScrollLink } from "react-scroll";
import { useEffect } from "react";
import "../assets/css/Footer.css";
import Whatsapp from "./Whatsapp.jsx"; 

// icons
import { FaFacebookF } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import { RiInstagramFill } from "react-icons/ri";
import { SiGmail } from "react-icons/si";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { TbCopyright } from "react-icons/tb";
// import Whatsapp from "./Whatsapp.jsx";
import { Link } from "react-router-dom";
// logo
import logo_Black from "../assets/logo/Trigas_Black_Logo.png";

function Footer() {
  const position = [22.3023, 70.7718];
  useEffect(() => {
    setTimeout(() => {
      let banner = document.querySelector("div[role='banner']");
      if (banner) {
        banner.style.display = "none";
      }
    }, 3000); // Banner load hone ke baad hide karega
  }, []);
  return (
    <div>
      <div className="container-fulid">
        <div className="row">
        <div style={{ width: "100%", height: "450px", overflow: "hidden", position: "relative" }}>
 <iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d922.7381971520362!2d70.7666834695692!3d22.31762519872966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959cbc438eaeecd%3A0xe26a0863e7b29ea8!2sTRINITY%20ENGI%20TECH!5e0!3m2!1sen!2sin!4v1777456200775!5m2!1sen!2sin" 
    width="100%" 
    height="100%" 
    style={{ border: 0 }} 
    allowFullScreen="" 
    loading="lazy" 
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>


    </div>
          <div className="col-lg-12" id="footer">
            <div className="container-fulid">
              <div
                className="row d-flex justify-content-evenly "
                id="footer-bottom"
              >
                <div className="col-lg-3">
                  <h4>
                    <img src={logo_Black} alt="" width={"150px"} />
                  </h4>
                  <p className="mt-4 mb-4">
                    TRIGAS is a leading EPC company for gas plants Like
                    LNG, PROPANE/LPG since 1999.
                  </p>
                  <div className="col-lg-12">
                    <p className="social">
                      <Link
                        to="https://www.facebook.com/people/TriGas/61563925604297/?mibextid=ZbWKwL"
                        target="_blank"
                      >
                        <FaFacebookF />
                      </Link>
                      &nbsp;
                      <Link to="https://www.linkedin.com/company/trigasindia/?originalSubdomain=in" 
                         target="_blank"
                         >
                        <GrLinkedinOption />
                      </Link>
                      &nbsp;
                      <Link
                        to="https://www.instagram.com/trigas_rajkot"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <RiInstagramFill />
                      </Link>
                      &nbsp;
                      <Link
                        to="https://wa.me/8866210228?text-HEllO from TRIGAS"
                        target="_blank"
                      >
                        <IoLogoWhatsapp />
                      </Link>
                    </p>
                  </div>
                </div>
                <div className="col-lg-3">
                  <h4>Services</h4>
                  <li>
                    <Link
                      to="/service#propane"
                      smooth={true}
                      offset={150}
                      id="Link"
                    >
                      Propane /LPG Storage Installation
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/service#lpg"
                      smooth={true}
                      offset={150}
                      id="Link"
                    >
                      LPG Manifold Installation
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/service#logistic"
                      smooth={true}
                      offset={150}
                      id="Link"
                    >
                      Logistic
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/service#conversion"
                      smooth={true}
                      offset={150}
                      id="Link"
                    >
                      Conversion Assistance
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/service#Cryogenic"
                      smooth={true}
                      offset={150}
                      id="Link"
                    >
                      Cryogenic Storage Installation
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/service#green"
                      smooth={true}
                      offset={150}
                      id="Link"
                    >
                      Green Hydrogen Solutions
                    </Link>
                  </li>
                </div>
                <div className="col-lg-2">
                  <h4>Quick Links</h4>
                  <li>
                    <Link to="/about" target="_top" id="Link">
                      {" "}
                      About Us
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="/contact" target="_top" id="Link">
                      Inquiries
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="/faq" target="_top" id="Link">
                      FAQs
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="/terms" target="_top" id="Link">
                      Terms & Conditions
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="/policy" target="_top" id="Link">
                     Privacy Policies
                    </Link>
                  </li>
                </div>
                <div className="col-lg-3">
                  <h4>Our Location</h4>
                  <p>
                    <FaLocationDot /> &nbsp; 415,R.K. World Tower, 150ft Ring Road, Nr. Sheetal
                    Park Bus Stop, Rajkot, Gujarat 360007. INDIA
                  </p>
                  <p>
                    <SiGmail /> &nbsp; trinityengitech@gmail.com | info@trigas.in
                  </p>
                  <p>
                    <FaPhoneAlt /> &nbsp; +91 8866299399 | +91 8866210228
                  </p>
                </div>
              </div>

              <hr className="mt-4 text-dark" />
              <p className="text-center mt-3 mb-0 pb-0">
                <TbCopyright /> Copyright © 2025 TRINITY ENGITECH - All rights reserved
              </p>
              <Whatsapp />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
