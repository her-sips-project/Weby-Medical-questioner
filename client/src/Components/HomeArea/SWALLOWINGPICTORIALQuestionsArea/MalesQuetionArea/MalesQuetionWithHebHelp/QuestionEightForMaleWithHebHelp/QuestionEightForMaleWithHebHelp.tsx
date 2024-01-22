import "./QuestionEightForMaleWithHebHelp.css";
import imageQuestionEightForMaleWithHebHelp1 from "./../../../../../../Assets/Images/imagesForMalesQuetion/Picture15.gif";
import imageQuestionEightForMaleWithHebHelp2 from "./../../../../../../Assets/Images/imagesForMalesQuetion/Picture16.gif";
import { Link, useNavigate } from "react-router-dom";
import PossibilityOfBackTothetweenQuestions from "../../../../PossibilityOfBackTothetweenQuestions/PossibilityOfBackTothetweenQuestions";
import PossibilityOfNextTothetweenQuestions from "./../../../../PossibilityOfNextTothetweenQuestions/PossibilityOfNextTothetweenQuestions";
import store from "../../../../../../Redux/ReduxStore/Store";
import signsOfPainsStateService from "../../../../../../Services/SignsOfPainsAppStateServic/Signs-of-pains-app-state-servic";
import QuestNum from "../../../../../LayoutArea/QuestNum";
import BtnsBottom from "../../../../../LayoutArea/Layout/PageBtns/BtnsBottom";
import Navbar from "../../../../../Navbar/Navbar";
import { useLanguageNavigationToEn } from "../../../../../../Hooks/hooks";

function QuestionEightForMaleWithHebHelp(): JSX.Element {
  const customRoutes = "/QuestionEightForMale";
  useLanguageNavigationToEn(customRoutes);

  const navigate = useNavigate();
  const signsOfPaint = { ...store.getState().PainsAppState.signsOFPain };
  const title =
    "לפניך מוצגות שתי תמונות המייצגות חוויה של כאבים בזמן בליעה יש לבחור בתמונה הנכונה עבורך. ";
  function wellHappenClickHandlerOnQuestionEightForMaleWithHebHelpImage(): void {
    if (signsOfPaint.PainWhileSwallowing === true) {
      signsOfPaint.PainWhileSwallowing = false;
      if (signsOfPaint.numberOfSignsOfPain !== undefined) {
        signsOfPaint.numberOfSignsOfPain -= 1;
      }
      signsOfPainsStateService.getSignsOfPainsState(signsOfPaint);
      navigate("/QuestionNineForMaleWithHebHelp");
    } else {
      signsOfPaint.PainWhileSwallowing = false;
      signsOfPaint.numberOfSignsOfPain = signsOfPaint.numberOfSignsOfPain;
      signsOfPainsStateService.getSignsOfPainsState(signsOfPaint);
      navigate("/QuestionNineForMaleWithHebHelp");
    }
  }
  function badlyHappenClickHandlerOnQuestionEightForMaleWithHebHelpImage(): void {
    if (signsOfPaint.PainWhileSwallowing === true) {
      signsOfPaint.PainWhileSwallowing = true;
      if (signsOfPaint.numberOfSignsOfPain !== undefined) {
        signsOfPaint.numberOfSignsOfPain = signsOfPaint.numberOfSignsOfPain;
      }
      signsOfPainsStateService.getSignsOfPainsState(signsOfPaint);
      navigate("/QuestionNineForMaleWithHebHelp");
    } else {
      if (signsOfPaint.numberOfSignsOfPain !== undefined) {
        signsOfPaint.numberOfSignsOfPain += 1;
      }
      signsOfPaint.PainWhileSwallowing = true;
      signsOfPainsStateService.getSignsOfPainsState(signsOfPaint);
      navigate("/QuestionNineForMaleWithHebHelp");
    }
  }
  return (
    <div className="questionBody  h-100 ">
      <Navbar />
      <QuestNum currentQuestNum={8} />
      <div className="MaleOrFemalePageWithHeb  px-0 container  h-75">
        <div className="mainImgs  h-100">
          <div className="imgL w-50 m-3">
            <img
              className={`mw-100 mh-100 ${
                typeof signsOfPaint.PainWhileSwallowing !== "undefined"
                  ? signsOfPaint.PainWhileSwallowing
                    ? "selectedImg"
                    : "noSelectedImg"
                  : ""
              }`}
              src={imageQuestionEightForMaleWithHebHelp1}
              onClick={
                badlyHappenClickHandlerOnQuestionEightForMaleWithHebHelpImage
              }
            />
          </div>
          <div className="imgR w-50 m-3 ">
            <img
              className={`mw-100 mh-100 ${
                typeof signsOfPaint.PainWhileSwallowing !== "undefined"
                  ? signsOfPaint.PainWhileSwallowing
                    ? "noSelectedImg"
                    : "selectedImg"
                  : ""
              }`}
              src={imageQuestionEightForMaleWithHebHelp2}
              onClick={
                wellHappenClickHandlerOnQuestionEightForMaleWithHebHelpImage
              }
            />
          </div>
        </div>

        <div className="bottomPage">
          <BtnsBottom
            descriptions={title}
            clickBack={() => {
              navigate("/QuestionSevenForMaleWithHebHelp");
            }}
            clickNext={() => navigate("/QuestionNineForMaleWithHebHelp")}
          />
        </div>
      </div>
    </div>
  );
}

export default QuestionEightForMaleWithHebHelp;
