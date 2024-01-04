import "./QuestionSevenForMaleWithHebHelp.css";
import imageQuestionSevenForMaleWithHebHelp1 from "./../../../../../../Assets/Images/imagesForMalesQuetion/Picture13.jpg";
import imageQuestionSevenForMaleWithHebHelp2 from "./../../../../../../Assets/Images/imagesForMalesQuetion/Picture14.jpg";
import PossibilityOfBackTothetweenQuestions from "./../../../../PossibilityOfBackTothetweenQuestions/PossibilityOfBackTothetweenQuestions";
import { Link, useNavigate } from "react-router-dom";
import PossibilityOfNextTothetweenQuestions from "./../../../../PossibilityOfNextTothetweenQuestions/PossibilityOfNextTothetweenQuestions";
import { useState } from "react";
import signsOfPainsStateService from "../../../../../../Services/SignsOfPainsAppStateServic/Signs-of-pains-app-state-servic";
import SignsOfPain from "../../../../../../Models/SignsOfPainsModel/SignsOfPainModel/Signs-Of-Pain-Model";
import store from "../../../../../../Redux/ReduxStore/Store";
import Navbar from "../../../../../Navbar/Navbar";
import QuestNum from "../../../../../LayoutArea/QuestNum";
import BtnsBottom from "../../../../../LayoutArea/Layout/PageBtns/BtnsBottom";
import { useLanguageNavigationToEn } from "../../../../../../Hooks/hooks";

function QuestionSevenForMaleWithHebHelp(): JSX.Element {
  const navigate = useNavigate();
  

  const customRoutes = "/QuestionSevenForMale";
  useLanguageNavigationToEn(customRoutes);

  
  const signsOfPaint = { ...store.getState().PainsAppState.signsOFPain };
  const title =
    " לפניך מוצגות שתי תמונות המייצגות חוויה לגבי אכילה בחברת אחרים יש לבחור בתמונה הנכונה עבורך. ";
  function wellHappenClickHandlerOnQuestionSevenForMaleWithHebHelpImage(): void {
    if (signsOfPaint.AvoidingEatingWithOthers === true) {
      if (signsOfPaint.numberOfSignsOfPain !== undefined) {
        signsOfPaint.numberOfSignsOfPain -= 1;
        signsOfPaint.AvoidingEatingWithOthers = false;
        signsOfPainsStateService.getSignsOfPainsState(signsOfPaint);
        navigate("/QuestionEightForMaleWithHebHelp");
      }
    } else {
      signsOfPaint.AvoidingEatingWithOthers = false;
      signsOfPaint.numberOfSignsOfPain = signsOfPaint.numberOfSignsOfPain;
      signsOfPainsStateService.getSignsOfPainsState(signsOfPaint);
      navigate("/QuestionEightForMaleWithHebHelp");
    }
  }
  function badlyHappenClickHandlerOnQuestionSevenForMaleWithHebHelpImage(): void {
    if (signsOfPaint.AvoidingEatingWithOthers === true) {
      signsOfPaint.AvoidingEatingWithOthers = true;
      if (signsOfPaint.numberOfSignsOfPain !== undefined) {
        signsOfPaint.numberOfSignsOfPain = signsOfPaint.numberOfSignsOfPain;
      }
      signsOfPainsStateService.getSignsOfPainsState(signsOfPaint);
      navigate("/QuestionEightForMaleWithHebHelp");
    } else {
      if (signsOfPaint.numberOfSignsOfPain !== undefined) {
        signsOfPaint.numberOfSignsOfPain += 1;
      }
      signsOfPaint.AvoidingEatingWithOthers = true;
      signsOfPainsStateService.getSignsOfPainsState(signsOfPaint);
      navigate("/QuestionEightForMaleWithHebHelp");
    }
  }
  return (
    <div className="questionBody  h-100 ">
      <Navbar />
      <QuestNum currentQuestNum={7} />
      <div className="MaleOrFemalePageWithHeb  px-0 container  h-75">
        <div className="mainImgs  h-100">
          <div className="imgL w-50 m-3  h-80">
            <img
              className="mw-100  mh-100"
              src={imageQuestionSevenForMaleWithHebHelp1}
              onClick={
                badlyHappenClickHandlerOnQuestionSevenForMaleWithHebHelpImage
              }
            />
          </div>
          <div className="imgR w-50 m-3  h-80">
            <img
              className=" mw-100 mh-100 "
              src={imageQuestionSevenForMaleWithHebHelp2}
              onClick={
                wellHappenClickHandlerOnQuestionSevenForMaleWithHebHelpImage
              }
            />
            <br />
          </div>
        </div>

        <div className="bottomPage">
          <BtnsBottom
            descriptions={title}
            clickBack={() => {
              navigate("/QuestionSixForMaleWithHebHelp");
            }}
            clickNext={() => navigate("/QuestionEightForMaleWithHebHelp")}
          />
        </div>
      </div>
    </div>
  );
}

export default QuestionSevenForMaleWithHebHelp;
