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
  <div className="login-card">
    <div className="login-logo">
      <img src={login_logo} alt="TRIGAS" />
    </div>

    <h2>Admin Login</h2>
    <p>Welcome back! Login to continue.</p>

    <form onSubmit={handleSubmit}>
      <div className="login-field">
        <label>Username</label>
        <input
          type="text"
          placeholder="Enter Username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="login-field">
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
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
  );
};

export default Login;