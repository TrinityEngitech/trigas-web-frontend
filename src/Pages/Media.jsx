// package
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
// pages
import Header from "../Component/Navbar";
import Footer from "../Component/Footer";
import Data from "../Component/Data";
import "../assets/css/font.css";
import "../assets/css/Media.css";
import Testimonal from "../Component/Testimonal";
// icon
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function Media() {
  const [media, setMedia] = useState([]);
  const [awards, setAwards] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("media");

  useEffect(() => {
    dataCategory();
  }, []);

  const dataCategory = () => {
    // media
    const media = Data.filter((e) => e.category === "media");
    setMedia(media);

    // awards
    const awards = Data.filter((e) => e.category === "awards");
    setAwards(awards);
  };

  const FilterCat = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <Header />
      {/* media */}
      <div className="media">
        {/* heading */}
        <div className="container-fulid" id="heading">
          <div className="row heading-section">
            <div className="col-lg-12 heading-image">
              <h1>Media / Awards</h1>
              <p>
                <Link to="/">Home</Link>{" "}
                <i>
                  <MdOutlineKeyboardArrowRight />
                </i>
                <Link to="/media">Media</Link>
              </p>
            </div>
          </div>
        </div>
        {/* heading */}

        {/* media-context */}
        <div className="container-fulid mt-5 mb-5">
          <div className="row">
            <div className="col-lg-12">
              <ul className="nav nav-tabs justify-content-center">
                <li className="nav-item">
                  <a
                    className={`nav-link ${
                      selectedCategory === "media" ? "active" : ""
                    }`}
                    onClick={() => FilterCat("media")}
                  >
                    MEDIA
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link ${
                      selectedCategory === "awards" ? "active" : ""
                    }`}
                    onClick={() => FilterCat("awards")}
                  >
                    AWARDS
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* media-context */}

        {/* content display */}
        <div className="container ">
          <div className="row ">
            {selectedCategory === "media" &&
              media.map((item, index) => (
                <div key={index}>
                  <div className="media-item border p-2 d-flex justify-content-between flex-wrap flex-sm-wrap flex-md-wrap">
                    <div className="col-lg-2  ">
                      <img
                        src={item.img}
                        alt=""
                        width={"300px"}
                        className="img-fulid media-img"
                      />
                    </div>
                    <div className="col-lg-8  align-self-center">
                      <h3 className="mb-3">{item.name}</h3>
                      <p>{item.dec1}</p>
                      <p>{item.dec2}</p>
                    </div>
                  </div>
                </div>
              ))}
            {selectedCategory === "awards" &&
              awards.map((item, index) => (
                <div key={index} className=" col-lg-3 col-md-4 col-sm-6 text-center">
                  <div className="award-item border shadow p-2 mb-3  rounded">
                    <img src={item.img} alt="" width={"200px"} className="img-fulid"/>
                    <p>{item.name}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
        {/* content display */}
        <Testimonal />
      </div>
      {/* media */}
      <Footer />
    </div>
  );
}

export default Media;
