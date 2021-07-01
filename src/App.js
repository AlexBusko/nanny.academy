import "./App.scss";
import Header from "./components/header/Header";
import Landing from "./pages/landing/Landing";
import Courses from "./pages/courses/Courses";
import Footer from "./pages/footer/Footer";
import Events from "./pages/events/Events";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" children={<Landing />} />
          <Route path="/courses" children={<Courses />} />
          <Route path="/events" children={<Events />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
