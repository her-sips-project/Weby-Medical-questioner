import { SyntheticEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Patient from "../../../../../Models/PatientsModel/PatientModel/Patient-model";
import SignsOfPain from "../../../../../Models/SignsOfPainsModel/SignsOfPainModel/Signs-Of-Pain-Model";
import AddPatientInHeb from "../../../../PatientsArea/AddPatientInHeb/AddPatientInHeb";
// import BiSolidDislike from "../../../../shared/BiSolidDislike/BiSolidDislike";
// import BiSolidLike from "../../../../shared/BiSolidLike/BiSolidLike";
import { BiSolidDislike, BiSolidLike } from "react-icons/bi";
import "./ResultsInHeb.scss";
import store from "../../../../../Redux/ReduxStore/Store";
interface ResultsProps {
  signsOfPain?: SignsOfPain;
  patient?: Patient;
}

function ResultsInHeb(props: ResultsProps): JSX.Element {
  const navigate = useNavigate();
  const [isAgreeSips, setIsAgreeSips] = useState(false);
  const [isAgreeHimself, setIsAgreeHimself] = useState(false);
  const getPatient = {
    ...store.getState().PatientsAppState.patientModelAppState,
  };
  function isChecked(args: SyntheticEvent) {
    if ((args.target as HTMLInputElement).name === "sips") {
      getPatient.isAgreeSips = true;
      setIsAgreeSips(true);
      console.log((args.target as HTMLInputElement).name);
    }
    if ((args.target as HTMLInputElement).name === "email") {
      getPatient.isAgreeHimself = true;
      setIsAgreeHimself(true);
    }
  }
  console.log("Results");
  console.log(props.signsOfPain);
  useEffect(() => {
    console.log(" ResultsInHeb====================");
    console.log(store.getState().PainsAppState);
  }, []);
  return (
    <div className="ResultsInHeb  resultDiv container w-50">
      <div className="div2 ">
        <br />
        <div className="numPage">
          <div className="numPage">
            <span className="currentNum number circle">
              {props.signsOfPain?.numberOfSignsOfPain || 0}
            </span>
            <span className="slash">/</span>
            <span className="number circle">10</span>
          </div>
          <h5 className="resultHead">תוצאה סופית</h5>
        </div>
        <ol dir="rtl">
          <li>
            <label>
              {props.signsOfPain?.difficultySwallowingLiquids ? (
                <BiSolidLike className="icon like" />
              ) : (
                <BiSolidDislike className="icon disLike" />
              )}
            </label>
            <label className="signType">קושי בשתיית נוזלים</label>
          </li>
          <li>
            <label>
              {props.signsOfPain?.difficultrySwallowingSolidFood ? (
                <BiSolidLike className="icon like" />
              ) : (
                <BiSolidDislike className="icon disLike" />
              )}
            </label>
            <label className="signType">קושי באכילת מוצקים</label>
          </li>
          <li>
            <label>
              {props.signsOfPain?.difficultySwallowingPills ? (
                <BiSolidLike className="icon like" />
              ) : (
                <BiSolidDislike className="icon disLike" />
              )}
            </label>
            <label className="signType">קושי בבליעת תרופות</label>
          </li>
          <li>
            <label>
              {props.signsOfPain?.coughingWhileEating ? (
                <BiSolidLike className="icon like" />
              ) : (
                <BiSolidDislike className="icon disLike" />
              )}
            </label>
            <label className="signType">שיעול באכילה</label>
          </li>
          <li>
            <label>
              {props.signsOfPain?.losingWeight ? (
                <BiSolidLike className="icon like" />
              ) : (
                <BiSolidDislike className="icon disLike" />
              )}
            </label>
            <label className="signType">ירידה במשקל</label>
          </li>
          <li>
            <label>
              {props.signsOfPain?.ChokingDuringMeals ? (
                <BiSolidLike className="icon like" />
              ) : (
                <BiSolidDislike className="icon disLike" />
              )}
            </label>
            <label className="signType">מחנק בזמן האוכל</label>
          </li>
          <li>
            <label>
              {props.signsOfPain?.AvoidingEatingWithOthers ? (
                <BiSolidLike className="icon like" />
              ) : (
                <BiSolidDislike className="icon disLike" />
              )}
            </label>
            <label className="signType">המנעות מאכילה בחברה</label>
          </li>
          <li>
            <label>
              {props.signsOfPain?.PainWhileSwallowing ? (
                <BiSolidLike className="icon like" />
              ) : (
                <BiSolidDislike className="icon disLike" />
              )}
            </label>
            <label className="signType">כאב בבליעה</label>
          </li>
          <li>
            <label>
              {props.signsOfPain?.EnjoyingMeals ? (
                <BiSolidLike className="icon like" />
              ) : (
                <BiSolidDislike className="icon disLike" />
              )}
            </label>
            <label className="signType">הנאה מאכילה</label>
          </li>
          <li>
            <label>
              {props.signsOfPain?.feelingAnxiousAboutSwallowing ? (
                <BiSolidLike className="icon like" />
              ) : (
                <BiSolidDislike className="icon disLike" />
              )}
            </label>
            <label className="signType">חרדה מאכילה</label>
          </li>
        </ol>

        {/* <AddPatientInHeb /> */}
      </div>
    </div>
  );
}

export default ResultsInHeb;
