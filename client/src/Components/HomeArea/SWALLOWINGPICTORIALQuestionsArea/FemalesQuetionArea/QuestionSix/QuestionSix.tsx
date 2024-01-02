import "./QuestionSix.css";
import signsOfPainsStateService from "../../../../../Services/SignsOfPainsAppStateServic/Signs-of-pains-app-state-servic";
import ImageQuestionSix1 from   "./../../../../../Assets/Images/imagesForFemalesQuetion/Picture11.jpg";
import ImageQuestionSix2 from   "./../../../../../Assets/Images/imagesForFemalesQuetion/Picture12.jpg";
import { Link, useNavigate } from "react-router-dom";
import PossibilityOfBackTothetweenQuestions from "../../../PossibilityOfBackTothetweenQuestions/PossibilityOfBackTothetweenQuestions";
import PossibilityOfNextTothetweenQuestions from "../../../PossibilityOfNextTothetweenQuestions/PossibilityOfNextTothetweenQuestions";
import store from "../../../../../Redux/ReduxStore/Store";
import useLanguageNavigationToHeb from "../../../../../Hooks/hooks";
import Navbar from "../../../../Navbar/Navbar";
import QuestNum from "../../../../LayoutArea/QuestNum";
import BtnsBottom from "../../../../LayoutArea/Layout/PageBtns/BtnsBottom";
function QuestionSix(): JSX.Element {
    const navigate = useNavigate();
    const signsOfPaint = {...store.getState().PainsAppState.signsOFPain}
    const customRoutes = "/QuestionSixWithHebHelp";
    useLanguageNavigationToHeb(customRoutes);

    const title="There are two images representing experiences regarding choking while eating.Choose the image that best represents your experience."
    
    function  wellHappenClickHandlerOnQuestionSixForFemaleImage():void{
        if(signsOfPaint.ChokingDuringMeals === true) {
            signsOfPaint.ChokingDuringMeals = false;
            if(signsOfPaint.numberOfSignsOfPain !== undefined) {
                signsOfPaint.numberOfSignsOfPain -= 1;
            }
            signsOfPainsStateService.getSignsOfPainsState(signsOfPaint); 
            navigate('/QuestionSeven');
    }
    else{
    signsOfPaint.ChokingDuringMeals = false;
    signsOfPaint.numberOfSignsOfPain = signsOfPaint.numberOfSignsOfPain ;
    signsOfPainsStateService.getSignsOfPainsState(signsOfPaint); 
    navigate('/QuestionSeven');
}
   }
    function  badlyHappenClickHandlerOnQuestionSixForFemaleImage():void{
          if(signsOfPaint.ChokingDuringMeals === true) {
            signsOfPaint.ChokingDuringMeals = true;
                if(signsOfPaint.numberOfSignsOfPain !== undefined){
                    signsOfPaint.numberOfSignsOfPain = signsOfPaint.numberOfSignsOfPain;;
                }
                signsOfPainsStateService.getSignsOfPainsState(signsOfPaint); 
                navigate('/QuestionSeven');
        }
        else{
            if(signsOfPaint.numberOfSignsOfPain !== undefined){
                signsOfPaint.numberOfSignsOfPain += 1;
            }
        signsOfPaint.ChokingDuringMeals = true;
        signsOfPainsStateService.getSignsOfPainsState(signsOfPaint); 
        navigate('/QuestionSeven');
    }
}
return (
    <div className="questionBody  h-100 ">
      <Navbar />
      <QuestNum currentQuestNum={6} />
      <div className="MaleOrFemalePageWithHeb  px-0 container  h-75">
        <div className="mainImgs  h-100">
          <div className="imgL w-50 m-3  h-80">
            <img
              className="mw-100  mh-100"
              src={ImageQuestionSix1}
              onClick={
                badlyHappenClickHandlerOnQuestionSixForFemaleImage
              }
            />
          </div>
          <div className="imgR w-50 m-3  h-80">
            <img
              className=" mw-100 mh-100 "
              src={ImageQuestionSix2}
              onClick={
                wellHappenClickHandlerOnQuestionSixForFemaleImage
              }
            />
            <br />
          </div>
        </div>

        <div className="bottomPage">
          <BtnsBottom
            descriptions={title}
            clickBack={() => {
              navigate("/QuestionFive");
            }}
            clickNext={() => navigate("/QuestionSeven")}
          />
        </div>
      </div>
    </div>
)
  
}

export default QuestionSix;
