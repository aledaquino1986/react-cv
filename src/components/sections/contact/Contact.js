import React from "react";
import ContactDetails from "../../units/contact-details/ContactDetails";
import {
  faPhone,
  faEnvelope,
  faGlobe,
  faMapMarker
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

import "./contact.css";

const Contact = () => {
  return (
    <section className="contact-section">
      <h3 className="text3-heading">Contact Info</h3>

      <ul className="contact-info">
        <ContactDetails text={"1145305778"} icon={faPhone} />
        <ContactDetails
          text={"alejandrodanielaquino@yahoo.com.ar"}
          icon={faEnvelope}
        />
        <ContactDetails
          text={"https://aleaquino.netlify.app/"}
          textLink={"Portfolio"}
          icon={faGlobe}
          link={true}
        />
        <ContactDetails
          text={"https://www.linkedin.com/in/alejandro-aquino/"}
          link={true}
          icon={faLinkedin}
        />
        <ContactDetails
          text={"https://github.com/aledaquino1986"}
          icon={faGithub}
          link={true}
        />
        <ContactDetails text={"Buenos Aires, Argentina"} icon={faMapMarker} />
      </ul>
    </section>
  );
};

export default Contact;
