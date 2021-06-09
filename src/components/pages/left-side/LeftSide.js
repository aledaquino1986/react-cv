import React from "react";
import Profile from "../../sections/profile-pic/Profile";
import Contact from "../../sections/contact/Contact";
import "./leftside.css";
import Education from "../../sections/education/Education";
import { courses, education } from "../../../states/educationStates";

const LeftSide = () => {
  return (
    <aside className="left-side">
      <Profile />
      <Contact />
      <Education heading="Education" education={education} />
      <Education heading="courses" education={courses} />
    </aside>
  );
};

export default LeftSide;
