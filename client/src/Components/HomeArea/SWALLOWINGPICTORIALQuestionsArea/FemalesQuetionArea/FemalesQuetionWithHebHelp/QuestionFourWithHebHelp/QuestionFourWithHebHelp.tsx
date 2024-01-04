import "./QuestionFourWithHebHelp.css";
import ImageQuestionFourWithHebHelp1 from "./../../../../../../Assets/Images/imagesForFemalesQuetion/Picture7.jpg";
import ImageQuestionFourWithHebHelp2 from "./../../../../../../Assets/Images/imagesForFemalesQuetion/Picture8.jpg";
import { Link, useNavigate } from "react-router-dom";
import store from "../../../../../../Redux/ReduxStore/Store";
import PossibilityOfBackTothetweenQuestions from "../../../../PossibilityOfBackTothetweenQuestions/PossibilityOfBackTothetweenQuestions";
import PossibilityOfNextTothetweenQuestions from "./../../../../PossibilityOfNextTothetweenQuestions/PossibilityOfNextTothetweenQuestions";
import signsOfPainsStateService from "../../../../../../Services/SignsOfPainsAppStateServic/Signs-of-pains-app-state-servic";
import Navbar from "../../../../../Navbar/Navbar";
import QuestNum from "../../../../../LayoutArea/QuestNum";
import BtnsBottom from "../../../../../LayoutArea/Layout/PageBtns/BtnsBottom";
import { useLanguageNavigationToEn } from "../../../../../../Hooks/hooks";

function QuestionFourWithHebHelp(): JSX.Element {
  const navigate = useNavigate();

  const customRoutes = "/QuestionFour";
  useLanguageNavigationToEn(customRoutes);


  const signsOfPaint = { ...store.getState().PainsAppState.signsOFPain };
  const title =
    " לפניך מוצגות שתי תמונות לגבי אירועים של שיעול שמתרחשים בזמן האכילה. יש לבחור בתמונה הנכונה עבורך ";
  function wellHappenClickHandlerOnQuestionFourWithHebHelpForFemaleImage(): void {
    if (signsOfPaint.coughingWhileEating === true) {
      signsOfPaint.coughingWhileEating = false;
      if (signsOfPaint.numberOfSignsOfPain !== undefined) {
        signsOfPaint.numberOfSignsOfPain -= 1;
      }
      signsOfPainsStateService.getSignsOfPainsState(signsOfPaint);
      navigate("/QuestionFiveWithHebHelp");
    } else {
      signsOfPaint.coughingWhileEating = false;
      signsOfPaint.numberOfSignsOfPain = signsOfPaint.numberOfSignsOfPain;
      signsOfPainsStateService.getSignsOfPainsState(signsOfPaint);
      navigate("/QuestionFiveWithHebHelp");
    }
  }
  function badlyHappenClickHandlerOnQuestionFourWithHebHelpForFemaleImage(): void {
    if (signsOfPaint.coughingWhileEating === true) {
      signsOfPaint.coughingWhileEating = true;
      if (signsOfPaint.numberOfSignsOfPain !== undefined) {
        signsOfPaint.numberOfSignsOfPain = signsOfPaint.numberOfSignsOfPain;
      }
      signsOfPainsStateService.getSignsOfPainsState(signsOfPaint);
      navigate("/QuestionFiveWithHebHelp");
    } else {
      if (signsOfPaint.numberOfSignsOfPain !== undefined) {
        signsOfPaint.numberOfSignsOfPain += 1;
      }
      signsOfPaint.coughingWhileEating = true;
      signsOfPainsStateService.getSignsOfPainsState(signsOfPaint);
      navigate("/QuestionFiveWithHebHelp");
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
              src={ImageQuestionFourWithHebHelp1}
              onClick={
                badlyHappenClickHandlerOnQuestionFourWithHebHelpForFemaleImage
              }
            />
          </div>
          <div className="imgR w-50 m-3  h-80">
            <img
              className=" mw-100 mh-100 "
              src={ImageQuestionFourWithHebHelp2}
              onClick={
                wellHappenClickHandlerOnQuestionFourWithHebHelpForFemaleImage
              }
            />
            <br />
          </div>
        </div>

        <div className="bottomPage">
          <BtnsBottom
            descriptions={title}
            clickBack={() => navigate("/QuestionThreeWithHebHelp")}
            clickNext={() => navigate("/QuestionFiveWithHebHelp")}
          />
        </div>
      </div>
    </div>
  );
}

export default QuestionFourWithHebHelp;
