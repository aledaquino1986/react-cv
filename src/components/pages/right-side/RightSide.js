import React from "react";
import ExecutiveProfile from "../../sections/executive-profile/ExecutiveProfile";
import Experience from "../../sections/experience/Experience";
import Skills from "../../sections/skills/Skills";
import { programmingLanguages } from "../../sections/skills/programmingLanguages";
import "./rightside.css";

const RightSide = () => {
  return (
    <section className="right-side">
      <ExecutiveProfile />
      <Experience />

      {/* <section className="skills">
        <h2>Skills</h2>

        <div className="skills-container">
          <h4>HTML</h4>
          <div className="percent">
            <div style={{ width: "90%" }}></div>
          </div>
        </div>
      </section> */}

      <Skills
        languages={programmingLanguages}
        heading="Skills"
        rightSide={true}
      />
    </section>
  );
};

export default RightSide;
