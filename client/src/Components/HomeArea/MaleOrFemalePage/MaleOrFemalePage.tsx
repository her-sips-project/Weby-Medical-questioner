import "./MaleOrFemalePage.css";
import female from "./../../../Assets/Images/MaleOrFemale/Female/Picture2.gif";
import Male from "./../../../Assets/Images/MaleOrFemale/Male/Picture.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import signsOfPainsStateService from "./../../../Services/SignsOfPainsAppStateServic/Signs-of-pains-app-state-servic";
import Patient from "./../../../Models/PatientsModel/PatientModel/Patient-model";
import store from "../../../Redux/ReduxStore/Store";
import useLanguageNavigationToHeb from "../../../Hooks/hooks";
import Navbar from "../../Navbar/Navbar";
import QuestNum from "../../LayoutArea/QuestNum";
import BtnsBottom from "../../LayoutArea/Layout/PageBtns/BtnsBottom";
function MaleOrFemalePage(): JSX.Element {
  const signsOfPaint = { ...store.getState().PainsAppState.signsOFPain };
  const navigate = useNavigate();
  const customRoutes = "/male-or-femalePageWithHeb";
  useLanguageNavigationToHeb(customRoutes);

  const title =
    "There are two images represeting genders Choose the gender that represents you.";

  function clickHandlerOnFemaleImage(): void {
    signsOfPaint.sex = "female";
    signsOfPainsStateService.getSignsOfPainsState(signsOfPaint);
    navigate("/question-one-for-female");
  }
  function clickHandlerOnMaleImage(): void {
    signsOfPaint.sex = "Male";
    signsOfPainsStateService.getSignsOfPainsState(signsOfPaint);
    navigate("/question-one-for-Male");
  }

  return (
    <div className="questionBody  h-100 ">
      <Navbar />
      <QuestNum currentQuestNum={0} />
      <div className="MaleOrFemalePageWithHeb  px-0 container  h-75">
        <div className="mainImgs  h-100">
          <div className="imgL w-50 m-3  h-80">
            <img
              className="mw-100  mh-100"
              src={Male}
              onClick={clickHandlerOnMaleImage}
            />
          </div>
          <div className="imgR w-50 m-3  h-80">
            <img
              className=" mw-100 mh-100 "
              src={female}
              onClick={clickHandlerOnFemaleImage}
            />
            <br />
          </div>
        </div>

        <div className="bottomPage">
          <BtnsBottom
            descriptions={title}
            clickBack={() => {
              navigate("/MaleOrFemalePageWithHeb");
            }}
            clickNext={() => navigate("/QuestionTwoWithHebHelp")}
            nextBtn={false}
          />
        </div>
      </div>
    </div>
  );

}

export default MaleOrFemalePage;
