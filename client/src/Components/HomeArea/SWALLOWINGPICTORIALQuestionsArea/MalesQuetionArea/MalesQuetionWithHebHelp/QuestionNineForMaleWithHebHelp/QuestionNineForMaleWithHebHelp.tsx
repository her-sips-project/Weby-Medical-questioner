import "./QuestionNineForMaleWithHebHelp.css";
import imageQuestionNineForMaleWithHebHelp1 from "./../../../../../../Assets/Images/imagesForMalesQuetion/Picture17.jpg";
import imageQuestionNineForMaleWithHebHelp2 from "./../../../../../../Assets/Images/imagesForMalesQuetion/Picture18.jpg";
import { Link, useNavigate } from "react-router-dom";
import PossibilityOfBackTothetweenQuestions from "./../../../../PossibilityOfBackTothetweenQuestions/PossibilityOfBackTothetweenQuestions";
import PossibilityOfNextTothetweenQuestions from "./../../../../PossibilityOfNextTothetweenQuestions/PossibilityOfNextTothetweenQuestions";
import store from "../../../../../../Redux/ReduxStore/Store";
import signsOfPainsStateService from "../../../../../../Services/SignsOfPainsAppStateServic/Signs-of-pains-app-state-servic";
import Navbar from "../../../../../Navbar/Navbar";
import QuestNum from "../../../../../LayoutArea/QuestNum";
import BtnsBottom from "../../../../../LayoutArea/Layout/PageBtns/BtnsBottom";
import { useLanguageNavigationToEn } from "../../../../../../Hooks/hooks";
function QuestionNineForMaleWithHebHelp(): JSX.Element {
  const navigate = useNavigate();

  const customRoutes = "/QuestionNineForMale";
  useLanguageNavigationToEn(customRoutes);

  
  const signsOfPaint = { ...store.getState().PainsAppState.signsOFPain };
  const title =
    "לפניך מוצגות שתי תמונות המייצגות חוויה של מידת ההנאה שלך מאכילה. יש לבחור בתמונה הנכונה עבורך.   ";
  function wellHappenClickHandlerOnQuestionNineForMaleWithHebHelpImage(): void {
    if (signsOfPaint.EnjoyingMeals === true) {
      signsOfPaint.EnjoyingMeals = false;
      if (signsOfPaint.numberOfSignsOfPain !== undefined) {
        signsOfPaint.numberOfSignsOfPain -= 1;
      }
      signsOfPainsStateService.getSignsOfPainsState(signsOfPaint);
      navigate("/QuestionTenForMaleWithHebHelp");
    } else {
      signsOfPaint.EnjoyingMeals = false;
      signsOfPaint.numberOfSignsOfPain = signsOfPaint.numberOfSignsOfPain;
      signsOfPainsStateService.getSignsOfPainsState(signsOfPaint);
      navigate("/QuestionTenForMaleWithHebHelp");
    }
  }
  function badlyHappenClickHandlerOnQuestionNineForMaleWithHebHelpImage(): void {
    if (signsOfPaint.EnjoyingMeals === true) {
      signsOfPaint.EnjoyingMeals = true;
      if (signsOfPaint.numberOfSignsOfPain !== undefined) {
        signsOfPaint.numberOfSignsOfPain = signsOfPaint.numberOfSignsOfPain;
      }
      signsOfPainsStateService.getSignsOfPainsState(signsOfPaint);
      navigate("/QuestionTenForMaleWithHebHelp");
    } else {
      if (signsOfPaint.numberOfSignsOfPain !== undefined) {
        signsOfPaint.numberOfSignsOfPain += 1;
      }
      signsOfPaint.EnjoyingMeals = true;
      signsOfPainsStateService.getSignsOfPainsState(signsOfPaint);
      navigate("/QuestionTenForMaleWithHebHelp");
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
              src={imageQuestionNineForMaleWithHebHelp1}
              onClick={
                badlyHappenClickHandlerOnQuestionNineForMaleWithHebHelpImage
              }
            />
          </div>
          <div className="imgR w-50 m-3  h-80">
            <img
              className=" mw-100 mh-100 "
              src={imageQuestionNineForMaleWithHebHelp2}
              onClick={
                wellHappenClickHandlerOnQuestionNineForMaleWithHebHelpImage
              }
            />
            <br />
          </div>
        </div>

        <div className="bottomPage">
          <BtnsBottom
            descriptions={title}
            clickBack={() => {
              navigate("/QuestionSevenForMaleWithHebHelp");
            }}
            clickNext={() => navigate("/QuestionTenForMaleWithHebHelp")}
          />
        </div>
      </div>
    </div>
  );
}

export default QuestionNineForMaleWithHebHelp;
