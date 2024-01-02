import "./QuestionTwo.css";
import signsOfPainsStateService from "../../../../../Services/SignsOfPainsAppStateServic/Signs-of-pains-app-state-servic";
import ImageQuestionTwo1 from "./../../../../../Assets/Images/imagesForFemalesQuetion/Picture3.jpg";
import ImageQuestionTwo2 from "./../../../../../Assets/Images/imagesForFemalesQuetion/Picture4.jpg";
import { Link, useNavigate } from "react-router-dom";
import PossibilityOfBackTothetweenQuestions from "../../../PossibilityOfBackTothetweenQuestions/PossibilityOfBackTothetweenQuestions";
import PossibilityOfNextTothetweenQuestions from "../../../PossibilityOfNextTothetweenQuestions/PossibilityOfNextTothetweenQuestions";
import store from "../../../../../Redux/ReduxStore/Store";
import useLanguageNavigationToHeb from "../../../../../Hooks/hooks";
import Navbar from "../../../../Navbar/Navbar";
import QuestNum from "../../../../LayoutArea/QuestNum";
import BtnsBottom from "../../../../LayoutArea/Layout/PageBtns/BtnsBottom";
function QuestionTwo(): JSX.Element {
  const navigate = useNavigate();
  const title =
    "There are two images representing experiences while swallowing solid foods. Choose the image that best represents your experience.";
  const customRoutes = "/QuestionTwoWithHebHelp";
  useLanguageNavigationToHeb(customRoutes);

  const signsOfPaint = { ...store.getState().PainsAppState.signsOFPain };
  function wellHappenClickHandlerOnQuestionTwoForFemaleImage(): void {
    if (signsOfPaint.difficultrySwallowingSolidFood === true) {
      if (signsOfPaint.numberOfSignsOfPain !== undefined) {
        signsOfPaint.numberOfSignsOfPain -= 1;
        signsOfPaint.difficultrySwallowingSolidFood = false;
        signsOfPainsStateService.getSignsOfPainsState(signsOfPaint);
        navigate("/QuestionThree");
      }
    } else {
      signsOfPaint.difficultrySwallowingSolidFood = false;
      signsOfPaint.numberOfSignsOfPain = signsOfPaint.numberOfSignsOfPain;
      signsOfPainsStateService.getSignsOfPainsState(signsOfPaint);
      navigate("/QuestionThree");
    }
  }
  function badlyHappenClickHandlerOnQuestionTwoForFemaleImage(): void {
    if (signsOfPaint.difficultrySwallowingSolidFood === true) {
      signsOfPaint.difficultrySwallowingSolidFood = true;
      if (signsOfPaint.numberOfSignsOfPain !== undefined) {
        signsOfPaint.numberOfSignsOfPain = signsOfPaint.numberOfSignsOfPain;
      }
      signsOfPainsStateService.getSignsOfPainsState(signsOfPaint);
      navigate("/QuestionThree");
    } else {
      if (signsOfPaint.numberOfSignsOfPain !== undefined) {
        signsOfPaint.numberOfSignsOfPain += 1;
      }
      signsOfPaint.difficultrySwallowingSolidFood = true;
      signsOfPainsStateService.getSignsOfPainsState(signsOfPaint);
      navigate("/QuestionThree");
    }
  }
  return (
    <div className="questionBody  h-100 ">
      <Navbar />
      <QuestNum currentQuestNum={2} />
      <div className="MaleOrFemalePageWithHeb  px-0 container  h-75">
        <div className="mainImgs  h-100">
          <div className="imgL w-50 m-3  h-80">
            <img
              className="mw-100  mh-100"
              src={ImageQuestionTwo1}
              onClick={badlyHappenClickHandlerOnQuestionTwoForFemaleImage}
            />
          </div>
          <div className="imgR w-50 m-3  h-80">
            <img
              className=" mw-100 mh-100 "
              src={ImageQuestionTwo2}
              onClick={wellHappenClickHandlerOnQuestionTwoForFemaleImage}
            />
            <br />
          </div>
        </div>

        <div className="bottomPage">
          <BtnsBottom
            descriptions={title}
            clickBack={() => {
              navigate("/question-one-for-female");
            }}
            clickNext={() => navigate("/QuestionThree")}
          />
        </div>
      </div>
    </div>
  );
}

export default QuestionTwo;
