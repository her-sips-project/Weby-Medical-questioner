import "./QuestionTenForMale.css";
import imageQuestionTenForMale1 from "./../../../../../Assets/Images/imagesForMalesQuetion/Picture19.jpg";
import imageQuestionTenForMale2 from "./../../../../../Assets/Images/imagesForMalesQuetion/Picture20.jpg";
import { Link, useNavigate } from "react-router-dom";
import signsOfPainsStateService from "../../../../../Services/SignsOfPainsAppStateServic/Signs-of-pains-app-state-servic";
import store from "../../../../../Redux/ReduxStore/Store";
import PossibilityOfBackTothetweenQuestions from "../../../PossibilityOfBackTothetweenQuestions/PossibilityOfBackTothetweenQuestions";
import PossibilityOfNextTothetweenQuestions from "./../../../PossibilityOfNextTothetweenQuestions/PossibilityOfNextTothetweenQuestions";
import useLanguageNavigationToHeb from "../../../../../Hooks/hooks";
import Navbar from "../../../../Navbar/Navbar";
import QuestNum from "../../../../LayoutArea/QuestNum";
import BtnsBottom from "../../../../LayoutArea/Layout/PageBtns/BtnsBottom";
function QuestionTenForMale(): JSX.Element {
  const navigate = useNavigate();
  const signsOfPaint = { ...store.getState().PainsAppState.signsOFPain };
  const customRoutes = "/QuestionTenForMaleWithHebHelp";
  useLanguageNavigationToHeb(customRoutes);
  const title =
    "There are two images representing experiences of feeling anxious about swallowing. Choose the image that best represents your experience.";
  function wellHappenClickHandlerOnQuestionTenForMaleImage(): void {
    if (signsOfPaint.feelingAnxiousAboutSwallowing === true) {
      signsOfPaint.feelingAnxiousAboutSwallowing = false;
      if (signsOfPaint.numberOfSignsOfPain !== undefined) {
        signsOfPaint.numberOfSignsOfPain -= 1;
      }
      signsOfPainsStateService.getSignsOfPainsState(signsOfPaint);
      navigate("/ResulOfQuestionsMale");
    } else {
      signsOfPaint.feelingAnxiousAboutSwallowing = false;
      signsOfPaint.numberOfSignsOfPain = signsOfPaint.numberOfSignsOfPain;
      signsOfPainsStateService.getSignsOfPainsState(signsOfPaint);
      navigate("/ResulOfQuestionsMale");
    }
  }
  function badlyHappenClickHandlerOnQuestionTenForMaleImage(): void {
    if (signsOfPaint.feelingAnxiousAboutSwallowing === true) {
      signsOfPaint.feelingAnxiousAboutSwallowing = true;
      if (signsOfPaint.numberOfSignsOfPain !== undefined) {
        signsOfPaint.numberOfSignsOfPain = signsOfPaint.numberOfSignsOfPain;
      }
      signsOfPainsStateService.getSignsOfPainsState(signsOfPaint);
      navigate("/ResulOfQuestionsFemal");
    } else {
      if (signsOfPaint.numberOfSignsOfPain !== undefined) {
        signsOfPaint.numberOfSignsOfPain += 1;
      }
      signsOfPaint.feelingAnxiousAboutSwallowing = true;
      signsOfPainsStateService.getSignsOfPainsState(signsOfPaint);
      navigate("/ResulOfQuestionsMale");
    }
  }
  return (
    <div className="questionBody  h-100 ">
      <Navbar />
      <QuestNum currentQuestNum={10} />
      <div className="MaleOrFemalePageWithHeb  px-0 container  h-75">
        <div className="mainImgs  h-100">
          <div className="imgL w-50 m-3  h-80">
            <img
              className={`mw-100 mh-100 ${
                typeof signsOfPaint.feelingAnxiousAboutSwallowing !==
                "undefined"
                  ? signsOfPaint.feelingAnxiousAboutSwallowing
                    ? "selectedImg"
                    : "noSelectedImg"
                  : ""
              }`}
              src={imageQuestionTenForMale1}
              onClick={badlyHappenClickHandlerOnQuestionTenForMaleImage}
            />
          </div>
          <div className="imgR w-50 m-3  h-80">
            <img
              className={`mw-100 mh-100 ${
                typeof signsOfPaint.feelingAnxiousAboutSwallowing !==
                "undefined"
                  ? signsOfPaint.feelingAnxiousAboutSwallowing
                    ? "noSelectedImg"
                    : "selectedImg"
                  : ""
              }`}
              src={imageQuestionTenForMale2}
              onClick={wellHappenClickHandlerOnQuestionTenForMaleImage}
            />
            <br />
          </div>
        </div>

        <div className="bottomPage">
          <BtnsBottom
            descriptions={title}
            clickBack={() => {
              navigate("/QuestionNineForMale");
            }}
            // clickNext={() => navigate("/QuestionTwoWithHebHelp")}
            nextBtn={false}
          />
        </div>
      </div>
    </div>
  );
  return (
    <div className="QuestionTenForMale">
      <div>
        <img
          src={imageQuestionTenForMale1}
          onClick={badlyHappenClickHandlerOnQuestionTenForMaleImage}
        />
        <br />
        <Link to={"/QuestionNineForMale"} title="BACK">
          <label>
            <PossibilityOfBackTothetweenQuestions />
          </label>
        </Link>
        <Link to={""} title="NEXT">
          <label>
            <PossibilityOfNextTothetweenQuestions />
          </label>
        </Link>
      </div>
      <div>
        <img
          src={imageQuestionTenForMale2}
          onClick={wellHappenClickHandlerOnQuestionTenForMaleImage}
        />
        <br />
        <Link
          to={""}
          title="
        There are two images representing experiences of feeling anxious about swallowing.
         Choose the image that best represents your experience."
        >
          <label>
            <svg
              className="SvgQuestionNineForMale Box"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
            </svg>
          </label>
        </Link>
      </div>
    </div>
  );
}

export default QuestionTenForMale;
