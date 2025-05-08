// App.jsx
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./components/dashboard/Dashboard";
import "./App.css";

function NotFound() {
  return (
    <div className="not-found-container">
      <h1>Page not found</h1>
    </div>
  );
}

export default function App() {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <Header />
        <hr className="divider" />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}
