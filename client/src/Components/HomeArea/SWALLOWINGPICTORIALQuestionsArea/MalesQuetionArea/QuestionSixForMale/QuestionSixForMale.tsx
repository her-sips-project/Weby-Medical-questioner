import { Link, useNavigate } from "react-router-dom";
import "./QuestionSixForMale.css";
import  imageQuestionSixForMale1 from  "./../../../../../Assets/Images/imagesForMalesQuetion/Picture11.jpg";
import  imageQuestionSixForMale2 from  "./../../../../../Assets/Images/imagesForMalesQuetion/Picture12.jpg";
import signsOfPainsStateService from "../../../../../Services/SignsOfPainsAppStateServic/Signs-of-pains-app-state-servic";
import PossibilityOfBackTothetweenQuestions from "../../../PossibilityOfBackTothetweenQuestions/PossibilityOfBackTothetweenQuestions";
import PossibilityOfNextTothetweenQuestions from './../../../PossibilityOfNextTothetweenQuestions/PossibilityOfNextTothetweenQuestions';
import store from "../../../../../Redux/ReduxStore/Store";
import useLanguageNavigationToHeb from "../../../../../Hooks/hooks";
import Navbar from "../../../../Navbar/Navbar";
import QuestNum from "../../../../LayoutArea/QuestNum";
import BtnsBottom from "../../../../LayoutArea/Layout/PageBtns/BtnsBottom";
function QuestionSixForMale(): JSX.Element {
    const navigate = useNavigate();
    const signsOfPaint = {...store.getState().PainsAppState.signsOFPain};
    const customRoutes = "/QuestionSixForMaleWithHebHelp";
    useLanguageNavigationToHeb(customRoutes);

    const title="There are two images representing experiences regarding choking while eating.Choose the image that best represents your experience."
    function  wellHappenClickHandlerOnQuestionSixForMaleImage():void{
        if(signsOfPaint.ChokingDuringMeals === true) {
            signsOfPaint.ChokingDuringMeals = false;
            if(signsOfPaint.numberOfSignsOfPain !== undefined) {
                signsOfPaint.numberOfSignsOfPain -= 1;
            }
            signsOfPainsStateService.getSignsOfPainsState(signsOfPaint); 
            navigate('/QuestionSevenForMale');
    }
    else{
    signsOfPaint.ChokingDuringMeals = false;
    signsOfPaint.numberOfSignsOfPain = signsOfPaint.numberOfSignsOfPain ;
    signsOfPainsStateService.getSignsOfPainsState(signsOfPaint); 
    navigate('/QuestionSevenForMale');
}    
    }
    function  badlyHappenClickHandlerOnQuestionSixForMaleImage():void{
        if(signsOfPaint.ChokingDuringMeals === true) {
            signsOfPaint.ChokingDuringMeals = true;
                if(signsOfPaint.numberOfSignsOfPain !== undefined){
                    signsOfPaint.numberOfSignsOfPain = signsOfPaint.numberOfSignsOfPain;;
                }
                signsOfPainsStateService.getSignsOfPainsState(signsOfPaint); 
                navigate('/QuestionSevenForMale');
            }
        else{
            if(signsOfPaint.numberOfSignsOfPain !== undefined){
                signsOfPaint.numberOfSignsOfPain += 1;
            }
        signsOfPaint.ChokingDuringMeals = true;
        signsOfPainsStateService.getSignsOfPainsState(signsOfPaint); 
        navigate('/QuestionSevenForMale');
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
                  src={imageQuestionSixForMale1}
                  onClick={
                    badlyHappenClickHandlerOnQuestionSixForMaleImage
                  }
                />
              </div>
              <div className="imgR w-50 m-3  h-80">
                <img
                  className=" mw-100 mh-100 "
                  src={imageQuestionSixForMale2}
                  onClick={
                    wellHappenClickHandlerOnQuestionSixForMaleImage
                  }
                />
                <br />
              </div>
            </div>

            <div className="bottomPage">
              <BtnsBottom
                descriptions={title}
                clickBack={() => {
                  navigate("/QuestionFiveForMale");
                }}
                clickNext={() => navigate("/QuestionSevenForMale")}
              />
            </div>
          </div>
        </div>
  )
                
}

export default QuestionSixForMale;
