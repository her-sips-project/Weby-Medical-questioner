import store from "../../../../../Redux/ReduxStore/Store";
import AddPatientInHeb from "../../../../PatientsArea/AddPatientInHeb/AddPatientInHeb";
import ResultsInHeb from "../ResultsInHeb/ResultsInHeb";
import "./ResulOfQuestionsFemaleInHeb.css";

function ResulOfQuestionsFemaleInHeb(): JSX.Element {
  console.log(store.getState().PainsAppState.signsOFPain);
  return (
    <div className="ResulOfQuestionsFemaleInHeb resultPage container">
      {/* <h1>מין:נקבה</h1> */}
      <AddPatientInHeb />
      <ResultsInHeb
        signsOfPain={{ ...store.getState().PainsAppState.signsOFPain }}
      />
    </div>
  );
}

export default ResulOfQuestionsFemaleInHeb;
