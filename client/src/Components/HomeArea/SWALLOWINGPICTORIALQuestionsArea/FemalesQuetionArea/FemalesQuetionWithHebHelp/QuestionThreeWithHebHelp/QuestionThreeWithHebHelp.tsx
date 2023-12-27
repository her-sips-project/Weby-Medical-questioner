import "./QuestionThreeWithHebHelp.css";
import ImageQuestionThreeWithHebHelp1 from "./../../../../../../Assets/Images/imagesForFemalesQuetion/Picture5.jpg";
import ImageQuestionThreeWithHebHelp2 from "./../../../../../../Assets/Images/imagesForFemalesQuetion/Picture6.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import SignsOfPain from "../../../../../../Models/SignsOfPainsModel/SignsOfPainModel/Signs-Of-Pain-Model";
import store from "../../../../../../Redux/ReduxStore/Store";
import signsOfPainsStateService from "../../../../../../Services/SignsOfPainsAppStateServic/Signs-of-pains-app-state-servic";
import PossibilityOfBackTothetweenQuestions from "../../../../PossibilityOfBackTothetweenQuestions/PossibilityOfBackTothetweenQuestions";
import PossibilityOfNextTothetweenQuestions from "../../../../PossibilityOfNextTothetweenQuestions/PossibilityOfNextTothetweenQuestions";
import Navbar from "../../../../../Navbar/Navbar";
import QuestNum from "../../../../../LayoutArea/QuestNum";
import BtnsBottom from "../../../../../LayoutArea/Layout/PageBtns/BtnsBottom";

function QuestionThreeWithHebHelp(): JSX.Element {
  const navigate = useNavigate();
  const signsOfPaint = { ...store.getState().PainsAppState.signsOFPain };
  const title =
    " לפניך מוצגות שתי תמונות המייצגות חוויה שקשורה ליכולת שלך לבלוע כדורים . יש לבחור בתמונה הנכונה עבורך";
  function wellHappenClickHandlerOnQuestionThreeWithHebHelpForFemaleImage(): void {
    if (signsOfPaint.difficultySwallowingPills === true) {
      signsOfPaint.difficultySwallowingPills = false;
      if (signsOfPaint.numberOfSignsOfPain !== undefined) {
        signsOfPaint.numberOfSignsOfPain -= 1;
      }
      signsOfPainsStateService.getSignsOfPainsState(signsOfPaint);
      navigate("/QuestionFourWithHebHelp");
    } else {
      signsOfPaint.difficultySwallowingPills = false;
      signsOfPaint.numberOfSignsOfPain = signsOfPaint.numberOfSignsOfPain;
      signsOfPainsStateService.getSignsOfPainsState(signsOfPaint);
      navigate("/QuestionFourWithHebHelp");
    }
  }
  function badlyHappenClickHandlerOnQuestionThreeWithHebHelpForFemaleImage(): void {
    if (signsOfPaint.difficultySwallowingPills === true) {
      signsOfPaint.difficultySwallowingPills = true;
      if (signsOfPaint.numberOfSignsOfPain !== undefined) {
        signsOfPaint.numberOfSignsOfPain = signsOfPaint.numberOfSignsOfPain;
      }
      signsOfPainsStateService.getSignsOfPainsState(signsOfPaint);
      navigate("/QuestionFourWithHebHelp");
    } else {
      if (signsOfPaint.numberOfSignsOfPain !== undefined) {
        signsOfPaint.numberOfSignsOfPain += 1;
      }
      signsOfPaint.difficultySwallowingPills = true;
      signsOfPainsStateService.getSignsOfPainsState(signsOfPaint);
      navigate("/QuestionFourWithHebHelp");
    }
  }
  return (
    <div className="questionBody  h-100 ">
      <Navbar />
      <QuestNum currentQuestNum={3} />
      <div className="MaleOrFemalePageWithHeb  px-0 container  h-75">
        <div className="mainImgs  h-100">
          <div className="imgL w-50 m-3  h-80">
            <img
              className="mw-100  mh-100"
              src={ImageQuestionThreeWithHebHelp1}
              onClick={
                badlyHappenClickHandlerOnQuestionThreeWithHebHelpForFemaleImage
              }
            />
          </div>
          <div className="imgR w-50 m-3  h-80">
            <img
              className=" mw-100 mh-100 "
              src={ImageQuestionThreeWithHebHelp2}
              onClick={
                wellHappenClickHandlerOnQuestionThreeWithHebHelpForFemaleImage
              }
            />
            <br />
          </div>
        </div>

        <div className="bottomPage">
          <BtnsBottom
            descriptions={title}
            clickBack={() => navigate("/QuestionTwoWithHebHelp")}
            clickNext={() => navigate("/QuestionFourWithHebHelp")}
          />
        </div>
      </div>
    </div>
  );
}

export default QuestionThreeWithHebHelp;
