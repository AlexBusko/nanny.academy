import React, { useContext } from "react";
//import CheckerFooter from "../../components/footers/CheckerFooter/CheckerFooter";
import { ThemeContext } from "../../context/ThemeContext";

import SuiChecker from "./sui/SuiCheker";
import "./style.scss";

const Checker = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="checker-wrapper" id={theme}>
      <div className="checker">
        <SuiChecker />

        {/*  */}
        {/* <CheckerFooter /> */}
      </div>
    </div>
  );
};

export default Checker;
