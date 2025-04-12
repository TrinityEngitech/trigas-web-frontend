import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "./context/AuthContext"; 
import "../assets/css/Login.css";
import login_logo from '../assets/logo/Trigas_Black_Logo.png';
import Swal from 'sweetalert2';

const Login = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); 
  // Static user data for login
  const staticUserData = {
    email: "admin@trigas", 
    password: "admin@trigas",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check static user data
    if (
      email === staticUserData.email &&
      password === staticUserData.password
    ) {
      Swal.fire({
        icon: 'success',
        title: 'Login Successfully!',
        text: 'You have been logged in!',
        confirmButtonText: 'OK',
        customClass: {
          container: 'swal-custom-bg',
        },
      }).then((result) => {
        if (result.isConfirmed) {
          login(); 
          navigate("/adminDashboard"); 
        }
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Credentials',
        text: 'Invalid email or password',
        confirmButtonText: 'OK',
        customClass: {
          container: 'swal-custom-bg',
        },
      });
    }
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-8 m-auto">
            <h2 className="text-center text-dark mt-5">ONLY ADMIN CAN LOGIN</h2>
            {/* <div className="text-center mb-5 text-dark">Login Form</div> */}
            <div className="card my-5 w-auto m-auto h-auto">
              <form
                className="card-body cardbody-color p-lg-5"
                onSubmit={handleSubmit}
              >
                <div className="text-center">
                  <img
                    src={login_logo}
                    className="img-fluid mb-5 my-3"
                    width="150px"
                    alt="profile"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="UserName"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="btn btn-color px-5 mb-5 w-100"
                  >
                    Login
                  </button>
                </div>
                <div className="text-end" id="back">
                  <Link to="/">
                    <i className="ri-arrow-left-s-line"></i>Go Back
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
