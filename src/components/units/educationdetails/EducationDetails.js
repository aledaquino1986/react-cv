import React from "react";
import "./education-details.css";

const EducationDetails = ({ year, degree, institution }) => {
  return (
    <div className="education-container">
      <div className="education-details">
        <span className="education-details_year">
          <h5>{year}</h5>
        </span>
        <span>
          <h4 className="education-details_degree">{degree}</h4>
        </span>
        <span>
          <h4 className="education-details_uni">{institution}</h4>
        </span>
      </div>
    </div>
  );
};

export default EducationDetails;
