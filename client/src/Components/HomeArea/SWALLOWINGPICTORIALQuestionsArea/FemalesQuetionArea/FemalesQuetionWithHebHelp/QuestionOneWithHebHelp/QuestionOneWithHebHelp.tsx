import "./QuestionOneWithHebHelp.css";
import ImageQuestionOneWithHebHelp1 from "./../../../../../../Assets/Images/imagesForFemalesQuetion/Picture1.gif";
import ImageQuestionOneWithHebHelp2 from "./../../../../../../Assets/Images/imagesForFemalesQuetion/Picture2.gif";
import { Link, useNavigate } from "react-router-dom";
import signsOfPainsStateService from "../../../../../../Services/SignsOfPainsAppStateServic/Signs-of-pains-app-state-servic";
import store from "../../../../../../Redux/ReduxStore/Store";
import PossibilityOfBackTothetweenQuestions from "../../../../PossibilityOfBackTothetweenQuestions/PossibilityOfBackTothetweenQuestions";
import PossibilityOfNextTothetweenQuestions from "../../../../PossibilityOfNextTothetweenQuestions/PossibilityOfNextTothetweenQuestions";
import Navbar from "../../../../../Navbar/Navbar";
import QuestNum from "../../../../../LayoutArea/QuestNum";
import BtnsBottom from "../../../../../LayoutArea/Layout/PageBtns/BtnsBottom";
import { useEffect, useState } from "react";
import { PainsAppState } from "../../../../../../Redux/SignsOfPainsAppState/signs-0f-pains-app-state";
import { useLanguageNavigationToEn } from "../../../../../../Hooks/hooks";
function QuestionOneWithHebHelp(): JSX.Element {
  const [language, setLanguage] = useState<string | undefined>("");
  const signsOFPain = { ...store.getState().PainsAppState };

  const customRoutes = "/QuestionOne";
  useLanguageNavigationToEn(customRoutes);

  useEffect(() => {
    const unSubscribe = signsOfPainsStateService.subscribe(
      (painsState: PainsAppState): void => {
        const { signsOFPain, arrayOfImages } = painsState;

        if (signsOFPain?.language) {
          const language = signsOFPain.language;
          setLanguage(language);
        }
      }
    );
  }, []);

  useEffect(()=>{
    if(language=="english"){
      console.log("change to english")
      navigate("/question-one-for-female")
    }
  }, [language])

  const navigate = useNavigate();
  const signsOfPaint = { ...store.getState().PainsAppState.signsOFPain };
  const title =
    " לפניך מוצגות שתי תמונות המייצגות חוויה שקשורה ליכולת שלך לבלוע נוזלים יש לבחור בתמונה הנכונה עבורך.";
  function wellHappenClickHandlerOnQuestionOneWithHebHelpForFemaleImage(): void {
    if (signsOfPaint.difficultySwallowingLiquids === true) {
      signsOfPaint.difficultySwallowingLiquids = false;
      if (signsOfPaint.numberOfSignsOfPain !== undefined) {
        signsOfPaint.numberOfSignsOfPain -= 1;
      }
      signsOfPainsStateService.getSignsOfPainsState(signsOfPaint);
      navigate("/QuestionTwoWithHebHelp");
    } else {
      signsOfPaint.difficultySwallowingLiquids = false;
      signsOfPaint.numberOfSignsOfPain = 0;
      signsOfPainsStateService.getSignsOfPainsState(signsOfPaint);
      navigate("/QuestionTwoWithHebHelp");
    }
  }
  function badlyHappenClickHandlerOnQuestionOneWithHebHelpForFemaleImage(): void {
    if (signsOfPaint.difficultySwallowingLiquids === true) {
      if (signsOfPaint.numberOfSignsOfPain !== undefined) {
        signsOfPaint.numberOfSignsOfPain = signsOfPaint.numberOfSignsOfPain;
        signsOfPaint.difficultySwallowingLiquids = true;
        signsOfPainsStateService.getSignsOfPainsState(signsOfPaint);
        navigate("/QuestionTwoWithHebHelp");
      }
    } else {
      signsOfPaint.difficultySwallowingLiquids = true;
      signsOfPaint.numberOfSignsOfPain = 1;
      signsOfPainsStateService.getSignsOfPainsState(signsOfPaint);
      navigate("/QuestionTwoWithHebHelp");
    }
  }

  return (
        <div className="questionBody  h-100 ">
          <Navbar />
          <QuestNum currentQuestNum={1} />
          <div className="MaleOrFemalePageWithHeb  px-0 container  h-75">
            <div className="mainImgs  h-100">
              <div className="imgL w-50 m-3  h-80">
                <img 
              className={`mw-100  mh-100 ${signsOfPaint.difficultySwallowingLiquids ? "selectedImg":""}`}
              src={ImageQuestionOneWithHebHelp1}
                  onClick={
                    badlyHappenClickHandlerOnQuestionOneWithHebHelpForFemaleImage
                  }
                />
              </div>
              <div className="imgR w-50 m-3  h-80">
                <img
                  className=" mw-100 mh-100 "
                  src={ImageQuestionOneWithHebHelp2}
                  onClick={
                    wellHappenClickHandlerOnQuestionOneWithHebHelpForFemaleImage
                  }
                />
                <br />
              </div>
            </div>

            <div className="bottomPage">
              <BtnsBottom
                descriptions={title}
                clickBack={() => {
                  navigate("/MaleOrFemalePageWithHeb");
                }}
                clickNext={() => navigate("/QuestionTwoWithHebHelp")}
              />
            </div>
          </div>
        </div>
  )
}

export default QuestionOneWithHebHelp;
