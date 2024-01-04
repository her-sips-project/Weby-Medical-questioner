import "./QuestionOneForMaleWithHebHelp.css";
import imageQuestionOneForMaleWithHebHelp1 from "./../../../../../../Assets/Images/imagesForMalesQuetion/Picture1.gif";
import imageQuestionOneForMaleWithHebHelp2 from "./../../../../../../Assets/Images/imagesForMalesQuetion/Picture2.gif";
import { Link, useNavigate } from "react-router-dom";
import PossibilityOfBackTothetweenQuestions from "./../../../../PossibilityOfBackTothetweenQuestions/PossibilityOfBackTothetweenQuestions";
import PossibilityOfNextTothetweenQuestions from "../../../../PossibilityOfNextTothetweenQuestions/PossibilityOfNextTothetweenQuestions";
import store from "../../../../../../Redux/ReduxStore/Store";
import signsOfPainsStateService from "../../../../../../Services/SignsOfPainsAppStateServic/Signs-of-pains-app-state-servic";
import Navbar from "../../../../../Navbar/Navbar";
import QuestNum from "../../../../../LayoutArea/QuestNum";
import BtnsBottom from "../../../../../LayoutArea/Layout/PageBtns/BtnsBottom";
import { useLanguageNavigationToEn } from "../../../../../../Hooks/hooks";
function QuestionOneForMaleWithHebHelp(): JSX.Element {
  const navigate = useNavigate();

  const customRoutes = "/QuestionOneForMale";
  useLanguageNavigationToEn(customRoutes);

  const signsOfPaint = { ...store.getState().PainsAppState.signsOFPain };

  const title =
    "לפניך מוצגות שתי תמונות המייצגות חוויה שקשורה ליכולת שלך לבלוע נוזלים יש לבחור בתמונה הנכונה עבורך. ";
  function wellHappenClickHandlerOnQuestionOneForMaleWithHebHelpImage(): void {
    if (signsOfPaint.difficultySwallowingLiquids === true) {
      signsOfPaint.difficultySwallowingLiquids = false;
      if (signsOfPaint.numberOfSignsOfPain !== undefined) {
        signsOfPaint.numberOfSignsOfPain -= 1;
      }
      signsOfPainsStateService.getSignsOfPainsState(signsOfPaint);
      navigate("/QuestionTwoForMaleWithHebHelp");
    } else {
      signsOfPaint.difficultySwallowingLiquids = false;
      signsOfPaint.numberOfSignsOfPain = 0;
      signsOfPainsStateService.getSignsOfPainsState(signsOfPaint);
      navigate("/QuestionTwoForMaleWithHebHelp");
    }
  }
  function badlyHappenClickHandlerOnQuestionOneForMaleWithHebHelpImage(): void {
    if (signsOfPaint.difficultySwallowingLiquids === true) {
      if (signsOfPaint.numberOfSignsOfPain !== undefined) {
        signsOfPaint.numberOfSignsOfPain = signsOfPaint.numberOfSignsOfPain;
        signsOfPaint.difficultySwallowingLiquids = true;
        signsOfPainsStateService.getSignsOfPainsState(signsOfPaint);
        navigate("/QuestionTwoForMaleWithHebHelp");
      }
    } else {
      signsOfPaint.difficultySwallowingLiquids = true;
      signsOfPaint.numberOfSignsOfPain = 1;
      signsOfPainsStateService.getSignsOfPainsState(signsOfPaint);
      navigate("/QuestionTwoForMaleWithHebHelp");
    }
  }
  return (
    <div className="questionBody  h-100 ">
      <Navbar />
      <QuestNum currentQuestNum={1} />
      <div className="MaleOrFemalePageWithHeb  px-0 container  h-75">
        <div className="mainImgs  h-100">
          <div className="imgL w-50 m-3  h-80">
            <img
              className="mw-100  mh-100"
              src={imageQuestionOneForMaleWithHebHelp1}
              onClick={
                badlyHappenClickHandlerOnQuestionOneForMaleWithHebHelpImage
              }
            />
          </div>
          <div className="imgR w-50 m-3  h-80">
            <img
              className=" mw-100 mh-100 "
              src={imageQuestionOneForMaleWithHebHelp2}
              onClick={
                wellHappenClickHandlerOnQuestionOneForMaleWithHebHelpImage
              }
            />
            <br />
          </div>
        </div>

        <div className="bottomPage">
          <BtnsBottom
            descriptions={title}
            clickBack={() => {
              navigate("/MaleOrFemalePageWithHeb");
            }}
            clickNext={() => navigate("/QuestionTwoForMaleWithHebHelp")}
          />
        </div>
      </div>
    </div>
  );
}

export default QuestionOneForMaleWithHebHelp;
