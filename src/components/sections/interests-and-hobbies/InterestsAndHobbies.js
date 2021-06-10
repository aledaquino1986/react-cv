import React from "react";
import "./interests-and-hobbies.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGamepad,
  faMusic,
  faGlobe,
  faSwimmer,
  faTheaterMasks
} from "@fortawesome/free-solid-svg-icons";

const InterestsAndHobbies = () => {
  return (
    <section className="interests-and-hobbies">
      <h2>Interests and hobbies</h2>

      <ul className="interests-and-hobbies-ul">
        <li>
          {" "}
          <FontAwesomeIcon icon={faGamepad} className="hobbies-icons" />{" "}
          Videogames
        </li>
        <li>
          {" "}
          <FontAwesomeIcon icon={faMusic} className="hobbies-icons" /> Tango
        </li>
        <li>
          {" "}
          <FontAwesomeIcon icon={faGlobe} className="hobbies-icons" />
          Current Affairs
        </li>
        <li>
          {" "}
          <FontAwesomeIcon icon={faSwimmer} className="hobbies-icons" />{" "}
          Swimming
        </li>
        <li>
          {" "}
          <FontAwesomeIcon
            icon={faTheaterMasks}
            className="hobbies-icons"
          />{" "}
          Acting
        </li>
      </ul>
    </section>
  );
};

export default InterestsAndHobbies;
