import React from "react";
import "./profile.css";
import profile from "../../../images/profile.jpg";

const Profile = () => {
  return (
    <section className="user-name-and-pic">
      <div className="user-name-and-pic__image-container">
        <img src={profile} alt="user-profile" />
      </div>

      <h2>
        Alejandro Aquino
        <br /> <span>Web Developer</span>
      </h2>
    </section>
  );
};

export default Profile;
