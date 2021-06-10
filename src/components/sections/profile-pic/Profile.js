import React, { useContext } from "react";
import "./profile.css";
import profilelight from "../../../images/light.jpg";
import profiledark from "../../../images/dark.jpg";
import { ThemeContext } from "../../../context/ThemeContext";

const Profile = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <section className="user-name-and-pic">
      <div className="user-name-and-pic__image-container">
        <img
          src={theme === "light" ? profilelight : profiledark}
          alt="user-profile"
        />
      </div>

      <h2>
        Alejandro Aquino
        <br /> <span>Web Developer</span>
      </h2>
    </section>
  );
};

export default Profile;
