import React, { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import "./education-details.css";

const EducationDetails = ({ year, degree, institution }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="education-container">
      <div className="education-details">
        <span className="education-details_year">
          <h5 className={`education-details-year-${theme}`}>{year}</h5>
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
