import React from "react";
import EducationDetails from "../../units/educationdetails/EducationDetails";

import "./education.css";

const Education = ({ heading = "Education", education }) => {
  return (
    <section className="education-section">
      <h3 className="text3-heading">{heading}</h3>

      {education.map(educationObject => {
        const { degree, institution, year, id } = educationObject;
        return (
          <EducationDetails
            key={id}
            year={year}
            degree={degree}
            institution={institution}
          />
        );
      })}
    </section>
  );
};

export default Education;
