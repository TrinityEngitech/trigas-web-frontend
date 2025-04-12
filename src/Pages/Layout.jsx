import { Routes, Route } from "react-router-dom";
// Pages
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Client from "./Client";
import Contact from "./Contact";
import Project from "./Project";
import Media from "./Media";
import Faq from "./Faq";
import Terms from "./Terms";
import Policy from "./Policy";
// Admin
import Login from "../Admin/Login";
import AdminDashboard from "../Admin/AdminDashboard";
import Profile from "../Admin/Profile";
// Protected Route
import ProtectedRoute from "../Admin/context/ProtectedRoute"; 
// Error
import Error from "./Error";

function Layout() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/project" element={<Project />} />
        <Route path="/client" element={<Client />} />
        <Route path="/media" element={<Media />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/policy" element={<Policy />} />
         {/* Admin */}
         <Route path="/login" element={<Login />} />
        <Route
          path="/adminDashboard"
          element={<ProtectedRoute element={<AdminDashboard />} />}
        />
        <Route
          path="/profile"
          element={<ProtectedRoute element={<Profile />} />}
        />
        {/* Error */}
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default Layout;
