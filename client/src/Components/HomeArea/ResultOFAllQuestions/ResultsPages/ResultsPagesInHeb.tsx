import store from "../../../../Redux/ReduxStore/Store";
import Navbar from "../../../Navbar/Navbar";
import AddPatientInHeb from "../../../PatientsArea/AddPatientInHeb/AddPatientInHeb";
import ResultsInHeb from "../ResultOFAllQuestionsInHeb/ResultsInHeb/ResultsInHeb";
// import "./ResulOfQuestionsFemaleInHeb.css";

function ResultsPagesInHeb(): JSX.Element {
  console.log(store.getState().PainsAppState.signsOFPain);
  return (
    <div className="ResulOfQuestionsFemaleInHeb resultPage container">
      <Navbar/>
      <div>
        <AddPatientInHeb />
        <ResultsInHeb
          signsOfPain={{ ...store.getState().PainsAppState.signsOFPain }}
        />
      </div>
    </div>
  );
}

export default ResultsPagesInHeb;
