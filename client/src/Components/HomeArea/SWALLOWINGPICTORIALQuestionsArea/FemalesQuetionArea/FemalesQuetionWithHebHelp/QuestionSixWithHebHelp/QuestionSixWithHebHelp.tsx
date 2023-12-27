import "./QuestionSixWithHebHelp.css";
import ImageQuestionSixWithHebHelp1 from "./../../../../../../Assets/Images/imagesForFemalesQuetion/Picture11.jpg";
import ImageQuestionSixWithHebHelp2 from "./../../../../../../Assets/Images/imagesForFemalesQuetion/Picture12.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import SignsOfPain from "../../../../../../Models/SignsOfPainsModel/SignsOfPainModel/Signs-Of-Pain-Model";
import store from "../../../../../../Redux/ReduxStore/Store";
import signsOfPainsStateService from "../../../../../../Services/SignsOfPainsAppStateServic/Signs-of-pains-app-state-servic";
import PossibilityOfBackTothetweenQuestions from "./../../../../PossibilityOfBackTothetweenQuestions/PossibilityOfBackTothetweenQuestions";
import PossibilityOfNextTothetweenQuestions from "./../../../../PossibilityOfNextTothetweenQuestions/PossibilityOfNextTothetweenQuestions";
import Navbar from "../../../../../Navbar/Navbar";
import QuestNum from "../../../../../LayoutArea/QuestNum";
import BtnsBottom from "../../../../../LayoutArea/Layout/PageBtns/BtnsBottom";

function QuestionSixWithHebHelp(): JSX.Element {
  const navigate = useNavigate();
  const signsOfPaint = { ...store.getState().PainsAppState.signsOFPain };
  const title =
    "לפניך מוצגות שתי תמונות לגבי אירועים של מחנק שמתרחשים בזמן האכילה. יש לבחור בתמונה הנכונה עבורך";
  function wellHappenClickHandlerOnQuestionSixWithHebHelp(): void {
    if (signsOfPaint.ChokingDuringMeals === true) {
      signsOfPaint.ChokingDuringMeals = false;
      if (signsOfPaint.numberOfSignsOfPain !== undefined) {
        signsOfPaint.numberOfSignsOfPain -= 1;
      }
      signsOfPainsStateService.getSignsOfPainsState(signsOfPaint);
      navigate("/QuestionSevenWithHebHelp");
    } else {
      signsOfPaint.ChokingDuringMeals = false;
      signsOfPaint.numberOfSignsOfPain = signsOfPaint.numberOfSignsOfPain;
      signsOfPainsStateService.getSignsOfPainsState(signsOfPaint);
      navigate("/QuestionSevenWithHebHelp");
    }
  }
  function badlyHappenClickHandlerOnQuestionSixWithHebHelpForFemaleImage(): void {
    if (signsOfPaint.ChokingDuringMeals === true) {
      signsOfPaint.ChokingDuringMeals = true;
      if (signsOfPaint.numberOfSignsOfPain !== undefined) {
        signsOfPaint.numberOfSignsOfPain = signsOfPaint.numberOfSignsOfPain;
      }
      signsOfPainsStateService.getSignsOfPainsState(signsOfPaint);
      navigate("/QuestionSevenWithHebHelp");
    } else {
      if (signsOfPaint.numberOfSignsOfPain !== undefined) {
        signsOfPaint.numberOfSignsOfPain += 1;
      }
      signsOfPaint.ChokingDuringMeals = true;
      signsOfPainsStateService.getSignsOfPainsState(signsOfPaint);
      navigate("/QuestionSevenWithHebHelp");
    }
  }
  return (
    <div className="questionBody  h-100 ">
      <Navbar />
      <QuestNum currentQuestNum={6} />
      <div className="MaleOrFemalePageWithHeb  px-0 container  h-75">
        <div className="mainImgs  h-100">
          <div className="imgL w-50 m-3  h-80">
            <img
              className="mw-100  mh-100"
              src={ImageQuestionSixWithHebHelp1}
              onClick={
                badlyHappenClickHandlerOnQuestionSixWithHebHelpForFemaleImage
              }
            />
          </div>
          <div className="imgR w-50 m-3  h-80">
            <img
              className=" mw-100 mh-100 "
              src={ImageQuestionSixWithHebHelp2}
              onClick={wellHappenClickHandlerOnQuestionSixWithHebHelp}
            />
            <br />
          </div>
        </div>

        <div className="bottomPage">
          <BtnsBottom
            descriptions={title}
            clickBack={() => navigate("/QuestionFiveWithHebHelp")}
            clickNext={() => navigate("/QuestionSevenWithHebHelp")}
          />
        </div>
      </div>
    </div>
  );
}

export default QuestionSixWithHebHelp;
