import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

import Dashboard from "./views/Dashboard";
import Homepage from "./views/Homepage";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/dashboard/:id" exact component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
