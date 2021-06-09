import React from "react";
import RightSide from "../right-side/RightSide";
import LeftSide from "../left-side/LeftSide";
import "./maincontainer.css";

const MainContainer = () => {
  return (
    <main>
      <LeftSide />
      <RightSide />
    </main>
  );
};

export default MainContainer;
