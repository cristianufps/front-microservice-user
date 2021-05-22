import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from "../components/Login/SignIn";
import SignUp from "../components/Login/SignUp";
import NotFound from "../components/NotFound";
import Dashboard from "../layouts/Dashboard";
import LandingPage from "../layouts/LandingPage/index";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={() => <LandingPage />} />
          <Route exact path="/login" component={() => <SignIn />} />
          <Route exact path="/register" component={() => <SignUp />} />
          {/* Ruta privada */}
          <Route exact path="/dashboard" component={() => <Dashboard />} />
          {/* ----- */}
          <Route exact component={() => <NotFound />} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
