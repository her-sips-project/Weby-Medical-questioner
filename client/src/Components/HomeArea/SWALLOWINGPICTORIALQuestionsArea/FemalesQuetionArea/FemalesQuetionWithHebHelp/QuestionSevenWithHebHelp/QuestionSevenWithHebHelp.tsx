import "./QuestionSevenWithHebHelp.css";
import ImageQuestionSevenWithHebHelp1 from "./../../../../../../Assets/Images/imagesForFemalesQuetion/Picture13.jpg";
import ImageQuestionSevenWithHebHelp2 from "./../../../../../../Assets/Images/imagesForFemalesQuetion/Picture14.jpg";
import { Link, useNavigate } from "react-router-dom";
import PossibilityOfBackTothetweenQuestions from "../../../../PossibilityOfBackTothetweenQuestions/PossibilityOfBackTothetweenQuestions";
import PossibilityOfNextTothetweenQuestions from "./../../../../PossibilityOfNextTothetweenQuestions/PossibilityOfNextTothetweenQuestions";
import store from "../../../../../../Redux/ReduxStore/Store";
import signsOfPainsStateService from "../../../../../../Services/SignsOfPainsAppStateServic/Signs-of-pains-app-state-servic";
import Navbar from "../../../../../Navbar/Navbar";
import QuestNum from "../../../../../LayoutArea/QuestNum";
import BtnsBottom from "../../../../../LayoutArea/Layout/PageBtns/BtnsBottom";
import { useLanguageNavigationToEn } from "../../../../../../Hooks/hooks";
function QuestionSevenWithHebHelp(): JSX.Element {
  const navigate = useNavigate();

  const customRoutes = "/QuestionSevent";
  useLanguageNavigationToEn(customRoutes);

  const signsOfPaint = { ...store.getState().PainsAppState.signsOFPain };
  const title =
    " לפניך מוצגות שתי תמונות המייצגות חוויה לגבי אכילה בחברת אחרים.  יש לבחור בתמונה הנכונה עבורך";
  function wellHappenClickHandlerOnQuestionSevenWithHebHelpForFemaleImage(): void {
    if (signsOfPaint.AvoidingEatingWithOthers === true) {
      if (signsOfPaint.numberOfSignsOfPain !== undefined) {
        signsOfPaint.numberOfSignsOfPain -= 1;
        signsOfPaint.AvoidingEatingWithOthers = false;
        signsOfPainsStateService.getSignsOfPainsState(signsOfPaint);
        navigate("/QuestionEightWithHebHelp");
      }
    } else {
      signsOfPaint.AvoidingEatingWithOthers = false;
      signsOfPaint.numberOfSignsOfPain = signsOfPaint.numberOfSignsOfPain;
      signsOfPainsStateService.getSignsOfPainsState(signsOfPaint);
      navigate("/QuestionEightWithHebHelp");
    }
  }
  function badlyHappenClickHandlerOnQuestionSevenWithHebHelpForFemaleImage(): void {
    if (signsOfPaint.AvoidingEatingWithOthers === true) {
      signsOfPaint.AvoidingEatingWithOthers = true;
      if (signsOfPaint.numberOfSignsOfPain !== undefined) {
        signsOfPaint.numberOfSignsOfPain = signsOfPaint.numberOfSignsOfPain;
      }
      signsOfPainsStateService.getSignsOfPainsState(signsOfPaint);
      navigate("/QuestionEightWithHebHelp");
    } else {
      if (signsOfPaint.numberOfSignsOfPain !== undefined) {
        signsOfPaint.numberOfSignsOfPain += 1;
      }
      signsOfPaint.AvoidingEatingWithOthers = true;
      signsOfPainsStateService.getSignsOfPainsState(signsOfPaint);
      navigate("/QuestionEightWithHebHelp");
    }
  }
  return (
    <div className="questionBody  h-100 ">
      <Navbar />
      <QuestNum currentQuestNum={7} />
      <div className="MaleOrFemalePageWithHeb  px-0 container  h-75">
        <div className="mainImgs qNum7 h-100">
          <div className="imgL w-50 m-3  h-80">
            <img
              className={`mw-100 mh-100 ${
                typeof signsOfPaint.AvoidingEatingWithOthers !== "undefined"
                  ? signsOfPaint.AvoidingEatingWithOthers
                    ? "selectedImg"
                    : "noSelectedImg"
                  : ""
              }`}
              src={ImageQuestionSevenWithHebHelp1}
              onClick={
                badlyHappenClickHandlerOnQuestionSevenWithHebHelpForFemaleImage
              }
            />
          </div>
          <div className="imgR w-50 m-3  h-80">
            <img
              className={`mw-100 mh-100 ${
                typeof signsOfPaint.AvoidingEatingWithOthers !== "undefined"
                  ? signsOfPaint.AvoidingEatingWithOthers
                    ? "noSelectedImg"
                    : "selectedImg"
                  : ""
              }`}
              src={ImageQuestionSevenWithHebHelp2}
              onClick={
                wellHappenClickHandlerOnQuestionSevenWithHebHelpForFemaleImage
              }
            />
            <br />
          </div>
        </div>

        <div className="bottomPage">
          <BtnsBottom
            descriptions={title}
            clickBack={() => navigate("/QuestionSixWithHebHelp")}
            clickNext={() => navigate("/QuestionEightWithHebHelp")}
          />
        </div>
      </div>
    </div>
  );
}

export default QuestionSevenWithHebHelp;
