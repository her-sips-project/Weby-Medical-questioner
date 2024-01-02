import React from "react";
import "./main.css";
// import RoutingHeb from "../../Routing/Routing";
import { BrowserRouter } from "react-router-dom";

const Main = () => {
  return (
    <div className="Main  container-fluid">
      <BrowserRouter>{/* <RoutingHeb /> */}</BrowserRouter>
    </div>
  );
};

export default Main;
