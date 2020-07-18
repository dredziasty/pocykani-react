import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import PageTransition from "./components/PageTransition";
import Header from "./components/Header";

import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Offer from "./pages/Offer";
import Contact from "./pages/Contact";

import "./scss/App.scss";

const routes = [
  {
    path: "/",
    name: "home",
    Component: Home,
  },
  {
    path: "/portfolio",
    name: "portfolio",
    Component: Portfolio,
  },
  {
    path: "/about",
    name: "about",
    Component: About,
  },
  {
    path: "/offer",
    name: "offer",
    Component: Offer,
  },
  {
    path: "/contact",
    name: "contact",
    Component: Contact,
  },
];

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route
          render={({ location }) => (
            <AnimatePresence initial={false} exitBeforeEnter>
              <Switch location={location} key={location.pathname}>
                {routes.map(({ path, Component }) => (
                  <Route key={path} exact path={path}>
                    <Component />
                  </Route>
                ))}
              </Switch>
            </AnimatePresence>
          )}
        />
      </Router>
    </div>
  );
};

export default App;
