import React, { useEffect } from "react";
import Navbar from "../../Navbar/Navbar";
import store from "../../../Redux/ReduxStore/Store";
import { ReactComponent as Male } from "../../../Assets/design/male.svg";
import { ReactComponent as Female } from "../../../Assets/design/female.svg";
import { ReactComponent as ThankSvg } from "../../../Assets/design/noun-thank-you-4559619 1.svg";

import "./thankPage.scss";
import signsOfPainsStateService from "../../../Services/SignsOfPainsAppStateServic/Signs-of-pains-app-state-servic";
import { PatientsModelAppState } from "../../../Redux/PatientsModelAppState/PatientsModel-AppState";

const ThankPage = () => {
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
    <div className="thankPageDiv thankPageDivEn h-100  ">
      <Navbar />
      <div className="mainDiv container w-100 h-75">
        <div className="userCard  h-100 ">
          <div className="blueDiv w-100 h-50">
            {getPatient.sex === "male" ? <Male /> : <Female />}
          </div>
          <div className="userInfo">
            <p>
              Firs name:<b>{getPatient.firstName}</b>
            </p>
            <p>
              Last Name:<b>{getPatient.lastName}</b>
            </p>
            <p>
              Gender:<b>{getPatient.sex}</b>
            </p>
            <p>
              Age:<b>{getPatient.age}</b>
            </p>
            <p>
              Country:<b>{getPatient.country}</b>
            </p>
          </div>
        </div>
        <div className="thankDiv w-50 h-100">
          <div className="thankMain">
            <h1>
              Thank you <ThankSvg />
            </h1>

            <p>Your test successfuly send to</p>
            <br />
            <p className="mailP">{getPatient.email}</p>
            <div>
              with results :
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
    </div>
  );
};

export default ThankPage;
