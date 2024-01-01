import "./QuestionTenForMaleWithHebHelp.css";
import imageQuestionTenForMaleWithHebHelp1 from "./../../../../../../Assets/Images/imagesForMalesQuetion/Picture19.jpg";
import imageQuestionTenForMaleWithHebHelp2 from "./../../../../../../Assets/Images/imagesForMalesQuetion/Picture20.jpg";
import { Link, useNavigate } from "react-router-dom";
import PossibilityOfBackTothetweenQuestions from "../../../../PossibilityOfBackTothetweenQuestions/PossibilityOfBackTothetweenQuestions";
import PossibilityOfNextTothetweenQuestions from "./../../../../PossibilityOfNextTothetweenQuestions/PossibilityOfNextTothetweenQuestions";
import store from "../../../../../../Redux/ReduxStore/Store";
import signsOfPainsStateService from "../../../../../../Services/SignsOfPainsAppStateServic/Signs-of-pains-app-state-servic";
import Navbar from "../../../../../Navbar/Navbar";
import QuestNum from "../../../../../LayoutArea/QuestNum";
import BtnsBottom from "../../../../../LayoutArea/Layout/PageBtns/BtnsBottom";
function QuestionTenForMaleWithHebHelp(): JSX.Element {
  const navigate = useNavigate();
  const signsOfPaint = { ...store.getState().PainsAppState.signsOFPain };
  const title =
    "לפניך מוצגות שתי תמונות המייצגות חוויה של מידת החרדה שלך מאכילה. יש לבחור בתמונה הנכונה עבורך";
  function wellHappenClickHandlerOnQuestionTenForMaleWithHebHelpImage(): void {
    if (signsOfPaint.feelingAnxiousAboutSwallowing === true) {
      signsOfPaint.feelingAnxiousAboutSwallowing = false;
      if (signsOfPaint.numberOfSignsOfPain !== undefined) {
        signsOfPaint.numberOfSignsOfPain -= 1;
      }
      signsOfPainsStateService.getSignsOfPainsState(signsOfPaint);
      navigate("/ResulOfQuestionsMaleInHeb");
    } else {
      signsOfPaint.feelingAnxiousAboutSwallowing = false;
      signsOfPaint.numberOfSignsOfPain = signsOfPaint.numberOfSignsOfPain;
      signsOfPainsStateService.getSignsOfPainsState(signsOfPaint);
      navigate("/ResulOfQuestionsMaleInHeb");
    }
  }
  function badlyHappenClickHandlerOnQuestionTenForMaleWithHebHelpImage(): void {
    if (signsOfPaint.feelingAnxiousAboutSwallowing === true) {
      signsOfPaint.feelingAnxiousAboutSwallowing = true;
      if (signsOfPaint.numberOfSignsOfPain !== undefined) {
        signsOfPaint.numberOfSignsOfPain = signsOfPaint.numberOfSignsOfPain;
      }
      signsOfPainsStateService.getSignsOfPainsState(signsOfPaint);
      navigate("/ResulOfQuestionsMaleInHeb");
    } else {
      if (signsOfPaint.numberOfSignsOfPain !== undefined) {
        signsOfPaint.numberOfSignsOfPain += 1;
      }
      signsOfPaint.feelingAnxiousAboutSwallowing = true;
      signsOfPainsStateService.getSignsOfPainsState(signsOfPaint);
      navigate("/ResulOfQuestionsMaleInHeb");
    }
  }
  return (
    <div className="questionBody  h-100 ">
      <Navbar />
      <QuestNum currentQuestNum={10} />
      <div className="MaleOrFemalePageWithHeb  px-0 container  h-75">
        <div className="mainImgs  h-100">
          <div className="imgL w-50 m-3">
            <img
              className="mw-100  mh-100"
              src={imageQuestionTenForMaleWithHebHelp1}
              onClick={
                badlyHappenClickHandlerOnQuestionTenForMaleWithHebHelpImage
              }
            />
          </div>
          <div className="imgR w-50 m-3 ">
            <img
              className=" mw-100 mh-100 "
              src={imageQuestionTenForMaleWithHebHelp2}
              onClick={
                wellHappenClickHandlerOnQuestionTenForMaleWithHebHelpImage
              }
            />
            <br />
          </div>
        </div>

        <div className="bottomPage">
          <BtnsBottom
            descriptions={title}
            clickBack={() => {
              navigate("/QuestionNineForMaleWithHebHelp");
            }}
            clickNext={() => navigate("/QuestionTwoWithHebHelp")}
            nextBtn={false}
          />
        </div>
      </div>
    </div>
  );
}

export default QuestionTenForMaleWithHebHelp;
