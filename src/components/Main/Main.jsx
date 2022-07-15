import React from "react";
import "./Main.scss";
import Heading from "../Heading/Heading";
import ParcelsList from "../ParcelsList/ParcelsList";
import { Link } from "react-router-dom";
import { nanoid } from "nanoid";

export const Main = () => {
  return (
    <div className="main">
      <Heading />
      <ParcelsList />
    </div>
  );
};

export default Main;
