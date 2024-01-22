import "./QuestionSeven.css";
import signsOfPainsStateService from "../../../../../Services/SignsOfPainsAppStateServic/Signs-of-pains-app-state-servic";
import ImageQuestionSeven1 from "./../../../../../Assets/Images/imagesForFemalesQuetion/Picture13.jpg";
import ImageQuestionSeven2 from "./../../../../../Assets/Images/imagesForFemalesQuetion/Picture14.jpg";
import { Link, useNavigate } from "react-router-dom";
import PossibilityOfBackTothetweenQuestions from "../../../PossibilityOfBackTothetweenQuestions/PossibilityOfBackTothetweenQuestions";
import PossibilityOfNextTothetweenQuestions from "../../../PossibilityOfNextTothetweenQuestions/PossibilityOfNextTothetweenQuestions";
import store from "../../../../../Redux/ReduxStore/Store";
import useLanguageNavigationToHeb from "../../../../../Hooks/hooks";
import Navbar from "../../../../Navbar/Navbar";
import QuestNum from "../../../../LayoutArea/QuestNum";
import BtnsBottom from "../../../../LayoutArea/Layout/PageBtns/BtnsBottom";

function QuestionSeven(): JSX.Element {
  const navigate = useNavigate();
  const customRoutes = "/QuestionSevenWithHebHelp";
  useLanguageNavigationToHeb(customRoutes);

  const title =
    "There are two images representing experiences of eating in the company of others. Choose the image that best represents your experience.";

  const signsOfPaint = { ...store.getState().PainsAppState.signsOFPain };
  function wellHappenClickHandlerOnQuestionSevenForFemaleImage(): void {
    if (signsOfPaint.AvoidingEatingWithOthers === true) {
      if (signsOfPaint.numberOfSignsOfPain !== undefined) {
        signsOfPaint.numberOfSignsOfPain -= 1;
        signsOfPaint.AvoidingEatingWithOthers = false;
        signsOfPainsStateService.getSignsOfPainsState(signsOfPaint);
        navigate("/QuestionEight");
      }
    } else {
      signsOfPaint.AvoidingEatingWithOthers = false;
      signsOfPaint.numberOfSignsOfPain = signsOfPaint.numberOfSignsOfPain;
      signsOfPainsStateService.getSignsOfPainsState(signsOfPaint);
      navigate("/QuestionEight");
    }
  }
  function badlyHappenClickHandlerOnQuestionSevenForFemaleImage(): void {
    if (signsOfPaint.AvoidingEatingWithOthers === true) {
      signsOfPaint.AvoidingEatingWithOthers = true;
      if (signsOfPaint.numberOfSignsOfPain !== undefined) {
        signsOfPaint.numberOfSignsOfPain = signsOfPaint.numberOfSignsOfPain;
      }
      signsOfPainsStateService.getSignsOfPainsState(signsOfPaint);
      navigate("/QuestionEight");
    } else {
      if (signsOfPaint.numberOfSignsOfPain !== undefined) {
        signsOfPaint.numberOfSignsOfPain += 1;
      }
      signsOfPaint.AvoidingEatingWithOthers = true;
      signsOfPainsStateService.getSignsOfPainsState(signsOfPaint);
      navigate("/QuestionEight");
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
              src={ImageQuestionSeven1}
              onClick={badlyHappenClickHandlerOnQuestionSevenForFemaleImage}
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
              src={ImageQuestionSeven2}
              onClick={wellHappenClickHandlerOnQuestionSevenForFemaleImage}
            />
            <br />
          </div>
        </div>

        <div className="bottomPage">
          <BtnsBottom
            descriptions={title}
            clickBack={() => {
              navigate("/QuestionSix");
            }}
            clickNext={() => navigate("/QuestionEight")}
          />
        </div>
      </div>
    </div>
  );
}

export default QuestionSeven;
