import React from "react";
import "./skills-details.css";

const SkillsDetails = ({ language, level, rightSide }) => {
  return (
    <li className="language-item">
      <h4 className="text">{language}</h4>
      <span className={rightSide ? `right-percent` : `left-percent`}>
        <div style={{ width: level }}></div>
      </span>
    </li>
  );
};

export default SkillsDetails;
