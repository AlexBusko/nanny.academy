import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import CheckerHeader from "../headers/CheckerHeader";
//import AcademyFooter from "../footers/AcademyFooter";
import { ThemeContext } from "../../context/ThemeContext";

const CheckerTemplate = () => {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    console.log(theme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div>
        <CheckerHeader />
        <Outlet />
      </div>
    </ThemeContext.Provider>
  );
};

export default CheckerTemplate;
