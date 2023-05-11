import React from "react";
import "./App.scss";
import Landing from "./pages/landing/Landing";
import Courses from "./pages/courses/Courses";
import Events from "./pages/events/Events";
import Checker from "./pages/checker/Checker";
//import SuiChecker from "./pages/checker/sui/SuiCheker";
import { Routes, Route, useLocation } from "react-router-dom";
// import FirstEvent from "./pages/events/FirstEvent/FirstEvent";
// import { TradingCourse } from "./pages/courses/tradingCourse/TradingCourse";
import AcademyTemplate from "./components/templates/AcademyTemplate";
import CheckerTemplate from "./components/templates/CheckerTemplate";
// import { GlobalProvider } from "./context/GlobalContext";

const App = () => {
  const location = useLocation();
  console.log("hash", location.hash);
  console.log("pathname", location.pathname);
  console.log("search", location.search);

  return (
    <Routes>
      <Route element={<AcademyTemplate />}>
        <Route path="/landing" element={<Landing />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/events" element={<Events />} />
      </Route>
      <Route element={<CheckerTemplate />}>
        <Route path="/" element={<Checker />}></Route>
        {/* <Route path="/checker/sui" element={<SuiChecker />}></Route> */}
      </Route>
      {/*  */}
      {/* 
          
          <Route exact path="/events/firstEvent" children={<FirstEvent />} />
          <Route
            exact
            path="/courses/tradingCourse"
            children={<TradingCourse />}
          /> */}
    </Routes>
  );
};

export default App;
