import React from "react";
import Routing from "../../Routing/Routing";
import "./main.css";
import RoutingHeb from "../../RoutingHeb/RoutingHeb";
import { BrowserRouter } from "react-router-dom";

const Main = () => {
  return (
    <div className="Main  container-fluid">
      <BrowserRouter>
        {/* <RoutingHeb /> */}
      </BrowserRouter>
    </div>
  );
};

export default Main;
