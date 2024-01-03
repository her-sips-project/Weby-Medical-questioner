import React from "react";
import Navbar from "../../Navbar/Navbar";
import store from "../../../Redux/ReduxStore/Store";
import  { ReactComponent as Male} from "../../../Assets/design/male.svg";
import  { ReactComponent as Female} from "../../../Assets/design/female.svg";
import "./thankPage.scss"

const ThankPage = () => {
  const getPatient = {
    ...store.getState().PatientsAppState.patientModelAppState,
  };
  const signsOfPain = { ...store.getState().PainsAppState.signsOFPain };
  return (
    <div className="thankPageDiv thankPageDivEn   ">
      <Navbar />
      <div className="mainDiv container w-100">
        <div className="userCard box w-50">
          <div className="blueDiv">
            {getPatient.sex === 'male' ? <Male/> : <Female/>}
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
        <div className="thankDiv">
          <h1>Thank you🙏</h1>
          <p>Your test successfuly send to</p>
          <p className="mailP">{getPatient.email}</p>
          <div>
            with results :
            <div className="numPage">
              <span className="currentNum number circle">
                {signsOfPain.numberOfSignsOfPain || 0}
              </span>
              <span className="slash">/</span>
              <span className="number circle">10</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankPage;
