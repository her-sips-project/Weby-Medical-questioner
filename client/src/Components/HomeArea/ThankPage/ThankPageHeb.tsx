import React, { useEffect, useState } from "react";
import Navbar from "../../Navbar/Navbar";
import store from "../../../Redux/ReduxStore/Store";
import { ReactComponent as Male } from "../../../Assets/design/male.svg";
import { ReactComponent as Female } from "../../../Assets/design/female.svg";
import { ReactComponent as ThankSvg } from "../../../Assets/design/noun-thank-you-4559619 1.svg";
import { ReactComponent as ThankSvgWhite } from "../../../Assets/design/noun-thank-you-white.svg";
import "./thankPage.scss";
import signsOfPainsStateService from "../../../Services/SignsOfPainsAppStateServic/Signs-of-pains-app-state-servic";
import { PatientsModelAppState } from "../../../Redux/PatientsModelAppState/PatientsModel-AppState";
import { useLanguageNavigationToEn } from "../../../Hooks/hooks";

const ThankPageHeb = () => {
  const [isMobile, setIsMobile] = useState(false);

  
  const customRoutes = "/Thank";
  useLanguageNavigationToEn(customRoutes);


  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 580);
      console.log(isMobile); // Set a breakpoint for mobile size
    };

    checkScreenSize(); // Initial check

    window.addEventListener("resize", checkScreenSize); // Listen for window resize

    return () => {
      window.removeEventListener("resize", checkScreenSize); // Clean up on unmount
    };
  }, []);

  let getPatient = {
    ...store.getState().PatientsAppState.patientModelAppState,
  };
  useEffect(() => {
    const unSubscribe = signsOfPainsStateService.subscribeForPatient(
      (patientState: PatientsModelAppState): void => {
        getPatient.sex = patientState.patientModelAppState?.sex;
        getPatient.firstName = patientState.patientModelAppState?.firstName;
        getPatient.lastName = patientState.patientModelAppState?.lastName;
        getPatient.age = patientState.patientModelAppState?.age;
        getPatient.country = patientState.patientModelAppState?.country;
        getPatient.email = patientState.patientModelAppState?.email;
      }
    );
  });
  console.log(getPatient.email);
  const signsOfPain = { ...store.getState().PainsAppState.signsOFPain };
  return (
    <div dir="rtl" className="thankPageDiv thankPageDivHeb h-100  ">
      <Navbar />
      {!isMobile ? (
        <div className="mainDiv container w-100 h-75">
          <div className="userCard  h-100 ">
            <div className="blueDiv w-100 h-50">
              {getPatient.sex === "male" ? <Male /> : <Female />}
            </div>
            <div className="userInfo">
              <p>
                שם:<b>{getPatient.firstName}</b>
              </p>
              <p>
                שם משפחה:<b>{getPatient.lastName}</b>
              </p>
              <p>
                מין:<b>{getPatient.sex}</b>
              </p>
              <p>
                גיך:<b>{getPatient.age}</b>
              </p>
              <p>
                מדינה:<b>{getPatient.country}</b>
              </p>
            </div>
          </div>
          <div className="thankDiv w-50 h-100">
            <div className="thankMain">
              <h1>
               תודה לך <ThankSvg />
              </h1>

              <p>המבדק שלך נשלח בהצלחה למייל:</p>
              <br />
              <p className="mailP">{getPatient.email}</p>
              <div>
               עם התוצאות :
                <div className="numPage">
                  <span className="currentNum number circle">
                    {signsOfPain.numberOfSignsOfPain || 0}
                  </span>
                  <span className="slash number">/</span>
                  <span className="number circle">10</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="mainDiv container ">
          <div className="userCard ">
            <div className="blueDiv">
              <div className="thankMain">
                <h1>
                  תודה לך <ThankSvgWhite />
                </h1>
                <p>המבדק שלך נשלח בהצלחה למייל:</p>
                <br />
                <p className="mailP">{getPatient.email}</p>
                <div>
                  עם התוצאות :
                  <div className="numPage">
                    <span className="currentNum number circle">
                      {signsOfPain.numberOfSignsOfPain || 0}
                    </span>
                    <span className="slash number">/</span>
                    <span className="number circle">10</span>
                  </div>
                </div>
              </div>
              {getPatient.sex === "male" ? (
                <Male className="personSvg" />
              ) : (
                <Female className="personSvg" />
              )}
            </div>
            <div className="userInfo">
              <p>
                שם:<b>{getPatient.firstName}</b>
              </p>
              <p>
               שם משפחה:<b>{getPatient.lastName}</b>
              </p>
              <p>
                מין:<b>{getPatient.sex}</b>
              </p>
              <p>
                גיל:<b>{getPatient.age}</b>
              </p>
              <p>
                מדינה:<b>{getPatient.country}</b>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ThankPageHeb;
