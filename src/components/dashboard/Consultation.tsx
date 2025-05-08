import { Clock } from "lucide-react";

const Consultation = () => {
  return (
    <div>
      {" "}
      <h2 className="consultation-title ">Upcoming Consultation</h2>
      <div className="consultation">
        <div className="consultation-doctor">
          <div className="doctor-consultation-info">
            <img
              src="https://randomuser.me/api/portraits/men/1.jpg"
              alt="Doctor"
              className="doctor-img"
            />
            <div>
              <h3>Dr. Darlene Robertson</h3>
              <p className="doctor-specialty">Dental Specialist</p>
            </div>
          </div>
        </div>
        <div className="consultation-details">
          <div className="date-info">
            <span className="date-icon">📅</span>
            <span className="consultation-date">27 Oct 2021</span>
          </div>
          <div className="time-info">
            <Clock size={16} color="#64748b" />
            <span className="consultation-date">11:00 - 12:00 AM</span>
          </div>
        </div>
        <div className="consultation-actions">
          <button className="cancel-btn">Cancel</button>
          <button className="reschedule-btn">Reschedule</button>
        </div>
      </div>
    </div>
  );
};

export default Consultation;
