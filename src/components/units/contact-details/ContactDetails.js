import React, { useContext } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ThemeContext } from "../../../context/ThemeContext";

import "./contact-details.css";

const ContactDetails = ({ text, icon }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <li>
      <span>
        <FontAwesomeIcon className={`fa-icon fa-icon-${theme}`} icon={icon} />
      </span>
      <span className="data">
        <p>{text}</p>
      </span>
    </li>
  );
};

export default ContactDetails;
