import "./QuestionNineWithHebHelp.css";
import ImageQuestionNineWithHebHelp1 from "./../../../../../../Assets/Images/imagesForFemalesQuetion/Picture17.jpg";
import ImageQuestionNineWithHebHelp2 from "./../../../../../../Assets/Images/imagesForFemalesQuetion/Picture18.jpg";
import { Link, useNavigate } from "react-router-dom";
import store from "../../../../../../Redux/ReduxStore/Store";
import PossibilityOfBackTothetweenQuestions from "./../../../../PossibilityOfBackTothetweenQuestions/PossibilityOfBackTothetweenQuestions";
import PossibilityOfNextTothetweenQuestions from "../../../../PossibilityOfNextTothetweenQuestions/PossibilityOfNextTothetweenQuestions";
import signsOfPainsStateService from "../../../../../../Services/SignsOfPainsAppStateServic/Signs-of-pains-app-state-servic";
import Navbar from "../../../../../Navbar/Navbar";
import QuestNum from "../../../../../LayoutArea/QuestNum";
import BtnsBottom from "../../../../../LayoutArea/Layout/PageBtns/BtnsBottom";

function QuestionNineWithHebHelp(): JSX.Element {
  const navigate = useNavigate();
  
  const customRoutes = "/QuestionNine";
  useLanguageNavigationToEn(customRoutes);

  const signsOfPaint = { ...store.getState().PainsAppState.signsOFPain };
  const title =
    "לפניך מוצגות שתי תמונות המייצגות חוויה של מידת ההנאה שלך מאכילה. יש לבחור בתמונה הנכונה עבורך";
  function wellHappenClickHandlerOnQuestionNineWithHebHelpForFemaleImage(): void {
    if (signsOfPaint.EnjoyingMeals === true) {
      signsOfPaint.EnjoyingMeals = false;
      if (signsOfPaint.numberOfSignsOfPain !== undefined) {
        signsOfPaint.numberOfSignsOfPain -= 1;
      }
      signsOfPainsStateService.getSignsOfPainsState(signsOfPaint);
      navigate("/QuestionTenWithHebHelp");
    } else {
      signsOfPaint.EnjoyingMeals = false;
      signsOfPaint.numberOfSignsOfPain = signsOfPaint.numberOfSignsOfPain;
      signsOfPainsStateService.getSignsOfPainsState(signsOfPaint);
      navigate("/QuestionTenWithHebHelp");
    }
  }
  function badlyHappenClickHandlerOnQuestionNineWithHebHelpForFemaleImage(): void {
    if (signsOfPaint.EnjoyingMeals === true) {
      signsOfPaint.EnjoyingMeals = true;
      if (signsOfPaint.numberOfSignsOfPain !== undefined) {
        signsOfPaint.numberOfSignsOfPain = signsOfPaint.numberOfSignsOfPain;
      }
      signsOfPainsStateService.getSignsOfPainsState(signsOfPaint);
      navigate("/QuestionTenWithHebHelp");
    } else {
      if (signsOfPaint.numberOfSignsOfPain !== undefined) {
        signsOfPaint.numberOfSignsOfPain += 1;
      }
      signsOfPaint.EnjoyingMeals = true;
      signsOfPainsStateService.getSignsOfPainsState(signsOfPaint);
      navigate("/QuestionTenWithHebHelp");
    }
  }
  return (
    <div className="questionBody  h-100 ">
      <Navbar />
      <QuestNum currentQuestNum={9} />
      <div className="MaleOrFemalePageWithHeb  px-0 container  h-75">
        <div className="mainImgs  h-100">
          <div className="imgL w-50 m-3  h-80">
            <img
              className="mw-100  mh-100"
              src={ImageQuestionNineWithHebHelp1}
              onClick={
                badlyHappenClickHandlerOnQuestionNineWithHebHelpForFemaleImage
              }
            />
          </div>
          <div className="imgR w-50 m-3  h-80">
            <img
              className=" mw-100 mh-100 "
              src={ImageQuestionNineWithHebHelp2}
              onClick={
                wellHappenClickHandlerOnQuestionNineWithHebHelpForFemaleImage
              }
            />
          </div>
        </div>

        <div className="bottomPage">
          <BtnsBottom
            descriptions={title}
            clickBack={() => navigate("/QuestionEightWithHebHelp")}
            clickNext={() => navigate("/QuestionTenWithHebHelp")}
          />
        </div>
      </div>
    </div>
  );
}

export default QuestionNineWithHebHelp;
