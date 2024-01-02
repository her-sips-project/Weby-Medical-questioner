import "./QuestionFour.css";
import signsOfPainsStateService from "../../../../../Services/SignsOfPainsAppStateServic/Signs-of-pains-app-state-servic";
import ImageQuestionFour1 from "./../../../../../Assets/Images/imagesForFemalesQuetion/Picture7.jpg";
import ImageQuestionFour2 from "./../../../../../Assets/Images/imagesForFemalesQuetion/Picture8.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import SignsOfPain from "../../../../../Models/SignsOfPainsModel/SignsOfPainModel/Signs-Of-Pain-Model";
import { title } from "process";
import PossibilityOfBackTothetweenQuestions from "../../../PossibilityOfBackTothetweenQuestions/PossibilityOfBackTothetweenQuestions";
import PossibilityOfNextTothetweenQuestions from "../../../PossibilityOfNextTothetweenQuestions/PossibilityOfNextTothetweenQuestions";
import store from "../../../../../Redux/ReduxStore/Store";
import useLanguageNavigationToHeb from "../../../../../Hooks/hooks";
import Navbar from "../../../../Navbar/Navbar";
import QuestNum from "../../../../LayoutArea/QuestNum";
import BtnsBottom from "../../../../LayoutArea/Layout/PageBtns/BtnsBottom";

function QuestionFour(): JSX.Element {
  const navigate = useNavigate();

  const customRoutes = "/QuestionFourWithHebHelp";
  useLanguageNavigationToHeb(customRoutes);

  const title =
    "There are two images representing experiences of coughing while eating. Choose the image that best represents your experience.";
  const signsOfPaint = { ...store.getState().PainsAppState.signsOFPain };
  function wellHappenClickHandlerOnQuestionFourFemaleImage(): void {
    if (signsOfPaint.coughingWhileEating === true) {
      signsOfPaint.coughingWhileEating = false;
      if (signsOfPaint.numberOfSignsOfPain !== undefined) {
        signsOfPaint.numberOfSignsOfPain -= 1;
      }
      signsOfPainsStateService.getSignsOfPainsState(signsOfPaint);
      navigate("/QuestionFive");
    } else {
      signsOfPaint.coughingWhileEating = false;
      signsOfPaint.numberOfSignsOfPain = signsOfPaint.numberOfSignsOfPain;
      signsOfPainsStateService.getSignsOfPainsState(signsOfPaint);
      navigate("/QuestionFive");
    }
  }
  function badlyHappenClickHandlerOnQuestionFourForFemaleImage(): void {
    if (signsOfPaint.coughingWhileEating === true) {
      signsOfPaint.coughingWhileEating = true;
      if (signsOfPaint.numberOfSignsOfPain !== undefined) {
        signsOfPaint.numberOfSignsOfPain = signsOfPaint.numberOfSignsOfPain;
      }
      signsOfPainsStateService.getSignsOfPainsState(signsOfPaint);
      navigate("/QuestionFive");
    } else {
      if (signsOfPaint.numberOfSignsOfPain !== undefined) {
        signsOfPaint.numberOfSignsOfPain += 1;
      }
      signsOfPaint.coughingWhileEating = true;
      signsOfPainsStateService.getSignsOfPainsState(signsOfPaint);
      navigate("/QuestionFive");
    }
  }
  return (
    <div className="questionBody  h-100 ">
      <Navbar />
      <QuestNum currentQuestNum={4} />
      <div className="MaleOrFemalePageWithHeb  px-0 container  h-75">
        <div className="mainImgs  h-100">
          <div className="imgL w-50 m-3  h-80">
            <img
              className="mw-100  mh-100"
              src={ImageQuestionFour1}
              onClick={badlyHappenClickHandlerOnQuestionFourForFemaleImage}
            />
          </div>
          <div className="imgR w-50 m-3  h-80">
            <img
              className=" mw-100 mh-100 "
              src={ImageQuestionFour2}
              onClick={wellHappenClickHandlerOnQuestionFourFemaleImage}
            />
            <br />
          </div>
        </div>

        <div className="bottomPage">
          <BtnsBottom
            descriptions={title}
            clickBack={() => {
              navigate("/QuestionThree");
            }}
            clickNext={() => navigate("/QuestionFive")}
          />
        </div>
      </div>
    </div>
  );
}

export default QuestionFour;
