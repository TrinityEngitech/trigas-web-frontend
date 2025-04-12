// package
import { Link } from "react-router-dom";
// pages
import Header from "../Component/Navbar";
import Footer from "../Component/Footer";
import "../assets/css/font.css";
import "../assets/css/CompanyPage.css";
// icon
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function Policy() {
  return (
    <div>
      <Header />
      <div className="companyPage">
        {/* heading */}
        <div className="container-fulid" id="heading">
          <div className="row heading-section">
            <div className="col-lg-12 heading-image">
              <h1 className="">Privacy Policy</h1>
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
                  TRIGAS is committed to protecting your privacy. This Privacy
                  Policy (“Policy”) explains how we collect, use, disclose, and
                  protect your personal information when you visit our website
                  (the “Service”) and the choices you have associated with your
                  personal information.
                </p>
              </div>
            </div>
            {/* 1 */}
            <div className="mb-5">
              <h4 className="mb-4">
                <span id="symbol">⦿</span> Information We Collect
              </h4>
              <p>
                We collect several types of information for various purposes to
                improve our Service to you.
              </p>
              <li>
                Contact Information: When you fill out the contact form on our
                website, we may collect your name, company name, email address,
                phone number (optional), and project description.
              </li>
              <li>
                Usage Data: We may collect information about your activity on
                our Service, such as the pages you visit, the time you spend on
                the pages, and the links you click.
              </li>
              <li>
                Cookies and Tracking Technologies: We may use cookies and other
                tracking technologies to collect and store information about
                your use of the Service. This information may include your IP
                address, browser type, operating system, referral URL, and the
                pages you visit on our Service.
              </li>
            </div>
            {/* 2 */}
            <div className="mb-5">
              <h4 className="mb-4">
                <span id="symbol">⦿</span> Use of Your Information
              </h4>
              <p>
                We use the information we collect for various purposes,
                including:
              </p>
              <li>To provide and maintain the Service</li>
              <li>To respond to your inquiries and fulfill your requests</li>
              <li>
                To send you important information about our services and updates
              </li>
              <li>To improve the content and functionality of the Service</li>
              <li>To personalize your experience on the Service</li>
              <li>To comply with legal and regulatory obligations</li>
            </div>
            {/* 3 */}
            <div className="mb-5">
              <h4 className="mb-4">
                <span id="symbol">⦿</span> Disclosure of Your Information
              </h4>
              <p>
              We may disclose your information to third-party service providers who help us operate and improve the Service. These service providers are obligated to keep your information confidential and use it only for the purposes we have disclosed.
              </p>
              <p>
              We may also disclose your information if we are required to do so by law or in the good faith belief that such disclosure is necessary to:
              </p>
              <li>Comply with a legal obligation</li>
              <li>Protect the rights or safety of TRIGAS, our employees, or others</li>
              <li>
              Prevent or investigate fraud or other wrongdoing
              </li>
            </div>
             {/* 4 */}
             <div className="mb-5">
              <h4 className="mb-4">
                <span id="symbol">⦿</span>  Cookies and Tracking Technologies
              </h4>
              <p>
              We use cookies and other tracking technologies on our Service. Cookies are small data files that are stored on your device when you visit a website. You can configure your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you refuse cookies, you may not be able to use some portions of our Service.
              </p>
            </div>
            {/* 5 */}
            <div className="mb-5">
              <h4 className="mb-4">
                <span id="symbol">⦿</span>  Data Security
              </h4>
              <p>
              We take reasonable steps to protect your information from unauthorized access, disclosure, alteration, or destruction. However, no internet transmission or electronic storage method is 100% secure. Therefore, we cannot guarantee the absolute security of your information.
              </p>
            </div>
             {/* 6 */}
             <div className="mb-5">
              <h4 className="mb-4">
                <span id="symbol">⦿</span>  Children’s Privacy
              </h4>
              <p>
              Our Service is not directed to children under the age of 18. We do not knowingly collect personal information from children under 18. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us. If we become aware that we have collected personal information from a child under 18, we will take steps to remove that information from our servers.
              </p>
            </div>
             {/* 7 */}
             <div className="mb-5">
              <h4 className="mb-4">
                <span id="symbol">⦿</span>  Your Rights
              </h4>
              <p>
              You have certain rights with respect to your personal information. These rights may vary depending on the laws of your jurisdiction. Here are some examples of your rights:
              </p>
              <li>The right to access your personal information</li>
              <li>The right to rectify inaccurate personal information</li>
              <li>The right to request the erasure of your personal information</li>
              <li>The right to object to the processing of your personal information</li>
              <li>The right to withdraw your consent to the processing of your personal information</li>
            </div>
             {/* 8 */}
             <div className="mb-5">
              <h4 className="mb-4">
                <span id="symbol">⦿</span>  Changes to This Privacy Policy
              </h4>
              <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on our Service. You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </div>
             {/* 9 */}
             <div className="mb-5">
              <h4 className="mb-4">
                <span id="symbol">⦿</span>  Contact Us
              </h4>
              <p>
              If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p>
              415, R.K.World Tower, Nr Sheetal Park Chowk, 150 Ft Ring Road, Rajkot, Gujarat 360006. INDIA.
              Email: info@trigas.in
              </p>
            </div>

          </div>
        </div>
        {/* terms */}
      </div>
      <Footer />
    </div>
  );
}

export default Policy;
