import { Link } from "react-router-dom";
import "../assets/css/Admin.css";
import "../assets/js/AdminDashboard.js";

// logo
import adminLogo from "../assets/logo/Trigas_Black_Logo.png";

// icon
import { FaUserCircle } from "react-icons/fa";
import { BiSolidUserRectangle } from "react-icons/bi";

import { BiLogOut } from "react-icons/bi";
function Profile() {
  return (
    <div>
      <div className="container-fulid">
        <div className="row">
          <div className="col-lg-12 d-flex">
            <div className="aside">
              <div className="admin-logo">
                <img src={adminLogo} alt="" className=" img-fluid" />
              </div>
              <div className="admin-nav">
                <li>
                  <Link to="/adminDashboard">
                    <BiSolidUserRectangle /> CONTACT INQUIRY
                  </Link>
                </li>

                <li>
                  <Link to="/login">
                    <BiLogOut /> LOGOUT
                  </Link>
                </li>
              </div>
            </div>
            <div className="adminbody">
              <div className="adminbody-header text-end pe-5">
                <i id="profile">
                  <Link to="/profile">
                    <FaUserCircle />
                  </Link>
                </i>
              </div>
              <div className="adminbody-content">
                <div className="admin-hed">
                  <h2>Profile </h2>
                </div>
                <form action="">
                  <h2> Hello Trigas Admin !!</h2>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
