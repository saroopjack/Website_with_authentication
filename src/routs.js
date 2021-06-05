import React from "react";
import Navbars from "./navbars";
import { Route, BrowserRouter } from "react-router-dom";
import Authentications from "./authentication";
import Animals from "./animals";
import Birds from "./birds";
import Fruits from "./fruits";
import Vegitables from "./vegitables";

export default function Routs() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/" component={Authentications} />
        <Route exact path="/nav" component={Navbars} />
        <Route exact path="/Animals" component={Animals} />
        <Route exact path="/Birds" component={Birds} />
        <Route exact path="/Fruits" component={Fruits} />
        <Route exact path="/Vegitables" component={Vegitables} />
      </BrowserRouter>
    </div>
  );
}
