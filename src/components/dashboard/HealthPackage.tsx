// third-party
import { ChevronRight } from "lucide-react";

// components
import { healthPackages } from "../constant";

const HealthPackage = () => {
  return (
    <div>
      {" "}
      <div className="section">
        <div className="section-header">
          <h2 className="section-title">Health Packages</h2>
          <a href="#" className="view-all">
            View all <ChevronRight size={16} />
          </a>
        </div>
        <div className="package-list">
          {healthPackages.map((pkg, index) => (
            <div key={index} className="package-card">
              <div className="package-icon">{pkg.letter}</div>
              <div className="package-info">
                <div className="package-details">
                  <h3 className="package-name">{pkg.name}</h3>
                  <p className="package-description">{pkg.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HealthPackage;
