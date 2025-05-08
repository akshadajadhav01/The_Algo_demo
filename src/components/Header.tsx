// third-party
import { Search, Bell } from "lucide-react";

// components
import "./Header.css";

const Header = () => (
  <div className="header">
    <div className="dropdown">
      <span className="dropdown-text">Default</span>
      <span className="dropdown-arrow">▼</span>
    </div>
    <div className="search-container">
      <Search className="search-icon" size={18} />
      <input
        type="text"
        placeholder="Search by doctor's name/ speciality etc"
        className="search-input"
      />
    </div>
    <div className="user-actions">
      <div className="notification">
        <Bell size={24} color="#64748b" />
        <span className="notification-badge"></span>
      </div>
      <div className="vertical-line"></div>
      <div className="profile">
        <img
          src="https://randomuser.me/api/portraits/men/1.jpg"
          alt="Profile"
          className="profile-img"
        />
        <span className="profile-arrow">▼</span>
      </div>
    </div>
    <hr className="horizontal-line" />
  </div>
);

export default Header;
