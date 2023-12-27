import React, { useState } from "react";
import Navbar from "../../Navbar/Navbar";
import "./HomePage01.scss";
import { BrowserRouter,Link, useNavigate } from "react-router-dom";
import { SlArrowRight } from "react-icons/sl";
import RoutingHeb from "../../LayoutArea/RoutingHeb/RoutingHeb";

const HomePage01 = () => {
  const [isStart, setIsStart] = useState(false);

  function letsStarted() {
    setIsStart(!isStart);
  }
  if (!isStart)
    return (
      <div className="homePage01">
        <Navbar mode="night" />
        <main className="mainDiv container">
          <h1>
            Swallowing Impairment <br /> Pictorial Survey
          </h1>
          <p className="description container">
            On this website you can find a survey to detect swallowing
            difficulties. The survey contains 10 items. Each item displays two
            images that represent experiences related to your ability to
            swallow. Choose the image that applies to you.
          </p>
          <button onClick={letsStarted}>start <SlArrowRight className="iconStart"/></button>
        </main>
      </div>
    );
  else {
    return (
      <BrowserRouter>
        <RoutingHeb />
      </BrowserRouter>
    );
  }
};

export default HomePage01;
