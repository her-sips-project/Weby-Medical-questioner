import "./QuestionEight.css";
import signsOfPainsStateService from "../../../../../Services/SignsOfPainsAppStateServic/Signs-of-pains-app-state-servic";
import ImageQuestionEight1 from "./../../../../../Assets/Images/imagesForFemalesQuetion/Picture15.gif";
import ImageQuestionEight2 from "./../../../../../Assets/Images/imagesForFemalesQuetion/Picture16.gif";
import { Link, useNavigate } from "react-router-dom";
import PossibilityOfBackTothetweenQuestions from "../../../PossibilityOfBackTothetweenQuestions/PossibilityOfBackTothetweenQuestions";
import PossibilityOfNextTothetweenQuestions from "../../../PossibilityOfNextTothetweenQuestions/PossibilityOfNextTothetweenQuestions";
import store from "../../../../../Redux/ReduxStore/Store";
import Navbar from "../../../../Navbar/Navbar";
import QuestNum from "../../../../LayoutArea/QuestNum";
import BtnsBottom from "../../../../LayoutArea/Layout/PageBtns/BtnsBottom";
import useLanguageNavigationToHeb from "../../../../../Hooks/hooks";


function QuestionEight(): JSX.Element {
  const navigate = useNavigate();
  const signsOfPaint = { ...store.getState().PainsAppState.signsOFPain };
  const customRoutes = "/QuestionEightWithHebHelp";
  useLanguageNavigationToHeb(customRoutes);
  
  const title =
    "There are two images representing experiences of pain when swallowing.Choose the image that best represents your experience.";
  function wellHappenClickHandlerOnQuestionEightForFemaleImage(): void {
    if (signsOfPaint.PainWhileSwallowing === true) {
      signsOfPaint.PainWhileSwallowing = false;
      if (signsOfPaint.numberOfSignsOfPain !== undefined) {
        signsOfPaint.numberOfSignsOfPain -= 1;
      }
      signsOfPainsStateService.getSignsOfPainsState(signsOfPaint);
      navigate("/QuestionNine");
    } else {
      signsOfPaint.PainWhileSwallowing = false;
      signsOfPaint.numberOfSignsOfPain = signsOfPaint.numberOfSignsOfPain;
      signsOfPainsStateService.getSignsOfPainsState(signsOfPaint);
      navigate("/QuestionNine");
    }
  }
  function badlyHappenClickHandlerOnQuestionEightForFemaleImage(): void {
    if (signsOfPaint.PainWhileSwallowing === true) {
      signsOfPaint.PainWhileSwallowing = true;
      if (signsOfPaint.numberOfSignsOfPain !== undefined) {
        signsOfPaint.numberOfSignsOfPain = signsOfPaint.numberOfSignsOfPain;
      }
      signsOfPainsStateService.getSignsOfPainsState(signsOfPaint);
      navigate("/QuestionNine");
    } else {
      if (signsOfPaint.numberOfSignsOfPain !== undefined) {
        signsOfPaint.numberOfSignsOfPain += 1;
      }
      signsOfPaint.PainWhileSwallowing = true;
      signsOfPainsStateService.getSignsOfPainsState(signsOfPaint);
      navigate("/QuestionNine");
    }
  }
  return (
    <div className="questionBody  h-100 ">
      <Navbar />
      <QuestNum currentQuestNum={8} />
      <div className="MaleOrFemalePageWithHeb  px-0 container  h-75">
        <div className="mainImgs  h-100">
          <div className="imgL w-50 m-3  h-80">
            <img
              className="mw-100  mh-100"
              src={ImageQuestionEight1}
              onClick={badlyHappenClickHandlerOnQuestionEightForFemaleImage}
            />
          </div>
          <div className="imgR w-50 m-3  h-80">
            <img
              className=" mw-100 mh-100 "
              src={ImageQuestionEight2}
              onClick={wellHappenClickHandlerOnQuestionEightForFemaleImage}
            />
          </div>
        </div>

        <div className="bottomPage">
          <BtnsBottom
            descriptions={title}
            clickBack={() => {
              navigate("/QuestionSeven");
            }}
            clickNext={() => navigate("/QuestionNine")}
          />
        </div>
      </div>
    </div>
  );
}

export default QuestionEight;
