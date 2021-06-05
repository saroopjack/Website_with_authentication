import React from "react";
import Navbars from "./navbars";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import Authentications from "./authentication";

export default function Routs() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Authentications}/>
          <Route exact path="/NavigationsBar" component={Navbars} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
