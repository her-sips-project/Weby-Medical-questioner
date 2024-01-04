import "./QuestionEightWithHebHelp.css";
import ImageQuestionEightWithHebHelp1 from "./../../../../../../Assets/Images/imagesForFemalesQuetion/Picture15.gif";
import ImageQuestionEightWithHebHelp2 from "./../../../../../../Assets/Images/imagesForFemalesQuetion/Picture16.gif";
import { Link, useNavigate } from "react-router-dom";
import store from "../../../../../../Redux/ReduxStore/Store";
import PossibilityOfNextTothetweenQuestions from "../../../../PossibilityOfNextTothetweenQuestions/PossibilityOfNextTothetweenQuestions";
import PossibilityOfBackTothetweenQuestions from "../../../../PossibilityOfBackTothetweenQuestions/PossibilityOfBackTothetweenQuestions";
import signsOfPainsStateService from "../../../../../../Services/SignsOfPainsAppStateServic/Signs-of-pains-app-state-servic";
import Navbar from "../../../../../Navbar/Navbar";
import QuestNum from "../../../../../LayoutArea/QuestNum";
import BtnsBottom from "../../../../../LayoutArea/Layout/PageBtns/BtnsBottom";
import { useLanguageNavigationToEn } from "../../../../../../Hooks/hooks";

function QuestionEightWithHebHelp(): JSX.Element {
  const navigate = useNavigate();

  const customRoutes = "/QuestionEight";
  useLanguageNavigationToEn(customRoutes);

  const signsOfPaint = { ...store.getState().PainsAppState.signsOFPain };
  const title =
    "לפניך מוצגות שתי תמונות המייצגות חוויה של כאבים בזמן בליעה. יש לבחור בתמונה הנכונה עבורך";
  function wellHappenClickHandlerOnQuestionEightWithHebHelpForFemaleImage(): void {
    if (signsOfPaint.PainWhileSwallowing === true) {
      signsOfPaint.PainWhileSwallowing = false;
      if (signsOfPaint.numberOfSignsOfPain !== undefined) {
        signsOfPaint.numberOfSignsOfPain -= 1;
      }
      signsOfPainsStateService.getSignsOfPainsState(signsOfPaint);
      navigate("/QuestionNineWithHebHelp");
    } else {
      signsOfPaint.PainWhileSwallowing = false;
      signsOfPaint.numberOfSignsOfPain = signsOfPaint.numberOfSignsOfPain;
      signsOfPainsStateService.getSignsOfPainsState(signsOfPaint);
      navigate("/QuestionNineWithHebHelp");
    }
  }
  function badlyHappenClickHandlerOnQuestionEightWithHebHelpForFemaleImage(): void {
    if (signsOfPaint.PainWhileSwallowing === true) {
      signsOfPaint.PainWhileSwallowing = true;
      if (signsOfPaint.numberOfSignsOfPain !== undefined) {
        signsOfPaint.numberOfSignsOfPain = signsOfPaint.numberOfSignsOfPain;
      }
      signsOfPainsStateService.getSignsOfPainsState(signsOfPaint);
      navigate("/QuestionNineWithHebHelp");
    } else {
      if (signsOfPaint.numberOfSignsOfPain !== undefined) {
        signsOfPaint.numberOfSignsOfPain += 1;
      }
      signsOfPaint.PainWhileSwallowing = true;
      signsOfPainsStateService.getSignsOfPainsState(signsOfPaint);
      navigate("/QuestionNineWithHebHelp");
    }
  }
  return (
    <div className="questionBody  h-100 ">
      <Navbar />
      <QuestNum currentQuestNum={8} />
      <div className="MaleOrFemalePageWithHeb  px-0 container  h-75">
        <div className="mainImgs  h-100">
          <div className="imgL w-50 m-3  h-80">
            <img
              className="mw-100  mh-100"
              src={ImageQuestionEightWithHebHelp1}
              onClick={
                badlyHappenClickHandlerOnQuestionEightWithHebHelpForFemaleImage
              }
            />
          </div>
          <div className="imgR w-50 m-3  h-80">
            <img
              className=" mw-100 mh-100 "
              src={ImageQuestionEightWithHebHelp2}
              onClick={
                wellHappenClickHandlerOnQuestionEightWithHebHelpForFemaleImage
              }
            />
          </div>
        </div>

        <div className="bottomPage">
          <BtnsBottom
            descriptions={title}
            clickBack={() => {
              navigate("/QuestionSevenWithHebHelp");
            }}
            clickNext={() => navigate("/QuestionNineWithHebHelp")}
          />
        </div>
      </div>
    </div>
  );
}

export default QuestionEightWithHebHelp;
