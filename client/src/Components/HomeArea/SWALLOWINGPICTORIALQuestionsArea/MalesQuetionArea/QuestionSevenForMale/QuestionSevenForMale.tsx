import { Link, useNavigate } from "react-router-dom";
import "./QuestionSevenForMale.css";
import imageQuestionSevenForMale1 from "./../../../../../Assets/Images/imagesForMalesQuetion/Picture13.jpg";
import imageQuestionSevenForMale2 from "./../../../../../Assets/Images/imagesForMalesQuetion/Picture14.jpg";
import signsOfPainsStateService from "../../../../../Services/SignsOfPainsAppStateServic/Signs-of-pains-app-state-servic";
import PossibilityOfBackTothetweenQuestions from "../../../PossibilityOfBackTothetweenQuestions/PossibilityOfBackTothetweenQuestions";
import PossibilityOfNextTothetweenQuestions from "../../../PossibilityOfNextTothetweenQuestions/PossibilityOfNextTothetweenQuestions";
import store from "../../../../../Redux/ReduxStore/Store";
import useLanguageNavigationToHeb from "../../../../../Hooks/hooks";
import Navbar from "../../../../Navbar/Navbar";
import QuestNum from "../../../../LayoutArea/QuestNum";
import BtnsBottom from "../../../../LayoutArea/Layout/PageBtns/BtnsBottom";

function QuestionSevenForMale(): JSX.Element {
  const navigate = useNavigate();
  const signsOfPaint = { ...store.getState().PainsAppState.signsOFPain };
  const customRoutes = "/QuestionSevenForMaleWithHebHelp";
  useLanguageNavigationToHeb(customRoutes);

  const title =
    "There are two images representing experiences of eating in the company of others. Choose the image that best represents your experience.";
  function wellHappenClickHandlerOnQuestionSevenForMaleImage(): void {
    if (signsOfPaint.AvoidingEatingWithOthers === true) {
      if (signsOfPaint.numberOfSignsOfPain !== undefined) {
        signsOfPaint.numberOfSignsOfPain -= 1;
        signsOfPaint.AvoidingEatingWithOthers = false;
        signsOfPainsStateService.getSignsOfPainsState(signsOfPaint);
        navigate("/QuestionEightForMale");
      }
    } else {
      signsOfPaint.AvoidingEatingWithOthers = false;
      signsOfPaint.numberOfSignsOfPain = signsOfPaint.numberOfSignsOfPain;
      signsOfPainsStateService.getSignsOfPainsState(signsOfPaint);
      navigate("/QuestionEightForMale");
    }
  }
  function badlyHappenClickHandlerOnQuestionSevenForMaleImage(): void {
    if (signsOfPaint.AvoidingEatingWithOthers === true) {
      signsOfPaint.AvoidingEatingWithOthers = true;
      if (signsOfPaint.numberOfSignsOfPain !== undefined) {
        signsOfPaint.numberOfSignsOfPain = signsOfPaint.numberOfSignsOfPain;
      }
      signsOfPainsStateService.getSignsOfPainsState(signsOfPaint);
      navigate("/QuestionEightForMale");
    } else {
      if (signsOfPaint.numberOfSignsOfPain !== undefined) {
        signsOfPaint.numberOfSignsOfPain += 1;
      }
      signsOfPaint.AvoidingEatingWithOthers = true;
      signsOfPainsStateService.getSignsOfPainsState(signsOfPaint);
      navigate("/QuestionEightForMale");
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
              src={imageQuestionSevenForMale1}
              onClick={badlyHappenClickHandlerOnQuestionSevenForMaleImage}
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
              src={imageQuestionSevenForMale2}
              onClick={wellHappenClickHandlerOnQuestionSevenForMaleImage}
            />
            <br />
          </div>
        </div>

        <div className="bottomPage">
          <BtnsBottom
            descriptions={title}
            clickBack={() => {
              navigate("/QuestionSixForMale");
            }}
            clickNext={() => navigate("/QuestionEightForMale")}
          />
        </div>
      </div>
    </div>
  );
}

export default QuestionSevenForMale;
