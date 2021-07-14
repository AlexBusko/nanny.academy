import React from "react";
import { AboutUs } from "./aboutus/AboutUs";
import { Heading } from "./heading/Heading";
import { Offers } from "./offers/Offers";
import "./style.scss";

const Landing = () => {
  return (
    <div className="landing">
      <Heading />
      <AboutUs />
      <Offers />
    </div>
  );
};

export default Landing;
