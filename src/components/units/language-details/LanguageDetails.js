import React from "react";
import "./language-detail.css";

const LanguageDetails = ({ language, level }) => {
  return (
    <li className="language-item">
      <h4 className="text">{language}</h4>
      <span className="percent">
        <div style={{ width: level }}></div>
      </span>
    </li>
  );
};

export default LanguageDetails;
