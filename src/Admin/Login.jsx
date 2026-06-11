import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import "../assets/css/Login.css";
import login_logo from "../assets/logo/Trigas_Black_Logo.png";
import Swal from "sweetalert2";
import { FaUserShield, FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();

  const staticUserData = {
    email: "admin@trigas",
    password: "admin@trigas",
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === staticUserData.email && password === staticUserData.password) {
      Swal.fire({
        icon: "success",
        title: "Login Successfully!",
        text: "Welcome to TRIGAS Admin Panel",
        confirmButtonColor: "#fa5e07",
      }).then((result) => {
        if (result.isConfirmed) {
          login();
          navigate("/dashboard");
        }
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Invalid Credentials",
        text: "Invalid email or password",
        confirmButtonColor: "#fa5e07",
      });
    }
  };

  return (
    <div className="login-page">
      <div className="login-left">
        <div className="login-overlay">
          <h1>TRIGAS Admin Panel</h1>
          <p>
            Manage contact inquiries, career jobs and applications from one
            secure dashboard.
          </p>
        </div>
      </div>

      <div className="login-right">
        <div className="login-card">
          <div className="login-logo">
            <img src={login_logo} alt="TRIGAS" />
          </div>

          <div className="login-title">
            <span>
              <FaUserShield />
            </span>
            <h2>Admin Login</h2>
            <p>Enter your credentials to access dashboard</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="login-field">
              <label>Username</label>
              <input
                type="text"
                placeholder="Enter username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="login-field">
              <label>Password</label>
              <div className="password-box">
                <input
                  type={showPass ? "text" : "password"}
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />

                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                >
                  {showPass ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            <button type="submit" className="login-btn">
              Login
            </button>

            <div className="login-back">
              <Link to="/">← Back to Website</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;