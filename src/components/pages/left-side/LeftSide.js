import React, { useContext } from "react";
import Profile from "../../sections/profile-pic/Profile";
import Contact from "../../sections/contact/Contact";
import "./leftside.css";
import Education from "../../sections/education/Education";
import { courses, education } from "../../../states/educationStates";
import Skills from "../../sections/skills/Skills";
import { languages } from "../../sections/skills/languages";
import { ThemeContext } from "../../../context/ThemeContext";

const LeftSide = () => {
  const { theme, changeTheme } = useContext(ThemeContext);
  return (
    <aside className={`left-side left-side-${theme}`}>
      {theme === "light" ? (
        <button className="theme-button" onClick={changeTheme}>
          💡
        </button>
      ) : (
        <button className="theme-button" onClick={changeTheme}>
          🔦
        </button>
      )}

      <Profile />
      <Contact />
      <Education heading="Education" education={education} />
      <Education heading="courses" education={courses} />
      <Skills languages={languages} heading="Languages" />
    </aside>
  );
};

export default LeftSide;
