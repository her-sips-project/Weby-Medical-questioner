import "./QuestionFourForMaleWithHebHelp.css";
import imageQuestionFourForMaleWithHebHelp1 from "./../../../../../../Assets/Images/imagesForMalesQuetion/Picture7.jpg";
import imageQuestionFourForMaleWithHebHelp2 from "./../../../../../../Assets/Images/imagesForMalesQuetion/Picture8.jpg";
import { Link, useNavigate } from "react-router-dom";
import PossibilityOfBackTothetweenQuestions from "./../../../../PossibilityOfBackTothetweenQuestions/PossibilityOfBackTothetweenQuestions";
import PossibilityOfNextTothetweenQuestions from "./../../../../PossibilityOfNextTothetweenQuestions/PossibilityOfNextTothetweenQuestions";
import store from "../../../../../../Redux/ReduxStore/Store";
import signsOfPainsStateService from "../../../../../../Services/SignsOfPainsAppStateServic/Signs-of-pains-app-state-servic";
import Navbar from "../../../../../Navbar/Navbar";
import QuestNum from "../../../../../LayoutArea/QuestNum";
import BtnsBottom from "../../../../../LayoutArea/Layout/PageBtns/BtnsBottom";
import { useLanguageNavigationToEn } from "../../../../../../Hooks/hooks";
function QuestionFourForMaleWithHebHelp(): JSX.Element {
  const navigate = useNavigate();

  const customRoutes = "/QuestionFourForMale";
  useLanguageNavigationToEn(customRoutes);

  const signsOfPaint = { ...store.getState().PainsAppState.signsOFPain };
  const title =
    "לפניך מוצגות שתי תמונות לגבי אירועים של שיעול שמתרחשים בזמן האכילה. יש לבחור בתמונה הנכונה עבורך ";
  function wellHappenClickHandlerOnQuestionFourForMaleWithHebHelpImage(): void {
    if (signsOfPaint.coughingWhileEating === true) {
      signsOfPaint.coughingWhileEating = false;
      if (signsOfPaint.numberOfSignsOfPain !== undefined) {
        signsOfPaint.numberOfSignsOfPain -= 1;
      }
      signsOfPainsStateService.getSignsOfPainsState(signsOfPaint);
      navigate("/QuestionFiveForMaleWithHebHelp");
    } else {
      signsOfPaint.coughingWhileEating = false;
      signsOfPaint.numberOfSignsOfPain = signsOfPaint.numberOfSignsOfPain;
      signsOfPainsStateService.getSignsOfPainsState(signsOfPaint);
      navigate("/QuestionFiveForMaleWithHebHelp");
    }
  }
  function badlyHappenClickHandlerOnQuestionFourForMaleWithHebHelpImage(): void {
    if (signsOfPaint.coughingWhileEating === true) {
      signsOfPaint.coughingWhileEating = false;
      if (signsOfPaint.numberOfSignsOfPain !== undefined) {
        signsOfPaint.numberOfSignsOfPain -= 1;
      }
      signsOfPainsStateService.getSignsOfPainsState(signsOfPaint);
      navigate("/QuestionFiveForMaleWithHebHelp");
    } else {
      signsOfPaint.coughingWhileEating = false;
      signsOfPaint.numberOfSignsOfPain = signsOfPaint.numberOfSignsOfPain;
      signsOfPainsStateService.getSignsOfPainsState(signsOfPaint);
      navigate("/QuestionFiveForMaleWithHebHelp");
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
              className={`mw-100 mh-100 ${
                typeof signsOfPaint.coughingWhileEating !== "undefined"
                  ? signsOfPaint.coughingWhileEating
                    ? "selectedImg"
                    : "noSelectedImg"
                  : ""
              }`}
              src={imageQuestionFourForMaleWithHebHelp1}
              onClick={
                badlyHappenClickHandlerOnQuestionFourForMaleWithHebHelpImage
              }
            />
          </div>
          <div className="imgR w-50 m-3  h-80">
            <img
              className={`mw-100 mh-100 ${
                typeof signsOfPaint.coughingWhileEating !== "undefined"
                  ? signsOfPaint.coughingWhileEating
                    ? "noSelectedImg"
                    : "selectedImg"
                  : ""
              }`}
              src={imageQuestionFourForMaleWithHebHelp2}
              onClick={
                wellHappenClickHandlerOnQuestionFourForMaleWithHebHelpImage
              }
            />
          </div>
        </div>

        <div className="bottomPage">
          <BtnsBottom
            descriptions={title}
            clickBack={() => {
              navigate("/QuestionThreeForMaleWithHebHelp");
            }}
            clickNext={() => navigate("/QuestionFiveForMaleWithHebHelp")}
          />
        </div>
      </div>
    </div>
  );
}

export default QuestionFourForMaleWithHebHelp;
