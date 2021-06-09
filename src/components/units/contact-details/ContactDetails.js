import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactDetails = ({ text, icon }) => {
  return (
    <li>
      <span>
        <FontAwesomeIcon id="fa-icon" icon={icon} />
      </span>
      <span className="data">
        <p>{text}</p>
      </span>
    </li>
  );
};

export default ContactDetails;
