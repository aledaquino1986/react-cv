import React, { useContext } from "react";
import ExecutiveProfile from "../../sections/executive-profile/ExecutiveProfile";
import Experience from "../../sections/experience/Experience";
import Skills from "../../sections/skills/Skills";
import { programmingLanguages } from "../../sections/skills/programmingLanguages";

import "./rightside.css";
import InterestsAndHobbies from "../../sections/interests-and-hobbies/InterestsAndHobbies";
import { ThemeContext } from "../../../context/ThemeContext";

const RightSide = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <section className={`right-side right-side-${theme}`}>
      <ExecutiveProfile />
      <Experience />
      <Skills
        languages={programmingLanguages}
        heading="Skills"
        rightSide={true}
      />
      <InterestsAndHobbies />
    </section>
  );
};

export default RightSide;
