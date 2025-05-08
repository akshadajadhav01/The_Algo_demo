import { MoreHorizontal } from "lucide-react";
import { medications } from "../constant";

const Mediation = () => {
  return (
    <div>
      {" "}
      <div className="medications">
        <div className="section-header">
          <h2 className="section-title">Medications</h2>
          <MoreHorizontal size={24} color="#a0aec0" />
        </div>
        <div>
          {medications.map((med, index) => (
            <div key={index} className="medication-item">
              <h3 className="medication-name">{med.name}</h3>
              <p className="medication-instructions">{med.instructions}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mediation;
