import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Home from "./components/Home";
import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={Home} />
        <Redirect from="*" to="" />
      </Router>
    </div>
  );
};

export default App;
