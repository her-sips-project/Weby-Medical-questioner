import React, { useEffect, useState } from "react";
import Navbar from "../../Navbar/Navbar";
import "./HomePage01.scss";
import { BrowserRouter, Link, useNavigate } from "react-router-dom";
import { SlArrowRight } from "react-icons/sl";
import RoutingHeb from "../../LayoutArea/RoutingHeb/RoutingHeb";
import store from "../../../Redux/ReduxStore/Store";
import axios from "axios";
import signsOfPainsStateService from "../../../Services/SignsOfPainsAppStateServic/Signs-of-pains-app-state-servic";
import { PainsAppState } from "../../../Redux/SignsOfPainsAppState/signs-0f-pains-app-state";
import Main from "../../LayoutArea/Layout/Main/main";
import Routing from "../../LayoutArea/Routing/Routing";

const HomePage01 = () => {
  // const navigator = useNavigate()
  const [isStart, setIsStart] = useState(false);
  const signsOFPain = { ...store.getState().PainsAppState };
  const [language, setLanguage] = useState<string | undefined>("");

  useEffect(() => {
    const unSubscribe = signsOfPainsStateService.subscribe(
      (painsState: PainsAppState): void => {
        const { signsOFPain, arrayOfImages } = painsState;

        if (signsOFPain?.language) {
          const language = signsOFPain.language;
          setLanguage(language);
        }
      }
    );
    const allImages = async () => {
      const { data } = await axios.get(
        "http://localhost:5001/api/v1/media/getAllImgs"
      );
      return data;
    };
    const starter = async () => {
      signsOFPain.arrayOfImages = await allImages();
      signsOFPain.signsOFPain = { ...signsOFPain.signsOFPain };
      signsOfPainsStateService.getArrayOfImagesPainsState(signsOFPain as any);
    };
    starter();
  }, []);

  function letsStartedInEnglish() {
    setIsStart(!isStart);
    console.log(isStart);
  }
  function letsStartedInHebrew() {
    setIsStart(!isStart);
    console.log(isStart);
  }
  if (!isStart)
    return (
      <>
        {language == "english" ? (
          <div className="homePage01 english">
            <Navbar mode="night" />
            <main className="mainDiv container">
              <h1>
                Swallowing Impairment <br /> Pictorial Survey
              </h1>
              <p className="description container">
                On this website you can find a survey to detect swallowing
                difficulties. The survey contains 10 items. Each item displays
                two images that represent experiences related to your ability to
                swallow. Choose the image that applies to you.
              </p>
              <button onClick={letsStartedInEnglish}>
                start <SlArrowRight className="iconStart" />
              </button>
            </main>
          </div>
        ) : (
          <div className="homePage01 hebrew">
            <Navbar mode="night" />
            <main className="mainDiv container">
              <h1>
                שאלון חזותי לאיתור <br /> בעיות בליעה
              </h1>
              <p className="description container">
                באתר זה ניתן למצוא שאלון לאיתור הפרעות בליעה. השאלון מכיל 10
                שאלות. בכל שאלה מוצגות שתי תמונות המייצגות חוויה שקשורה ליכולת
                הבליעה שלך. יש לבחור בתמונה הנכונה עבורך
              </p>
              <button onClick={letsStartedInHebrew}>
                התחלה <SlArrowRight className="iconStart" />
              </button>
            </main>
          </div>
        )}
      </>
    );

  if (isStart && language == "hebrew") {
    return (
      <BrowserRouter>
        <RoutingHeb />
      </BrowserRouter>
    );
  }
  if (isStart && language == "english")
    return (
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    );
  else
    return (
      <BrowserRouter>
        <RoutingHeb />
      </BrowserRouter>
    );
};

export default HomePage01;
