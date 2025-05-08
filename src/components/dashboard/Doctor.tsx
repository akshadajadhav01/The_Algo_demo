import { ChevronRight } from "lucide-react";
import { topDoctors } from "../constant";

const Doctor = () => {
  return (
    <div>
      {" "}
      <div className="section top-doctors">
        <div className="section-header">
          <h2 className="section-title">Top Doctors</h2>
          <a href="#" className="view-all">
            View all <ChevronRight size={16} />
          </a>
        </div>
        <div className="doctor-grid">
          {topDoctors.map((doctor, index) => (
            <div key={index} className="doctor-card">
              <div className="doctor-info">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="doctor-img"
                />
                <div className="doctor-details">
                  <h3>{doctor.name}</h3>
                  <p className="doctor-specialty">{doctor.specialty}</p>
                  <div className="doctor-rating">
                    <span className="star">★</span>
                    <span className="rating">{doctor.rating}</span>
                    <span className="reviews">• {doctor.reviews} Reviews</span>
                  </div>
                </div>
              </div>
              <ChevronRight size={20} color="#a0aec0" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctor;
