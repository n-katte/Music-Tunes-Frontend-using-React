import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";


const Routes = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Routes;
