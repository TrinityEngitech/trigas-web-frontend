import "../assets/css/Home_HeroSection.css";
import home from "../assets/image/home.mp4";
import { Link } from "react-router-dom";

function Home_HeroSection() {
  return (
    <div className="hero-section">
      <video autoPlay loop muted playsInline className="hero-video">
        <source src={home} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-overlay">
        <div className="container text-center text-white">
          <h1 id="hero-text">Gas Process Solution Management </h1>
          <h1 id="hero-text-mobile">Gas Process Solution Management</h1>
          <p className="lead w-75 m-auto mb-5">
            Simplifying gas management with innovation and precision. Experience
            reliable solutions built for the future.
          </p>
          <div className="cta-buttons">
            <Link to="/contact" target="_top"  class="btn-get-in-touch1">
              <span>Contact Us</span>
            </Link>
            <Link to="/about" target="_top"  class="btn-get-in-touch2 ms-4">
              <span>Discover More</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home_HeroSection;
