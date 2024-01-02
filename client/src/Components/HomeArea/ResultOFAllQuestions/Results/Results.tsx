import SignsOfPain from "../../../../Models/SignsOfPainsModel/SignsOfPainModel/Signs-Of-Pain-Model";
import "./Results.scss";
import Patient from "../../../../Models/PatientsModel/PatientModel/Patient-model";
import { SyntheticEvent } from "react";
import { useNavigate } from "react-router-dom";
import { BiSolidDislike, BiSolidLike } from "react-icons/bi";
interface ResultsProps {
  signsOfPain?: SignsOfPain;
  patient?: Patient;
}

function Results(props: ResultsProps): JSX.Element {
  const navigate = useNavigate();
  function isChecked(args: SyntheticEvent) {
    navigate("/AddPatient");
  }
  return (
    <div className="ResultsInEn resultDiv container w-50">
      <div className="div2">
        <div className="numPage">
          <h5 className="resultHead">Total Result</h5>
          <div className="numPage">
            <span className="currentNum number circle">
              {props.signsOfPain?.numberOfSignsOfPain || 0}
            </span>
            <span className="slash">/</span>
            <span className="number circle">10</span>
          </div>
        </div>
        <ol>
          <li>
            <label>
              Difficulty swallowing liquids:
            </label>
              {props.signsOfPain?.difficultySwallowingLiquids ? (
                <BiSolidLike className="icon like" />
              ) : (
                <BiSolidDislike className="icon disLike" />
              )}
          </li>
          <li>
            <label>
              Difficultry swallowing solid food:
            </label>
              {props.signsOfPain?.difficultrySwallowingSolidFood ? (
                <BiSolidLike className="icon like" />
              ) : (
                <BiSolidDislike className="icon disLike" />
              )}
          </li>
          <li>
            <label>
              Difficulty swallowing pills:
            </label>
              {props.signsOfPain?.difficultySwallowingPills ? (
                <BiSolidLike className="icon like" />
              ) : (
                <BiSolidDislike className="icon disLike" />
              )}
          </li>
          <li>
            <label>
              Coughing while eating:
            </label>
              {props.signsOfPain?.coughingWhileEating ? (
                <BiSolidLike className="icon like" />
              ) : (
                <BiSolidDislike className="icon disLike" />
              )}
          </li>
          <li>
            <label>
              Losing weight:
            </label>
              {props.signsOfPain?.losingWeight ? (
                <BiSolidLike className="icon like" />
              ) : (
                <BiSolidDislike className="icon disLike" />
              )}
          </li>
          <li>
            <label>
              Choking during meals:
            </label>
              {props.signsOfPain?.ChokingDuringMeals ? (
                <BiSolidLike className="icon like" />
              ) : (
                <BiSolidDislike className="icon disLike" />
              )}
          </li>
          <li>
            <label>
              Avoiding eating with others:
            </label>
              {props.signsOfPain?.AvoidingEatingWithOthers ? (
                <BiSolidLike className="icon like" />
              ) : (
                <BiSolidDislike className="icon disLike" />
              )}
          </li>
          <li>
            <label>
              Pain while swallowing:
            </label>
              {props.signsOfPain?.PainWhileSwallowing ? (
                <BiSolidLike className="icon like" />
              ) : (
                <BiSolidDislike className="icon disLike" />
              )}
          </li>
          <li>
            <label>
              Enjoying meals:
            </label>
              {props.signsOfPain?.EnjoyingMeals ? (
                <BiSolidLike className="icon like" />
              ) : (
                <BiSolidDislike className="icon disLike" />
              )}
          </li>
          <li>
            <label>
              Feeling anxious about swallowing:
            </label>
              {props.signsOfPain?.feelingAnxiousAboutSwallowing ? (
                <BiSolidLike className="icon like" />
              ) : (
                <BiSolidDislike className="icon disLike" />
              )}
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Results;
