import { useState } from "react";
import { Link } from "react-router-dom";

// components
import "./Sidebar.css";
import logo from "../assets/logo.png";

interface MenuItem {
  name: string;
  icon: string;
  path: string;
}

const Sidebar = () => {
  const [activeMenuItem, setActiveMenuItem] = useState<string>("Home");

  const menuItems: MenuItem[] = [
    { name: "Home", icon: "🏠", path: "/" },
    { name: "Appointment", icon: "📅", path: "/appointment" },
    { name: "Lab Tests", icon: "🧪", path: "/lab-tests" },
    { name: "Medicine Order", icon: "💊", path: "/medicine-order" },
    { name: "Favourites", icon: "❤️", path: "/favourites" },
    { name: "Family", icon: "👪", path: "/family" },
    { name: "Prescription", icon: "📄", path: "/prescription" },
    { name: "Messages", icon: "✉️", path: "/messages" },
    { name: "Payments", icon: "💰", path: "/payments" },
    { name: "Settings", icon: "⚙️", path: "/settings" },
  ];

  return (
    <div className="sidebar">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo-icon" />
        <div className="logo">medik</div>
      </div>
      <div className="menu-list">
        {menuItems.map((item) => (
          <Link
            to={item.path}
            key={item.name}
            className={`menu-item ${
              activeMenuItem === item.name ? "active" : ""
            }`}
            onClick={() => setActiveMenuItem(item.name)}
          >
            <span className="menu-icon">{item.icon}</span>
            <span>{item.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
