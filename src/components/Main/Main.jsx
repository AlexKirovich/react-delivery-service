import React from "react";
import "./Main.scss";
import Heading from "../Heading/Heading";
import ParcelsList from "../ParcelsList/ParcelsList";

export const Main = () => {
  return (
    <div className="main">
      <Heading />
      <ParcelsList />
    </div>
  );
};

export default Main;
