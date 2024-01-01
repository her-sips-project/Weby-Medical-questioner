import "./QuestionFiveForMaleWithHebHelp.css";
import imageQuestionFiveForMaleWithHebHelp1 from "./../../../../../../Assets/Images/imagesForMalesQuetion/Picture9.jpg";
import imageQuestionFiveForMaleWithHebHelp2 from "./../../../../../../Assets/Images/imagesForMalesQuetion/Picture10.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import SignsOfPain from "../../../../../../Models/SignsOfPainsModel/SignsOfPainModel/Signs-Of-Pain-Model";
import signsOfPainsStateService from "../../../../../../Services/SignsOfPainsAppStateServic/Signs-of-pains-app-state-servic";
import PossibilityOfBackTothetweenQuestions from "./../../../../PossibilityOfBackTothetweenQuestions/PossibilityOfBackTothetweenQuestions";
import PossibilityOfNextTothetweenQuestions from "./../../../../PossibilityOfNextTothetweenQuestions/PossibilityOfNextTothetweenQuestions";
import store from "../../../../../../Redux/ReduxStore/Store";
import QuestNum from "../../../../../LayoutArea/QuestNum";
import BtnsBottom from "../../../../../LayoutArea/Layout/PageBtns/BtnsBottom";
import Navbar from "../../../../../Navbar/Navbar";

function QuestionFiveForMaleWithHebHelp(): JSX.Element {
  const navigate = useNavigate();
  const signsOfPaint = { ...store.getState().PainsAppState.signsOFPain };
  const title =
    " לפניך מוצגות שתי תמונות לגבי משקל הגוף שלך. יש לבחור בתמונה הנכונה עבורך ";
  function wellHappenClickHandlerOnQuestionFiveForMaleWithHebHelpImage(): void {
    navigate("/QuestionSixForMaleWithHebHelp");
  }
  function badlyHappenClickHandlerOnQuestionFiveForMaleWithHebHelpImage(): void {
    navigate("/QuestionSixForMaleWithHebHelp");
  }
  return (
    <div className="questionBody  h-100 ">
      <Navbar/>
      <QuestNum currentQuestNum={5} />
      <div className="MaleOrFemalePageWithHeb  px-0 container  h-75">
        <div className="mainImgs  h-100">
          <div className="imgL w-50 m-3  ">
            <img
              className="mw-100  mh-100"
              src={imageQuestionFiveForMaleWithHebHelp1}
              onClick={
                badlyHappenClickHandlerOnQuestionFiveForMaleWithHebHelpImage
              }
            />
          </div>
          <div className="imgR w-50 m-3  ">
            <img
              className=" mw-100 mh-100 "
              src={imageQuestionFiveForMaleWithHebHelp2}
              onClick={
                wellHappenClickHandlerOnQuestionFiveForMaleWithHebHelpImage
              }
            />
          </div>
        </div>

        <div className="bottomPage">
          <BtnsBottom
            descriptions={title}
            clickBack={() => {
              navigate("/QuestionFourForMaleWithHebHelp");
            }}
            clickNext={() => navigate("/QuestionSixForMaleWithHebHelp")}
          />
        </div>
      </div>
    </div>
  );
}

export default QuestionFiveForMaleWithHebHelp;
