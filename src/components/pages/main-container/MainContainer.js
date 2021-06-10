import React, { useContext } from "react";
import RightSide from "../right-side/RightSide";
import LeftSide from "../left-side/LeftSide";
import "./maincontainer.css";
import { ThemeContext } from "../../../context/ThemeContext";

const MainContainer = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <main className={`main-${theme}`}>
      <LeftSide />
      <RightSide />
    </main>
  );
};

export default MainContainer;
