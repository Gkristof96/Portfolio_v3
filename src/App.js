import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import "./App.css";

import HomeScreen from "./pages/HomeScreen";
import ImpresszumScreen from "./pages/ImpresszumScreen";
import ProjectsScreen from "./pages/ProjectsScreen";
import AboutScreen from "./pages/AboutScreen";
import ContactScreen from "./pages/ContactScreen";

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <HomeScreen />
          </Route>
          <Route path="/projects" exact>
            <ProjectsScreen />
          </Route>
          <Route path="/about" exact>
            <AboutScreen />
          </Route>
          <Route path="/contact" exact>
            <ContactScreen />
          </Route>
          <Route path="/impresszum" exact>
            <ImpresszumScreen />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
