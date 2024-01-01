import "./QuestionThreeForMaleWithHebHelp.css";
import imageQuestionThreeForMaleWithHebHelp1 from "./../../../../../../Assets/Images/imagesForMalesQuetion/Picture5.jpg";
import imageQuestionThreeForMaleWithHebHelp2 from "./../../../../../../Assets/Images/imagesForMalesQuetion/Picture6.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import SignsOfPain from "../../../../../../Models/SignsOfPainsModel/SignsOfPainModel/Signs-Of-Pain-Model";
import signsOfPainsStateService from "../../../../../../Services/SignsOfPainsAppStateServic/Signs-of-pains-app-state-servic";
import PossibilityOfBackTothetweenQuestions from "./../../../../PossibilityOfBackTothetweenQuestions/PossibilityOfBackTothetweenQuestions";
import PossibilityOfNextTothetweenQuestions from "../../../../PossibilityOfNextTothetweenQuestions/PossibilityOfNextTothetweenQuestions";
import store from "../../../../../../Redux/ReduxStore/Store";
import Navbar from "../../../../../Navbar/Navbar";
import QuestNum from "../../../../../LayoutArea/QuestNum";
import BtnsBottom from "../../../../../LayoutArea/Layout/PageBtns/BtnsBottom";

function QuestionThreeForMaleWithHebHelp(): JSX.Element {
  const navigate = useNavigate();
  const signsOfPaint = { ...store.getState().PainsAppState.signsOFPain };
  const title =
    "לפניך מוצגות שתי תמונות המייצגות חוויה שקשורה ליכולת שלך לבלוע כדורים. יש לבחור בתמונה הנכונה עבורך ";
  function wellHappenClickHandlerOnQuestionThreeForMaleWithHebHelpImage(): void {
    if (signsOfPaint.difficultySwallowingPills === true) {
      signsOfPaint.difficultySwallowingPills = false;
      if (signsOfPaint.numberOfSignsOfPain !== undefined) {
        signsOfPaint.numberOfSignsOfPain -= 1;
      }
      signsOfPainsStateService.getSignsOfPainsState(signsOfPaint);
      navigate("/QuestionFourForMaleWithHebHelp");
    } else {
      signsOfPaint.difficultySwallowingPills = false;
      signsOfPaint.numberOfSignsOfPain = signsOfPaint.numberOfSignsOfPain;
      signsOfPainsStateService.getSignsOfPainsState(signsOfPaint);
      navigate("/QuestionFourForMaleWithHebHelp");
    }
  }
  function badlyHappenClickHandlerOnQuestionThreeForMaleWithHebHelpImage(): void {
    if (signsOfPaint.difficultySwallowingPills === true) {
      signsOfPaint.difficultySwallowingPills = true;
      if (signsOfPaint.numberOfSignsOfPain !== undefined) {
        signsOfPaint.numberOfSignsOfPain = signsOfPaint.numberOfSignsOfPain;
      }
      signsOfPainsStateService.getSignsOfPainsState(signsOfPaint);
      navigate("/QuestionFourForMaleWithHebHelp");
    } else {
      if (signsOfPaint.numberOfSignsOfPain !== undefined) {
        signsOfPaint.numberOfSignsOfPain += 1;
      }
      signsOfPaint.difficultySwallowingPills = true;
      signsOfPainsStateService.getSignsOfPainsState(signsOfPaint);
      navigate("/QuestionFourForMaleWithHebHelp");
    }
  }
  return (
    <div className="questionBody  h-100 ">
      <Navbar />
      <QuestNum currentQuestNum={3} />
      <div className="MaleOrFemalePageWithHeb  px-0 container  h-75">
        <div className="mainImgs  h-100">
          <div className="imgL w-50 m-3 ">
            <img
              className="mw-100  mh-100"
              src={imageQuestionThreeForMaleWithHebHelp1}
              onClick={
                badlyHappenClickHandlerOnQuestionThreeForMaleWithHebHelpImage
              }
            />
          </div>
          <div className="imgR w-50 m-3 ">
            <img
              className=" mw-100 mh-100 "
              src={imageQuestionThreeForMaleWithHebHelp2}
              onClick={
                wellHappenClickHandlerOnQuestionThreeForMaleWithHebHelpImage
              }
            />
            <br />
          </div>
        </div>

        <div className="bottomPage">
          <BtnsBottom
            descriptions={title}
            clickBack={() => {
              navigate("/QuestionTwoForMaleWithHebHelp");
            }}
            clickNext={() => navigate("/QuestionFourForMaleWithHebHelp")}
          />
        </div>
      </div>
    </div>
  );
}

export default QuestionThreeForMaleWithHebHelp;
