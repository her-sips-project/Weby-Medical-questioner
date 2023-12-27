import "./QuestionFiveWithHebHelp.css";
import ImageQuestionFiveWithHebHelp1 from "./../../../../../../Assets/Images/imagesForFemalesQuetion/Picture9.jpg";
import ImageQuestionFiveWithHebHelp2 from "./../../../../../../Assets/Images/imagesForFemalesQuetion/Picture10.jpg";
import { Link, useNavigate } from "react-router-dom";
import store from "../../../../../../Redux/ReduxStore/Store";
import PossibilityOfBackTothetweenQuestions from "./../../../../PossibilityOfBackTothetweenQuestions/PossibilityOfBackTothetweenQuestions";
import PossibilityOfNextTothetweenQuestions from "../../../../PossibilityOfNextTothetweenQuestions/PossibilityOfNextTothetweenQuestions";
import signsOfPainsStateService from "../../../../../../Services/SignsOfPainsAppStateServic/Signs-of-pains-app-state-servic";
import Navbar from "../../../../../Navbar/Navbar";
import QuestNum from "../../../../../LayoutArea/QuestNum";
import BtnsBottom from "../../../../../LayoutArea/Layout/PageBtns/BtnsBottom";

function QuestionFiveWithHebHelp(): JSX.Element {
  const navigate = useNavigate();
  const signsOfPaint = { ...store.getState().PainsAppState.signsOFPain };
  const title = "";
  function wellHappenClickHandlerOnImageQuestionFiveWithHebHelp1ForFemaleImage(): void {
    if (signsOfPaint.losingWeight === true) {
      signsOfPaint.losingWeight = false;
      if (signsOfPaint.numberOfSignsOfPain !== undefined) {
        signsOfPaint.numberOfSignsOfPain -= 1;
      }
      signsOfPainsStateService.getSignsOfPainsState(signsOfPaint);
      navigate("/QuestionSixWithHebHelp");
    } else {
      signsOfPaint.losingWeight = false;
      signsOfPaint.numberOfSignsOfPain = signsOfPaint.numberOfSignsOfPain;
      signsOfPainsStateService.getSignsOfPainsState(signsOfPaint);
      navigate("/QuestionSixWithHebHelp");
    }
  }
  function badlyHappenClickHandlerOnImageQuestionFiveWithHebHelp1ForFemaleImage(): void {
    if (signsOfPaint.losingWeight === true) {
      signsOfPaint.losingWeight = true;
      if (signsOfPaint.numberOfSignsOfPain !== undefined) {
        signsOfPaint.numberOfSignsOfPain = signsOfPaint.numberOfSignsOfPain;
      }
      signsOfPainsStateService.getSignsOfPainsState(signsOfPaint);
      navigate("/QuestionSixWithHebHelp");
    } else {
      if (signsOfPaint.numberOfSignsOfPain !== undefined) {
        signsOfPaint.numberOfSignsOfPain += 1;
      }
      signsOfPaint.losingWeight = true;
      signsOfPainsStateService.getSignsOfPainsState(signsOfPaint);
      navigate("/QuestionSixWithHebHelp");
    }
  }
  return (
    <div className="questionBody  h-100 ">
      <Navbar />
      <QuestNum currentQuestNum={5} />
      <div className="MaleOrFemalePageWithHeb  px-0 container  h-75">
        <div className="mainImgs  h-100">
          <div className="imgL w-50 m-3  h-80">
            <img
              className="mw-100  mh-100"
              src={ImageQuestionFiveWithHebHelp1}
              onClick={
                badlyHappenClickHandlerOnImageQuestionFiveWithHebHelp1ForFemaleImage
              }
            />
            <Link to={"/QuestionOneForMale"} title="הבא"></Link>
          </div>
          <div className="imgR w-50 m-3  h-80">
            <img
              className=" mw-100 mh-100 "
              src={ImageQuestionFiveWithHebHelp2}
              onClick={
                wellHappenClickHandlerOnImageQuestionFiveWithHebHelp1ForFemaleImage
              }
            />
            <br />
          </div>
        </div>

        <div className="bottomPage">
          <BtnsBottom
            descriptions={title}
            clickBack={() => {
              navigate("/QuestionFourWithHebHelp");
            }}
            clickNext={() => navigate("/QuestionSixWithHebHelp")}
          />
        </div>
      </div>
    </div>
  );
}

export default QuestionFiveWithHebHelp;
