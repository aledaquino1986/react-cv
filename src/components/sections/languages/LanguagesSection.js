import React from "react";
import LanguageDetails from "../../units/language-details/LanguageDetails";
import "./languages.css";

function LanguagesSection({ languages }) {
  return (
    <section className="left-side__languages">
      <h3 className="text3-heading">Languages</h3>

      <ul className="left-side__ul">
        {languages.map(({ language, level, id }) => {
          return <LanguageDetails language={language} level={level} key={id} />;
        })}
      </ul>
    </section>
  );
}

export default LanguagesSection;
