import * as allFlags from "country-flag-icons/react/3x2";
import { FC, useEffect, useState } from "react";
import SignsOfPain from "../../Models/SignsOfPainsModel/SignsOfPainModel/Signs-Of-Pain-Model";
import store from "../../Redux/ReduxStore/Store";
import { addPainAction } from "../../Redux/SignsOfPainsAppState/signs-0f-pains-app-state";
import signsOfPainsStateService from "../../Services/SignsOfPainsAppStateServic/Signs-of-pains-app-state-servic";
import "./navStyle.css";
import About from "../LayoutArea/About/About";
import OurTeem from "../LayoutArea/OurTeem/OurTeem";
interface NavbarProps {
  mode?: string;
  language?: string;
}
const Navbar: FC<NavbarProps> = ({ mode, language }) => {
  const [isClicked, setIsClicked] = useState(false);
  const langStore = { ...store.getState().PainsAppState.signsOFPain };
  const [lang, setLang] = useState(langStore.language);
  const signsOFPain = { ...store.getState().PainsAppState };
  const popUp = (lang: string) => {
    langStore.language = lang;
    store.dispatch(addPainAction(langStore));
    signsOfPainsStateService.getSignsOfPainsState(langStore);
    setLang(lang);
    setIsClicked(!isClicked);
  };

  useEffect(() => {
    if (!langStore.language) {
      setLang("english");
      langStore.language = lang;
      store.dispatch(addPainAction(langStore));
    } else {
      console.log("else status");
      setLang(langStore.language);
      langStore.language = lang;
      store.dispatch(addPainAction(langStore));
      signsOfPainsStateService.getSignsOfPainsState(langStore);
    }
  }, [lang]);
  return (
    <div className={`navDiv  ${!mode ? "" : "nightMode"}`}>
      {lang === "english" ? (
        <ul className="navList">
          <li>
            <OurTeem />
          </li>
          <li>
            <About />
          </li>
          <li>
            <allFlags.US
              onClick={() => popUp("english")}
              style={{ width: "30px" }}
            />
          </li>
        </ul>
      ) : (
        <ul className="navList">
          <li>
            <OurTeem />
          </li>
          <li>
            <About />
          </li>
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
