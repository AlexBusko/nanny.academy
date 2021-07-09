import "./App.scss";
import Header from "./components/header/Header";
import Landing from "./pages/landing/Landing";
import Courses from "./pages/courses/Courses";
import Footer from "./pages/footer/Footer";
import Events from "./pages/events/Events";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FirstEvent from "./pages/events/FirstEvent/FirstEvent";

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" children={<Landing />} />
          <Route exact path="/courses" children={<Courses />} />
          <Route exact path="/events" children={<Events />} />
          <Route exact path="/events/firstEvent" children={<FirstEvent />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
