import React, { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import "./style.scss";

const CheckerCard = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className="checker-card"
      id={theme === "dark" ? "darkCard" : "lightCard"}
    >
      {children}
    </div>
  );
};

export default CheckerCard;
