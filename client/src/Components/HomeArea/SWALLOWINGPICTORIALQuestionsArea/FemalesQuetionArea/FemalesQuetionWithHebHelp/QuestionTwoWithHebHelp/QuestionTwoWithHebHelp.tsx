import "./QuestionTwoWithHebHelp.css";
import ImageQuestionTwoWithHebHelp1 from "./../../../../../../Assets/Images/imagesForFemalesQuetion/Picture3.jpg";
import ImageQuestionTwoWithHebHelp2 from "./../../../../../../Assets/Images/imagesForFemalesQuetion/Picture4.jpg";
import { Link, useNavigate } from "react-router-dom";
import store from "../../../../../../Redux/ReduxStore/Store";
import PossibilityOfBackTothetweenQuestions from "../../../../PossibilityOfBackTothetweenQuestions/PossibilityOfBackTothetweenQuestions";
import PossibilityOfNextTothetweenQuestions from "./../../../../PossibilityOfNextTothetweenQuestions/PossibilityOfNextTothetweenQuestions";
import signsOfPainsStateService from "../../../../../../Services/SignsOfPainsAppStateServic/Signs-of-pains-app-state-servic";
import QuestNum from "../../../../../LayoutArea/QuestNum";
import BtnsBottom from "../../../../../LayoutArea/Layout/PageBtns/BtnsBottom";
import Navbar from "../../../../../Navbar/Navbar";
import { useLanguageNavigationToEn } from "../../../../../../Hooks/hooks";

function QuestionTwoWithHebHelp(): JSX.Element {
  const navigate = useNavigate();

  const customRoutes = "/QuestionTow";
  useLanguageNavigationToEn(customRoutes);

  const signsOfPaint = { ...store.getState().PainsAppState.signsOFPain };
  const title =
    "לפניך מוצגות שתי תמונות המייצגות חוויה שקשורה ליכולת שלך לאכול מזון מוצק.  יש לבחור בתמונה הנכונה עבורך. ";

  function wellHappenClickHandlerOnQuestionTwoWithHebHelpForFemaleImage(): void {
    if (signsOfPaint.difficultrySwallowingSolidFood === true) {
      if (signsOfPaint.numberOfSignsOfPain !== undefined) {
        signsOfPaint.numberOfSignsOfPain -= 1;
        signsOfPaint.difficultrySwallowingSolidFood = false;
        signsOfPainsStateService.getSignsOfPainsState(signsOfPaint);
        navigate("/QuestionThreeWithHebHelp");
      }
    } else {
      signsOfPaint.difficultrySwallowingSolidFood = false;
      signsOfPaint.numberOfSignsOfPain = signsOfPaint.numberOfSignsOfPain;
      signsOfPainsStateService.getSignsOfPainsState(signsOfPaint);
      navigate("/QuestionThreeWithHebHelp");
    }
  }
  function badlyHappenClickHandlerOnQuestionTwoWithHebHelpForFemaleImage(): void {
    if (signsOfPaint.difficultrySwallowingSolidFood === true) {
      signsOfPaint.difficultrySwallowingSolidFood = true;
      if (signsOfPaint.numberOfSignsOfPain !== undefined) {
        signsOfPaint.numberOfSignsOfPain = signsOfPaint.numberOfSignsOfPain;
      }
      signsOfPainsStateService.getSignsOfPainsState(signsOfPaint);
      navigate("/QuestionThreeWithHebHelp");
    } else {
      if (signsOfPaint.numberOfSignsOfPain !== undefined) {
        signsOfPaint.numberOfSignsOfPain += 1;
      }
      signsOfPaint.difficultrySwallowingSolidFood = true;
      signsOfPainsStateService.getSignsOfPainsState(signsOfPaint);
      navigate("/QuestionThreeWithHebHelp");
    }
  }
  return (
    <div className="questionBody  h-100 ">
      <Navbar/>
      <QuestNum currentQuestNum={2} />
      <div className="MaleOrFemalePageWithHeb  px-0 container  h-75">
        <div className="mainImgs  h-100">
          <div className="imgL w-50 m-3  h-80">
            <img
              className="mw-100  mh-100"
              src={ImageQuestionTwoWithHebHelp1}
              onClick={
                badlyHappenClickHandlerOnQuestionTwoWithHebHelpForFemaleImage
              }
            />
            <Link to={"/QuestionOneForMale"} title="הבא"></Link>
          </div>
          <div className="imgR w-50 m-3  h-80">
            <img
              className=" mw-100 mh-100 "
              src={ImageQuestionTwoWithHebHelp2}
              onClick={
                wellHappenClickHandlerOnQuestionTwoWithHebHelpForFemaleImage
              }
            />
            <br />
          </div>
        </div>

        <div className="bottomPage">
          <BtnsBottom
            descriptions={title}
            clickBack={() => {
              navigate("/QuestionOneWithHebHelp");
            }}
            clickNext={() => navigate("/QuestionThreeWithHebHelp")}
            // nextBtn={false}
          />
        </div>
      </div>
    </div>
  );
}

export default QuestionTwoWithHebHelp;
