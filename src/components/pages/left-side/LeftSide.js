import React from "react";
import Profile from "../../sections/profile-pic/Profile";
import Contact from "../../sections/contact/Contact";
import "./leftside.css";
import Education from "../../sections/education/Education";
import { courses, education } from "../../../states/educationStates";
import LanguagesSection from "../../sections/languages/LanguagesSection";
import { languages } from "../../sections/languages/languages";

const LeftSide = () => {
  return (
    <aside className="left-side">
      <Profile />
      <Contact />
      <Education heading="Education" education={education} />
      <Education heading="courses" education={courses} />
      <LanguagesSection languages={languages} />
    </aside>
  );
};

export default LeftSide;
