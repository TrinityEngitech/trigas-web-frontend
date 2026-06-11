import React from "react";
import AdminLayout from "./AdminLayout";
import { FaUserCircle } from "react-icons/fa";
import { MdEmail, MdAdminPanelSettings } from "react-icons/md";

function Profile() {
  return (
    <AdminLayout >
      <div className="admin-hed">
        <h2>My Profile</h2>
      </div>

      <div className="profile-card">
        <div className="profile-top">
          <div className="profile-avatar">
            <FaUserCircle />
          </div>

          <div className="profile-info">
            <h3>TRIGAS Admin</h3>
            <span>Administrator</span>
          </div>
        </div>

        <div className="profile-details">
          <div className="profile-item">
            <MdEmail />
            <div>
              <label>Email</label>
              <p>admin@trigas.com</p>
            </div>
          </div>

          <div className="profile-item">
            <MdAdminPanelSettings />
            <div>
              <label>Role</label>
              <p>Super Administrator</p>
            </div>
          </div>
        </div>

        <div className="profile-footer">
          <h5>Welcome to TRIGAS Admin Panel</h5>
          <p>
            Manage contact inquiries, career jobs, applications and website
            content from a single dashboard.
          </p>
        </div>
      </div>
    </AdminLayout>
  );
}

export default Profile;
