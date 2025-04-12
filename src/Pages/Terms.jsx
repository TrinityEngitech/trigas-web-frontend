// package
import { Link } from "react-router-dom";
// pages
import Header from "../Component/Navbar";
import Footer from "../Component/Footer";
import "../assets/css/font.css";
import "../assets/css/CompanyPage.css";
// icon
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function Terms() {
  return (
    <div>
      <Header />
      <div className="companyPage">
        {/* heading */}
        <div className="container-fulid" id="heading">
          <div className="row heading-section">
            <div className="col-lg-12 heading-image">
              <h1 className="">Terms & Conditions</h1>
              <p>
                <Link to="/">Home</Link>{" "}
                <i>
                  <MdOutlineKeyboardArrowRight />
                </i>
                <Link> Policies</Link>{" "}
              </p>
            </div>
          </div>
        </div>
        {/* heading */}

        {/* terms */}
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="mt-5 mb-5">
                <p>
                  Welcome to the TRIGAS website! These Terms and Conditions
                  ("Terms", "Conditions", "Terms of Use") govern your use of
                  this website (the "Service") operated by TRIGAS ("us", "we",
                  or "our").
                </p>
                <p>
                  Please read these Terms and Conditions carefully before
                  accessing or using our Service.
                </p>
                <p>
                  By accessing or using the Service, you agree to be bound by
                  these Terms and Conditions. If you disagree with any part of
                  the Terms and Conditions, then you may not access or use the
                  Service.
                </p>
              </div>

              {/* 1 */}
              <div className="mb-5">
                <h4 className="mb-4">
                  <span id="symbol">⦿</span> Acceptance of Terms
                </h4>
                <p>
                  These Terms and Conditions constitute a binding agreement
                  between you and TRIGAS concerning your access and use of the
                  Service.
                </p>
              </div>
              {/* 2 */}
              <div className="mb-5">
                <h4 className="mb-4">
                  <span id="symbol">⦿</span> Changes to Terms and Conditions
                </h4>
                <p>
                  We reserve the right to update or modify these Terms and
                  Conditions at any time without prior notice. It is your
                  responsibility to check these Terms and Conditions
                  periodically for changes. Your continued use of the Service
                  following the posting of any changes to the Terms and
                  Conditions constitutes acceptance of those changes.
                </p>
              </div>
              {/* 3 */}
              <div className="mb-5">
                <h4 className="mb-4">
                  <span id="symbol">⦿</span> Information Accuracy and
                  Availability
                </h4>
                <p>
                  The information on the Service is provided for informational
                  purposes only and is not intended as a substitute for
                  professional advice. We strive to provide accurate and
                  up-to-date information on the Service, but we make no
                  warranties or guarantees, express or implied, regarding the
                  accuracy, completeness, reliability, or timeliness of the
                  information.
                </p>
              </div>
              {/* 4 */}
              <div className="mb-5">
                <h4 className="mb-4">
                  <span id="symbol">⦿</span> Intellectual Property
                </h4>
                <p>
                  The content of the Service, including the design, text,
                  graphics, logos, images, audio, video, and software, is the
                  property of TRIGAS or its licensors and is protected by
                  copyright, trademark, and other intellectual property laws.
                  You may not modify, publish, transmit, reproduce, create
                  derivative works from, distribute, or commercially exploit any
                  content on the Service without our prior written consent.
                </p>
              </div>
              {/* 5 */}
              <div className="mb-5">
                <h4 className="mb-4">
                  <span id="symbol">⦿</span> User Conduct
                </h4>
                <p>
                  You agree to use the Service in a lawful and responsible
                  manner. You agree not to use the Service for any unlawful
                  purpose or in any manner that could damage, disable,
                  overburden, or impair the Service.
                </p>
              </div>
              {/* 6 */}
              <div className="mb-5">
                <h4 className="mb-4">
                  <span id="symbol">⦿</span> Disclaimer of Warranties
                </h4>
                <p>
                  THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT ANY
                  WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. WE DISCLAIM ALL
                  WARRANTIES, INCLUDING BUT NOT LIMITED TO, WARRANTIES OF
                  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
                  NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICE WILL BE
                  UNINTERRUPTED, SECURE, OR ERROR-FREE. WE DO NOT WARRANT THAT
                  THE RESULTS THAT MAY BE OBTAINED FROM THE USE OF THE SERVICE
                  WILL BE ACCURATE OR RELIABLE.
                </p>
              </div>
              {/* 7 */}
              <div className="mb-5">
                <h4 className="mb-4">
                  <span id="symbol">⦿</span> Limitation of Liability
                </h4>
                <p>
                  WE WILL NOT BE LIABLE FOR ANY DAMAGES ARISING OUT OF OR IN
                  CONNECTION WITH YOUR USE OF THE SERVICE, INCLUDING BUT NOT
                  LIMITED TO, DIRECT, INDIRECT, INCIDENTAL, CONSEQUENTIAL,
                  SPECIAL, PUNITIVE, OR EXEMPLARY DAMAGES.
                </p>
              </div>
              {/* 8 */}
              <div className="mb-5">
                <h4 className="mb-4">
                  <span id="symbol">⦿</span> Termination
                </h4>
                <p>
                  We may terminate your access to the Service at any time, for
                  any reason or no reason, without notice.
                </p>
              </div>
              {/* 9 */}
              <div className="mb-5">
                <h4 className="mb-4">
                  <span id="symbol">⦿</span> Governing Law
                </h4>
                <p>
                  These Terms and Conditions shall be governed by and construed
                  in accordance with the laws of India.
                </p>
              </div>
              {/* 10 */}
              <div className="mb-5">
                <h4 className="mb-4">
                  <span id="symbol">⦿</span> Dispute Resolution
                </h4>
                <p>
                  Any dispute arising out of or relating to these Terms and
                  Conditions shall be subject to the exclusive jurisdiction of
                  the courts located in Rajkot, Gujarat, India.
                </p>
              </div>
              {/* 11 */}
              <div className="mb-5">
                <h4 className="mb-4">
                  <span id="symbol">⦿</span> Entire Agreement
                </h4>
                <p>
                  These Terms and Conditions constitute the entire agreement
                  between you and us regarding your use of the Service.
                </p>
              </div>
              {/* 12 */}
              <div className="mb-5">
                <h4 className="mb-4">
                  <span id="symbol">⦿</span> Contact Us
                </h4>
                <p>
                  If you have any questions about these Terms and Conditions,
                  please contact us at: 415, R.K.World Tower, Nr Sheetal Park
                  Chowk, 150 Ft Ring Road, Rajkot, Gujarat 360006. INDIA. Email:
                  info@trigas.in
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* terms */}
      </div>
      <Footer />
    </div>
  );
}

export default Terms;
