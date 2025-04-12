// pacakge
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// css
import '../assets/css/Navbar.css'
// logo
import Trigas_White_Logo from "../assets/logo/Trigas_Black_Logo.png";
// icon
import { MdOutlineArrowOutward } from "react-icons/md";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    setIsScrolled(offset > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <header
        className={`navbar  navbar-expand-lg ${
          isScrolled ? "navbar-scrolled" : ""
        } fixed-top`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              src={Trigas_White_Logo}
              alt="Logo"
              className="logo img-fluid"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item ms-2">
                <Link className="nav-link" to="/" target="_top">
                  Home
                </Link>
              </li>
              <li className="nav-item ms-2">
                <Link className="nav-link" to="/about" target="_top">
                  About Us
                </Link>
              </li>
              <li className="nav-item ms-2">
                <Link className="nav-link" to="/service" target="_top">
                  Services
                </Link>
              </li>
              <li className="nav-item ms-2">
                <Link className="nav-link" to="/project" target="_top">
                  Projects
                </Link>
              </li>
              <li className="nav-item ms-2">
                <Link className="nav-link" to="/client" target="_top">
                  Clients
                </Link>
              </li>
              <li className="nav-item ms-2">
                <Link className="nav-link" to="/media" target="_top">
                  Media & Awards
                </Link>
              </li>
              <li className="nav-item ms-2">
                <Link className="nav-link" to="/contact" target="_top">
                  Contacts
                </Link>
              </li>
            </ul>
            <div className="d-flex">
              <Link to="/contact" class="btn-get-in-touch" target="_top">
                <span>
                  {" "}
                  Get in Touch{" "}
                  <i class="arrow">
                    <MdOutlineArrowOutward />
                  </i>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;

