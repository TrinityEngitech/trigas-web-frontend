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
        <div className="row">
          <div className="col-lg-12 d-flex flex-wrap " data-aos="fade-up">
            {/* 1 */}
            <div className="img-wrapper col-lg-2 col-md-4 col-sm-6 col-12">
              <img className="inner-img p-3" src={c1} />
            </div>
            {/* 2 */}
            <div className="img-wrapper col-lg-2 col-md-4 col-sm-6 col-12">
              <img className="inner-img p-3" src={c2} />
            </div>
            {/* 3  */}
            <div className="img-wrapper col-lg-2 col-md-4 col-sm-6 col-12">
              <img className="inner-img p-3" src={c3} />
            </div>
            {/* 4 */}
            <div className="img-wrapper col-lg-2 col-md-4 col-sm-6 col-12">
              <img className="inner-img p-3" src={c4} />
            </div>
            {/* 5 */}
            <div className="img-wrapper col-lg-2 col-md-4 col-sm-6 col-12">
              <img className="inner-img p-3" src={c5} />
            </div>
            {/* 6 */}
            <div className="img-wrapper col-lg-2 col-md-4 col-sm-6 col-12">
              <img className="inner-img p-3" src={c6} />
            </div>
            {/* 7 */}
            <div className="img-wrapper col-lg-2 col-md-4 col-sm-6 col-12">
              <img className="inner-img p-3" src={c7} />
            </div>
            {/* 8 */}
            <div className="img-wrapper col-lg-2 col-md-4 col-sm-6 col-12">
              <img className="inner-img p-3" src={c8} />
            </div>
            {/* 9 */}
            <div className="img-wrapper col-lg-2 col-md-4 col-sm-6 col-12">
              <img className="inner-img p-3" src={c9} />
            </div>
            {/* 10 */}
            <div className="img-wrapper col-lg-2 col-md-4 col-sm-6 col-12">
              <img className="inner-img p-3" src={c10} />
            </div>
            {/* 11 */}
            <div className="img-wrapper col-lg-2 col-md-4 col-sm-6 col-12">
              <img className="inner-img p-3" src={c11} />
            </div>
            {/* 12 */}
            <div className="img-wrapper col-lg-2 col-md-4 col-sm-6 col-12">
              <img className="inner-img p-3" src={c12} />
            </div>
            {/* 13 */}
            <div className="img-wrapper col-lg-2 col-md-4 col-sm-6 col-12">
              <img className="inner-img p-3" src={c13} />
            </div>
            {/* 14  */}
            <div className="img-wrapper col-lg-2 col-md-4 col-sm-6 col-12">
              <img className="inner-img p-3" src={c14} />
            </div>
          </div>
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
              <div className="col-lg-12 d-flex flex-wrap ">
                {/* 1 */}
                <div className="client-img m-3">
                  <img src={b1} alt="" width={"250px"} className="img-fulid" />
                </div>
                {/* 2 */}
                <div className="client-img m-3">
                  <img src={b2} alt="" width={"250px"} className="img-fulid" />
                </div>
                {/* 3 */}
                <div className="client-img m-3">
                  <img src={b3} alt="" width={"250px"} className="img-fulid" />
                </div>
                {/* 4 */}
                <div className="client-img m-3">
                  <img src={b4} alt="" width={"250px"} className="img-fulid" />
                </div>
                {/* 5 */}
                <div className="client-img m-3">
                  <img src={b5} alt="" width={"250px"} className="img-fulid" />
                </div>
                {/* 6 */}
                <div className="client-img m-3">
                  <img src={b6} alt="" width={"250px"} className="img-fulid" />
                </div>
                {/* 7 */}
                <div className="client-img m-3">
                  <img src={b7} alt="" width={"250px"} className="img-fulid" />
                </div>
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
