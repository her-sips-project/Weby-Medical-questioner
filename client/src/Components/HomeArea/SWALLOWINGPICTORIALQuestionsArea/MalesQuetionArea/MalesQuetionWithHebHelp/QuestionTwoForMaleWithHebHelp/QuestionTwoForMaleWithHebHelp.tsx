import "./QuestionTwoForMaleWithHebHelp.css";
import imageQuestionTwoForMaleWithHebHelp1 from "./../../../../../../Assets/Images/imagesForMalesQuetion/Picture3.jpg";
import imageQuestionTwoForMaleWithHebHelp2 from "./../../../../../../Assets/Images/imagesForMalesQuetion/Picture4.jpg";
import { Link, useNavigate } from "react-router-dom";
import PossibilityOfNextTothetweenQuestions from "./../../../../PossibilityOfNextTothetweenQuestions/PossibilityOfNextTothetweenQuestions";
import PossibilityOfBackTothetweenQuestions from "./../../../../PossibilityOfBackTothetweenQuestions/PossibilityOfBackTothetweenQuestions";
import store from "../../../../../../Redux/ReduxStore/Store";
import signsOfPainsStateService from "../../../../../../Services/SignsOfPainsAppStateServic/Signs-of-pains-app-state-servic";
import Navbar from "../../../../../Navbar/Navbar";
import QuestNum from "../../../../../LayoutArea/QuestNum";
import BtnsBottom from "../../../../../LayoutArea/Layout/PageBtns/BtnsBottom";

function QuestionTwoForMaleWithHebHelp(): JSX.Element {
  const navigate = useNavigate();
  const signsOfPaint = { ...store.getState().PainsAppState.signsOFPain };
  const title =
    " לפניך מוצגות שתי תמונות המייצגות חוויה שקשורה ליכולת שלך לאכול מזון מוצק.  יש לבחור בתמונה הנכונה עבורך ";
  function wellHappenClickHandlerOnQuestionTwoForMaleWithHebHelpImage(): void {
    if (signsOfPaint.difficultrySwallowingSolidFood === true) {
      if (signsOfPaint.numberOfSignsOfPain !== undefined) {
        signsOfPaint.numberOfSignsOfPain -= 1;
        signsOfPaint.difficultrySwallowingSolidFood = false;
        signsOfPainsStateService.getSignsOfPainsState(signsOfPaint);
        navigate("/QuestionThreeForMaleWithHebHelp");
      }
    } else {
      signsOfPaint.difficultrySwallowingSolidFood = false;
      signsOfPaint.numberOfSignsOfPain = signsOfPaint.numberOfSignsOfPain;
      signsOfPainsStateService.getSignsOfPainsState(signsOfPaint);
      navigate("/QuestionThreeForMaleWithHebHelp");
    }
  }
  function badlyHappenClickHandlerOnQuestionTwoForMaleWithHebHelpImage(): void {
    if (signsOfPaint.difficultrySwallowingSolidFood === true) {
      signsOfPaint.difficultrySwallowingSolidFood = true;
      if (signsOfPaint.numberOfSignsOfPain !== undefined) {
        signsOfPaint.numberOfSignsOfPain = signsOfPaint.numberOfSignsOfPain;
      }
      signsOfPainsStateService.getSignsOfPainsState(signsOfPaint);
      navigate("/QuestionThreeForMaleWithHebHelp");
    } else {
      if (signsOfPaint.numberOfSignsOfPain !== undefined) {
        signsOfPaint.numberOfSignsOfPain += 1;
      }
      signsOfPaint.difficultrySwallowingSolidFood = true;
      signsOfPainsStateService.getSignsOfPainsState(signsOfPaint);
      navigate("/QuestionThreeForMaleWithHebHelp");
    }
  }
  return (
    <div className="questionBody  h-100 ">
      <Navbar />
      <QuestNum currentQuestNum={2} />
      <div className="MaleOrFemalePageWithHeb  px-0 container  h-75">
        <div className="mainImgs  h-100">
          <div className="imgL w-50 m-3 h-75">
            <img
              className="mw-100  mh-100"
              src={imageQuestionTwoForMaleWithHebHelp1}
              onClick={
                badlyHappenClickHandlerOnQuestionTwoForMaleWithHebHelpImage
              }
            />
          </div>
          <div className="imgR w-50 m-3 h-75 ">
            <img
              className=" mw-100 mh-100 "
              src={imageQuestionTwoForMaleWithHebHelp2}
              onClick={
                wellHappenClickHandlerOnQuestionTwoForMaleWithHebHelpImage
              }
            />
            <br />
          </div>
        </div>

        <div className="bottomPage">
          <BtnsBottom
            descriptions={title}
            clickBack={() => {
              navigate("/QuestionOneForMaleWithHebHelp");
            }}
            clickNext={() => navigate("/QuestionThreeForMaleWithHebHelp")}
          />
        </div>
      </div>
    </div>
  );
}

export default QuestionTwoForMaleWithHebHelp;
