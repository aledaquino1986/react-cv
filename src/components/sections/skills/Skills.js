import React from "react";
import SkillsDetails from "../../units/skills-details/SkillsDetails";
import "./skills.css";

function Skills({ languages, heading = "Languages", rightSide }) {
  return (
    <section
      className={rightSide ? `"right-side__skills"` : "left-side__languages"}
    >
      {rightSide ? (
        <h2>{heading}</h2>
      ) : (
        <h3 className="text3-heading">{heading}</h3>
      )}

      <ul className={rightSide ? `"right-side__ul"` : "left-side__ul"}>
        {languages.map(({ language, level, id }) => {
          return (
            <SkillsDetails
              language={language}
              level={level}
              key={id}
              rightSide={rightSide}
            />
          );
        })}
      </ul>
    </section>
  );
}

export default Skills;
