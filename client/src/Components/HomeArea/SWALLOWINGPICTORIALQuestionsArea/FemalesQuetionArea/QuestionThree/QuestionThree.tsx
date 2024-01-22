import "./QuestionThree.css";
import signsOfPainsStateService from "../../../../../Services/SignsOfPainsAppStateServic/Signs-of-pains-app-state-servic";
import ImageQuestionThree1 from "./../../../../../Assets/Images/imagesForFemalesQuetion/Picture5.jpg";
import ImageQuestionThree2 from "./../../../../../Assets/Images/imagesForFemalesQuetion/Picture6.jpg";
import { Link, useNavigate } from "react-router-dom";
import PossibilityOfBackTothetweenQuestions from "../../../PossibilityOfBackTothetweenQuestions/PossibilityOfBackTothetweenQuestions";
import PossibilityOfNextTothetweenQuestions from "../../../PossibilityOfNextTothetweenQuestions/PossibilityOfNextTothetweenQuestions";
import store from "../../../../../Redux/ReduxStore/Store";
import useLanguageNavigationToHeb from "../../../../../Hooks/hooks";
import Navbar from "../../../../Navbar/Navbar";
import QuestNum from "../../../../LayoutArea/QuestNum";
import BtnsBottom from "../../../../LayoutArea/Layout/PageBtns/BtnsBottom";
function QuestionThree(): JSX.Element {
  const customRoutes = "/QuestionThreeWithHebHelp";
  useLanguageNavigationToHeb(customRoutes);

  const title =
    "There are two images representing experiences while swallowing pills. Choose the image that best represents your experience.";
  const navigate = useNavigate();
  const signsOfPaint = { ...store.getState().PainsAppState.signsOFPain };
  function wellHappenClickHandlerOnQuestionThreeForFemaleImage(): void {
    if (signsOfPaint.difficultySwallowingPills === true) {
      signsOfPaint.difficultySwallowingPills = false;
      if (signsOfPaint.numberOfSignsOfPain !== undefined) {
        signsOfPaint.numberOfSignsOfPain -= 1;
      }
      signsOfPainsStateService.getSignsOfPainsState(signsOfPaint);
      navigate("/QuestionFour");
    } else {
      signsOfPaint.difficultySwallowingPills = false;
      signsOfPaint.numberOfSignsOfPain = signsOfPaint.numberOfSignsOfPain;
      signsOfPainsStateService.getSignsOfPainsState(signsOfPaint);
      navigate("/QuestionFour");
    }
  }
  function badlyHappenClickHandlerOnQuestionThreeForFemaleImage(): void {
    if (signsOfPaint.difficultySwallowingPills === true) {
      signsOfPaint.difficultySwallowingPills = true;
      if (signsOfPaint.numberOfSignsOfPain !== undefined) {
        signsOfPaint.numberOfSignsOfPain = signsOfPaint.numberOfSignsOfPain;
      }
      signsOfPainsStateService.getSignsOfPainsState(signsOfPaint);
      navigate("/QuestionFour");
    } else {
      if (signsOfPaint.numberOfSignsOfPain !== undefined) {
        signsOfPaint.numberOfSignsOfPain += 1;
      }
      signsOfPaint.difficultySwallowingPills = true;
      signsOfPainsStateService.getSignsOfPainsState(signsOfPaint);
      navigate("/QuestionFour");
    }
  }
  return (
    <div className="questionBody  h-100 ">
      <Navbar />
      <QuestNum currentQuestNum={3} />
      <div className="MaleOrFemalePageWithHeb  px-0 container  h-75">
        <div className="mainImgs  h-100">
          <div className="imgL w-50 m-3  h-80">
            <img
              className={`mw-100 mh-100 ${
                typeof signsOfPaint.difficultySwallowingPills !== "undefined"
                  ? signsOfPaint.difficultySwallowingPills
                    ? "selectedImg"
                    : "noSelectedImg"
                  : ""
              }`}
              src={ImageQuestionThree1}
              onClick={badlyHappenClickHandlerOnQuestionThreeForFemaleImage}
            />
          </div>
          <div className="imgR w-50 m-3  h-80">
            <img
              className={`mw-100 mh-100 ${
                typeof signsOfPaint.difficultySwallowingPills !== "undefined"
                  ? signsOfPaint.difficultySwallowingPills
                    ? "noSelectedImg"
                    : "selectedImg"
                  : ""
              }`}
              src={ImageQuestionThree2}
              onClick={wellHappenClickHandlerOnQuestionThreeForFemaleImage}
            />
            <br />
          </div>
        </div>

        <div className="bottomPage">
          <BtnsBottom
            descriptions={title}
            clickBack={() => {
              navigate("/QuestionTwo");
            }}
            clickNext={() => navigate("/QuestionFour")}
          />
        </div>
      </div>
    </div>
  );
}

export default QuestionThree;
