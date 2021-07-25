import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import "./App.css";

import HomeScreen from "./pages/HomeScreen";

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <HomeScreen />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
