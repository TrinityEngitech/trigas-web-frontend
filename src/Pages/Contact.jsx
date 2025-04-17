import { useState } from "react";
import axios from "axios";
// package
import { Link } from "react-router-dom";
// pages
import Header from "../Component/Navbar";
import Footer from "../Component/Footer";
import "../assets/css/font.css";
import "../assets/css/Contact.css";
// icon
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";
// img
import since from "../assets/image/since.jpeg";
// toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initial = {
  name: "",
  email: "",
  number: "",
  message: "",
};

function Contact() {
  const [formData, setFormData] = useState(initial);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Validation function
  const validate = () => {
    let tempErrors = {};
    let isValid = true;

    // Name Validation: Should not contain numbers
    if (!formData.name.trim()) {
      tempErrors.name = "Name is required.";
      isValid = false;
    } else if (/\d/.test(formData.name)) {
      tempErrors.name = "Name should not contain numbers.";
      isValid = false;
    }

    // Email Validation: Must include @gmail.com
    if (!formData.email) {
      tempErrors.email = "Email is required.";
      isValid = false;
    } else if (!/\S+@gmail\.com$/.test(formData.email)) {
      tempErrors.email = "Email must be a valid @gmail.com address.";
      isValid = false;
    }

    // Number Validation: Should be exactly 10 digits and contain no letters
    if (!formData.number.trim()) {
      tempErrors.number = "Mobile number is required.";
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.number)) {
      tempErrors.number = "Mobile number must be exactly 10 digits.";
      isValid = false;
    }

    // Message Validation: Required field
    if (!formData.message.trim()) {
      tempErrors.message = "Message is required.";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlesubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      setIsSubmitting(true);
      axios
        .post("https://webapis.trigas.co.in/contact", formData)
        .then((response) => {
          console.log("Response:", response.data);
          setFormData(initial);
          toast.success("Thanks! We’ll respond soon.", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        })
        .catch((error) => {
          console.error("Error:", error);
        })
        .finally(() => {
          setIsSubmitting(false); // Stop loader
        });
    } else {
      toast.error("Please correct the errors before submitting.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <div>
      <Header />
      {/* Contact */}
      <div className="contact">
        {/* heading */}
        <div className="container-fulid" id="heading">
          <div className="row heading-section">
            <div className="col-lg-12 heading-image">
              <h1 className="">Contact</h1>
              <p>
                <Link to="/">Home</Link>{" "}
                <i>
                  <MdOutlineKeyboardArrowRight />
                </i>
                <Link>Contact</Link>{" "}
              </p>
            </div>
          </div>
        </div>
        {/* heading */}
        <div className="container">
          <ToastContainer
            position="top-center"
            autoClose={1500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          <div className="row mt-5 mb-5">
            <div className="col-lg-12 d-flex flex-wrap flex-sm-wrap flex-md-wrap justify-content-between">
              <div className="col-lg-6  heading">
                <h6 className="mb-4">
                  <span id="symbol">⦿</span> Get in Touch
                </h6>
                <h1>
                  Get in touch with us to discuss your needs or ask any
                  questions
                </h1>
                <hr className=" mt-5 mb-5 w-75" />

                <div
                  className="col-lg-12  d-flex flex-wrap flex-sm-wrap flex-md-wrap justify-content-between"
                  id="contact1"
                >
                  <div className="row ">
                    <div className="col-lg-7">
                      <h5>Office</h5>
                      <p>
                        416, R.K. World Tower, Nr Sheetal Park Chowk, 150 ft
                        Ring Road, Rajkot, Gujarat 360006. INDIA.
                      </p>
                    </div>

                    <div className="col-lg-5">
                      <h5>Mail</h5>
                      <p>info@trigas.in</p>
                    </div>

                    <div className="col-lg-7">
                      <h5>Phone</h5>
                      <p>+91 8866210228</p>
                    </div>

                    <div className="col-lg-5">
                      <h5>Soical</h5>
                      <li className="social">
                        <Link
                          to="https://www.facebook.com/people/TriGas/61563925604297/?mibextid=ZbWKwL"
                          target="_blank"
                        >
                          <FaFacebookF />
                        </Link>
                        &nbsp;
                        <Link
                          to="https://www.linkedin.com/company/trigasindia/?originalSubdomain=in"
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
                      </li>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 p-5" id="contact2">
                <p>
                  Propane & LPG Storage Installations – We specialize in
                  above-ground and mounded tank installations with safety and
                  precision. Our expert team ensures a seamless installation
                  process tailored to your needs.
                </p>
                <form onSubmit={handlesubmit}>
                  {/* 1 */}
                  <div class="form__group field">
                    <input
                      type="input"
                      class="form__field"
                      placeholder="Name"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                    <label for="name" class="form__label">
                      Name
                    </label>
                    {/* {errors.name && (
                      <div className="invalid-feedback">{errors.name}</div>
                    )} */}
                  </div>
                  {/* 2 */}
                  <div class="form__group field">
                    <input
                      type="input"
                      class="form__field"
                      placeholder="Email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    <label for="name" class="form__label">
                      Email
                    </label>
                    {/* {errors.email && (
                      <div className="invalid-feedback">{errors.email}</div>
                    )} */}
                  </div>
                  {/* 3 */}
                  <div class="form__group field">
                    <input
                      type="input"
                      // className={`form-control ${
                      //   errors.number ? "is-invalid" : ""
                      // }`}
                      class="form__field"
                      placeholder="Moblie No."
                      name="number"
                      id="moblie"
                      value={formData.number}
                      onChange={handleChange}
                      required
                    />
                    <label for="name" class="form__label">
                      Moblie No.
                    </label>
                    {/* {errors.number && (
                      <div className="invalid-feedback">{errors.number}</div>
                    )} */}
                  </div>
                  {/* 4 */}
                  <div class="form__group field">
                    <textarea
                      type="input"
                      class="form__field"
                      placeholder="Message"
                      name="message"
                      id="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                    <label for="name" class="form__label">
                      Message
                    </label>
                    {/* {errors.message && (
                      <div className="invalid-feedback">{errors.message}</div>
                    )} */}
                  </div>

                  <div className="cta-buttons mt-5 text-center">
                    <button
                      type="submit"
                      className="btn-get-in-touch2 w-100 text-center"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span>
                          <i className="fa fa-spinner fa-spin me-2"></i>
                          Submitting...
                        </span>
                      ) : (
                        "Submit"
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* Contact */}
      </div>
      {/* service */}
      <img
        src={since}
        alt=""
        id="since-img"
        className="img-fulid shadow bg-body-tertiary rounded"
      />

      <Footer />
    </div>
  );
}

export default Contact;
