import React from "react";
import { workExperience } from "../../../states/experience";
import ExperienceContainer from "../../units/experience/ExperienceContainer";
import "./experience.css";

const Experience = () => {
  return (
    <section className="work-experience">
      <h2>Experience</h2>

      {workExperience.map(experienceObject => {
        const { id, year, title, company, roles } = experienceObject;
        return (
          <ExperienceContainer
            key={id}
            title={title}
            year={year}
            company={company}
            role={roles}
          />
        );
      })}
    </section>
  );
};

export default Experience;
