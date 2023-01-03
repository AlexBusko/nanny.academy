import "./App.scss";
import Landing from "./pages/landing/Landing";
import Courses from "./pages/courses/Courses";
import Events from "./pages/events/Events";
import Checker from "./pages/checker/Checker";
import SuiChecker from "./pages/checker/sui/SuiCheker";
import { Routes, Route, useLocation } from "react-router-dom";
import FirstEvent from "./pages/events/FirstEvent/FirstEvent";
import { TradingCourse } from "./pages/courses/tradingCourse/TradingCourse";
import AcademyTemplate from "./components/templates/AcademyTemplate";
import CheckerTemplate from "./components/templates/CheckerTemplate";

const App = () => {
  const location = useLocation();
  console.log("hash", location.hash);
  console.log("pathname", location.pathname);
  console.log("search", location.search);

  return (
    <div>
      <Routes>
        <Route element={<AcademyTemplate />}>
          <Route path="/" element={<Landing />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/events" element={<Events />} />
        </Route>
        <Route element={<CheckerTemplate />}>
          <Route path="/checker" element={<Checker />}></Route>
          <Route path="/checker/sui" element={<SuiChecker />}></Route>
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
    </div>
  );
};

export default App;
