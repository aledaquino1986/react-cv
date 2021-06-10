import React, { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import "./skills-details.css";

const SkillsDetails = ({ language, level, rightSide }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <li className="language-item">
      <h4 className="text">{language}</h4>
      <span
        className={
          rightSide
            ? `right-percent right-percent`
            : `left-percent left-percent-${theme}`
        }
      >
        <div style={{ width: level }}></div>
      </span>
    </li>
  );
};

export default SkillsDetails;
