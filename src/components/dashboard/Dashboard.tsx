// components
import "./Dashboard.css";
import Doctor from "./Doctor";
import Products from "./Products";
import HealthPackage from "./HealthPackage";
import Mediation from "./Mediation";
import Consultation from "./Consultation";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <div className="welcome">
        <span className="welcome-back">Welcome Back</span>
        <h1 className="user-name">Jubed Ahmed</h1>
      </div>

      <div className="content-wrapper">
        <div className="content-left">
          <Doctor />
          <div className="inner-left-content">
            <div className="popular-products-container">
              <Products />
            </div>
            <div className="health-packages-container">
              <HealthPackage />
            </div>
          </div>
        </div>

        <div className="content-right">
          <Mediation />
          <div className="section consultation-section ">
            <Consultation />
          </div>
        </div>
      </div>
    </div>
  );
}
