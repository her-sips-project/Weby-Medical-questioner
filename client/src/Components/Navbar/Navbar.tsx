import React, { FC, useState } from "react";
import allCountry from "country-flag-icons/react/3x2";
import * as allFlags from "country-flag-icons/react/3x2";
import "./navStyle.css";
import { EnumType } from "typescript";

interface NavbarProps {
  mode?: string;
  language?: string;
}

const Navbar: FC<NavbarProps> = ({ mode, language }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [lang, setLang] = useState("english");

  const popUp = (lang: string) => {
    console.log("hi im clicked!");
    setLang(lang);
    setIsClicked(!isClicked);
  };
  const flags = [];

  return (
    <div className={`navDiv  ${!mode ? "" : "nightMode"}`}>
      {lang == "english" ? (
        <ul className="navList">
          <li>TEAM</li>
          <li>ABOUT</li>
          <li>
            <allFlags.US
              onClick={() => popUp("english")}
              style={{ width: "30px" }}
            />
          </li>
        </ul>
      ) : (
        <ul className="navList">
          <li>הצוות שלנו</li>
          <li>אודות</li>
          <li>
            <allFlags.IL
              onClick={() => popUp("hebrew")}
              style={{ width: "30px" }}
            />
          </li>
        </ul>
      )}

      {isClicked ? (
        <div className="popUpDiv">
          <allFlags.IL className="flag" onClick={() => popUp("hebrew")} />
          <allFlags.US className="flag" onClick={() => popUp("english")} />
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;
