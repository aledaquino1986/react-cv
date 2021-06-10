import React from "react";

const ExperienceContainer = ({ title, year, company, role }) => {
  return (
    <div className="work-experience-container">
      <div className="work-experience__year-company">
        <span className="work-experience__year-company--year">{year}</span>{" "}
        <br />
        <span className="work-experience__year-company--company_name">
          {company}
        </span>
      </div>

      <div className="work-experience__title-description">
        <h4>{title}</h4>
        <ul>
          {role.map((roles, index) => {
            return <li key={index}>{roles}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceContainer;
