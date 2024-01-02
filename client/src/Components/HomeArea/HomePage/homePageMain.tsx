import { useEffect, useState } from "react";
// import "./HomePageCopy.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";
import { SlArrowRight } from "react-icons/sl";
interface HomePageCopyHebProps{
  lang?:string;
}
function HomePageMain(langProp:HomePageCopyHebProps): JSX.Element {
  const navigate = useNavigate();
  function getEnglishWayClickHandler(): void {
    navigate("/MaleOrFemalePage")
  }
  function getHebeWayClickHandler(): void {
    navigate("/male-or-femalePageWithHeb");
  }
  const[language,setLanguage]=useState<string>();
  useEffect(()=>{
    setLanguage(langProp.lang);
  },[langProp])//Or if it is not work change to this==>[langProp.lang]
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
                <button onClick={getEnglishWayClickHandler}>
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
                <button onClick={getHebeWayClickHandler}>
                  התחלה <SlArrowRight className="iconStart" />
                </button>
              </main>
            </div>
          )}
        </>
      );
  return (
    <div className="HomePageMain">
      {language =="English" ? (<div className="B">
          <p className="P2 Box">
            On this website you can find a survey to detect swallowing
            difficulties. The survey contains 10 items. Each item displays two
            images that represent experiences related to your ability to
            swallow. Choose the image that applies to you.
          </p>
          <button
            className="ButtonINMain Box"
            onClick={getEnglishWayClickHandler}
          >
            {" "}
            START{" "}
          </button>
        </div>):(
           <div className="A">
           <p className="p1 Box ">
             באתר זה ניתן למצוא שאלון לאיתור הפרעות בליעה. השאלון מכיל 10 שאלות.
             בכל שאלה מוצגות שתי תמונות המייצגות חוויה שקשורה ליכולת הבליעה שלך.
             יש לבחור בתמונה הנכונה עבורך
           </p>
           <button className="ButtonINMain Box" onClick={getHebeWayClickHandler}>
            {" "}
            התחלה{" "}
          </button>
         </div>
        )}
    </div>
  );
}

export default HomePageMain;
