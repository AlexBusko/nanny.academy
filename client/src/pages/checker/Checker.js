import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

import SuiChecker from "./sui/SuiCheker";
import "./style.scss";

const Checker = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="checker-wrapper" id={theme}>
      <div className="checker">
        <SuiChecker />
      </div>
    </div>
  );
};

export default Checker;
