// package
import { Link } from "react-router-dom";
// pages
import Header from "../Component/Navbar";
import Footer from "../Component/Footer";
import "../assets/css/font.css";
import "../assets/css/CompanyPage.css";
// icon
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function Faq() {
  return (
    <div>
      <Header />
      <div className="companyPage">
        {/* heading */}
        <div className="container-fulid" id="heading">
          <div className="row heading-section">
            <div className="col-lg-12 heading-image">
              <h1 className="">FAQ</h1>
              <p>
                <Link to="/">Home</Link>{" "}
                <i>
                  <MdOutlineKeyboardArrowRight />
                </i>
                <Link> FAQs</Link>{" "}
              </p>
            </div>
          </div>
        </div>
        {/* heading */}

        {/* faq */}
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="mt-5 mb-5">
                <p>
                  At TRIGAS, we understand you may have questions about our gas
                  process solutions and services. This FAQ section is designed
                  to address some of the most common inquiries. If you don't
                  find the answer you're looking for here, please don't hesitate
                  to contact us.
                </p>
              </div>
                {/* 1 */}
                <div className="mb-5">
                <h4 className="mb-4">
                  <span id="symbol">⦿</span> What services does TRIGAS offer?
                </h4>
                <p>
                We offer comprehensive gas process solutions, including engineering & construction (EPC) of natural gas plants, expertise in LNG, Propane & LPG, safe and efficient transportation & storage, and Green Hydrogen solutions.
                </p>
              </div>
              {/* 2 */}
              <div className="mb-5">
                <h4 className="mb-4">
                  <span id="symbol">⦿</span> What types of fuel does TRIGAS handle?
                </h4>
                <p>
                We have extensive experience with Propane, LPG, Butane, LNG, and Green Hydrogen.
                </p>
              </div>
              {/* 3 */}
              <div className="mb-5">
                <h4 className="mb-4">
                  <span id="symbol">⦿</span> Where is TRIGAS located?
                </h4>
                <p>
                Our corporate office is located in Rajkot, Gujarat, India. However, we serve clients across the entire nation.
                </p>
              </div>
              {/* 4 */}
              <div className="mb-5">
                <h4 className="mb-4">
                  <span id="symbol">⦿</span> How can I contact TRIGAS?
                </h4>
                <p>
                There are several ways to connect with us! You can fill out the contact form on our website, call us directly at [Phone Number], send us an email at info@trigas.in, or visit our corporate office in Rajkot.
                </p>
              </div>

            </div>
          </div>
        </div>
        {/* faq */}
      </div>
      <Footer />
    </div>
  );
}

export default Faq;
