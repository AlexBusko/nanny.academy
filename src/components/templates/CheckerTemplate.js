import React from "react";
import { Outlet } from "react-router-dom";
import CheckerHeader from "../headers/CheckerHeader";
import AcademyFooter from "../footers/AcademyFooter";

const CheckerTemplate = () => {
  return (
    <div>
      <CheckerHeader />
      <Outlet />
    </div>
  );
};

export default CheckerTemplate;
