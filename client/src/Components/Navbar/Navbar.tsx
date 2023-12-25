import React, { useState } from "react";
import allCountry from "country-flag-icons/react/3x2";
import * as allFlags from "country-flag-icons/react/3x2";
import "./navStyle.css";

const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false);

  const popUp = () => {
    console.log("hi im clicked!");
    setIsClicked(!isClicked);
  };
  const flags = [];

  return (
    <div className="navDiv">
      <ul className="navList">
        <li>TEAM</li>
        <li>ABOUT</li>
        <li>
          <allFlags.IL onClick={popUp} style={{ width: "30px" }} />
        </li>
      </ul>

      {isClicked ? (
        <div className="popUpDiv">
          <allFlags.IL className="flag" onClick={popUp} />
          <allFlags.US className="flag" onClick={popUp} />
          <allFlags.SL className="flag" onClick={popUp} />
          <allFlags.SA className="flag" onClick={popUp} />
          <allFlags.CF className="flag" onClick={popUp} />
          <allFlags.DK className="flag" onClick={popUp} />
          {/* <allFlags.IL onClick={popUp} style={{ width: "30px" }} /> */}
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;
