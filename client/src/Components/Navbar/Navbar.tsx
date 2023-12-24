import React, { useState } from "react";
// import allCountry from "country-flag-icons/react/3x2";
import { US } from "country-flag-icons/string/3x2";

import allFlags from "country-flag-icons/react/3x2";
import "./navStyle.css";

const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false);

  const popUp = () => {
    console.log("hi im clicked!");
    setIsClicked(!isClicked);
  };
  const flags = [];

  for (const flag in allFlags) {
    console.dir(flag);
    flags.push(flag);
  }

  return (
    <div className="navDiv">
      <ul className="navList">
        <li>TEAM</li>
        <li>ABOUT</li>
        <allFlags.IL onClick={popUp} style={{ width: "30px" }} />
      </ul>

      {isClicked ? (
        <div className="popUpDiv">
          {flags.map((flag) => {
            const flagComp1 = `allFlags`+"."+`${flag}`; 
            console.log(flagComp1)
            return <{`$`} onClick={popUp} style={{ width: "30px" }} />;
          })}
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;
