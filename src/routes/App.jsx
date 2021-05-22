import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "../components/Login";
import NotFound from "../components/NotFound";
import LandingPage from "../layouts/LandingPage/index";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={() => <LandingPage />} />
          <Route exact path="/login" component={() => <Login />} />
          <Route exact component={() => <NotFound />} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
