import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from "../components/Login/SignIn";
import SignUp from "../components/Login/SignUp";
import NotFound from "../components/NotFound/NotFound";
import LandingPage from "../layouts/LandingPage/index";
import Dashboard from "../components/Dashboard/Dashboard.jsx";

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
          <Route exact path="/dashboard/perfil" component={() => <Dashboard />} />
          <Route exact path="/dashboard/funcionalidad" component={() => <Dashboard />} />
          {/* ----- */}
          <Route exact component={() => <NotFound />} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
