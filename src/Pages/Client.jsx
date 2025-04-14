// package
import { Link } from "react-router-dom";
// pages
import Header from "../Component/Navbar";
import Footer from "../Component/Footer";
import Testimonal from "../Component/Testimonal";
import "../assets/css/font.css";
import "../assets/css/Clients.css";
// icon
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
// img
import b1 from "../assets/image/b1.webp";
import b2 from "../assets/image/b2.webp";
import b3 from "../assets/image/b3.webp";
import b4 from "../assets/image/b4.webp";
import b5 from "../assets/image/b5.webp";
import b6 from "../assets/image/b6.webp";
import b7 from "../assets/image/b7.webp";

// client
import c1 from "../assets/image/c1.jpg";
import c2 from "../assets/image/c2.jpg";
import c3 from "../assets/image/c3.jpg";
import c4 from "../assets/image/c4.jpg";
import c5 from "../assets/image/c5.jpg";
import c6 from "../assets/image/c6.jpg";
import c7 from "../assets/image/c7.jpg";
import c8 from "../assets/image/c8.jpg";
import c9 from "../assets/image/c9.jpg";
import c10 from "../assets/image/c10.jpg";
import c11 from "../assets/image/c11.jpg";
import c12 from "../assets/image/c12.jpg";
import c13 from "../assets/image/c13.jpg";
import c14 from "../assets/image/c14.jpg";

function Client() {
  return (
    <div>
      <Header />
      {/* Client */}
      <div className="client">
        {/* heading */}
        <div className="container-fulid" id="heading">
          <div className="row heading-section">
            <div className="col-lg-12 heading-image">
              <h1 className="">Our Clients</h1>
              <p>
                <Link to="/">Home</Link> <i><MdOutlineKeyboardArrowRight /></i>
                <Link>Clients</Link>{" "}
              </p>
            </div>
          </div>
        </div>
        {/* heading */}

        {/* a clients already join trigas  */}
        <div className="container mt-5 mb-5">
        <div className="row" data-aos="fade-up">
  {[c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14].map((img, index) => (
    <div className="img-wrapper col-lg-2 col-md-3 col-sm-4 col-6 d-flex justify-content-center" key={index}>
      <img className="inner-img p-2 img-fluid" src={img} alt={`img-${index}`} />
    </div>
  ))}
</div>

        </div>
        {/* a clients already join trigas  */}
        


        {/* become a partner */}
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

        <Testimonal/>
      </div>
      {/* Client */}
      <Footer />
    </div>
  );
}

export default Client;
