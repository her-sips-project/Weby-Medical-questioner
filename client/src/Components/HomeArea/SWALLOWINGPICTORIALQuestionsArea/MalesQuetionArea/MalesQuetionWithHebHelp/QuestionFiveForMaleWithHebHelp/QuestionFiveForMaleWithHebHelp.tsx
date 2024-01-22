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
import { useLanguageNavigationToEn } from "../../../../../../Hooks/hooks";

function QuestionFiveForMaleWithHebHelp(): JSX.Element {
  const navigate = useNavigate();

  const customRoutes = "/QuestionFiveForMale";
  useLanguageNavigationToEn(customRoutes);

  const signsOfPaint = { ...store.getState().PainsAppState.signsOFPain };
  const title =
    " לפניך מוצגות שתי תמונות לגבי משקל הגוף שלך. יש לבחור בתמונה הנכונה עבורך ";
  function wellHappenClickHandlerOnQuestionFiveForMaleWithHebHelpImage(): void {
    if (signsOfPaint.losingWeight === true) {
      signsOfPaint.losingWeight = false;
      if (signsOfPaint.numberOfSignsOfPain !== undefined) {
        signsOfPaint.numberOfSignsOfPain -= 1;
      }
      signsOfPainsStateService.getSignsOfPainsState(signsOfPaint);
      navigate("/QuestionSixForMaleWithHebHelp");
    } else {
      signsOfPaint.losingWeight = false;
      signsOfPaint.numberOfSignsOfPain = signsOfPaint.numberOfSignsOfPain;
      signsOfPainsStateService.getSignsOfPainsState(signsOfPaint);
      navigate("/QuestionSixForMaleWithHebHelp");
    }
  }
  function badlyHappenClickHandlerOnQuestionFiveForMaleWithHebHelpImage(): void {
    if (signsOfPaint.losingWeight === true) {
      signsOfPaint.losingWeight = true;
      if (signsOfPaint.numberOfSignsOfPain !== undefined) {
        signsOfPaint.numberOfSignsOfPain = signsOfPaint.numberOfSignsOfPain;
      }
      signsOfPainsStateService.getSignsOfPainsState(signsOfPaint);
      navigate("/QuestionSixForMaleWithHebHelp");
    } else {
      if (signsOfPaint.numberOfSignsOfPain !== undefined) {
        signsOfPaint.numberOfSignsOfPain += 1;
      }
      signsOfPaint.losingWeight = true;
      signsOfPainsStateService.getSignsOfPainsState(signsOfPaint);
      navigate("/QuestionSixForMaleWithHebHelp");
    }
  }
  return (
    <div className="questionBody  h-100 ">
      <Navbar />
      <QuestNum currentQuestNum={5} />
      <div className="MaleOrFemalePageWithHeb  px-0 container  h-75">
        <div className="mainImgs qNum5 h-100">
          <div className="imgL w-50 m-3  ">
            <img
              className={`mw-100 mh-100 ${
                typeof signsOfPaint.losingWeight !== "undefined"
                  ? signsOfPaint.losingWeight
                    ? "selectedImg"
                    : "noSelectedImg"
                  : ""
              }`}
              src={imageQuestionFiveForMaleWithHebHelp1}
              onClick={
                badlyHappenClickHandlerOnQuestionFiveForMaleWithHebHelpImage
              }
            />
          </div>
          <div className="imgR w-50 m-3  ">
            <img
              className={`mw-100 mh-100 ${
                typeof signsOfPaint.losingWeight !== "undefined"
                  ? signsOfPaint.losingWeight
                    ? "selectedImg"
                    : "noSelectedImg"
                  : ""
              }`}
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
