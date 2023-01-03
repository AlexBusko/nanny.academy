import React from "react";
import { Outlet } from "react-router-dom";
import AcademyHeader from "../headers/AcademyHeader";
import AcademyFooter from "../footers/AcademyFooter";

const AcademyTemplate = () => {
  return (
    <div>
      <AcademyHeader />
      <Outlet />
      <AcademyFooter />
    </div>
  );
};

export default AcademyTemplate;
