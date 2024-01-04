import { useState } from "react";
import SignsOfPain from "../../../../Models/SignsOfPainsModel/SignsOfPainModel/Signs-Of-Pain-Model";
import store from "../../../../Redux/ReduxStore/Store";
import Results from "../Results/Results";
import AddPatient from "../../../PatientsArea/AddPatient/AddPatient";
import "./ResultsPageStyle.css";
import Navbar from "../../../Navbar/Navbar";
function ResultsPagesInEn(): JSX.Element {
  console.log(store.getState().PainsAppState.signsOFPain);
  return (
    <div className="" >
      <Navbar/>
      <div className="ResulOfQuestionsFemaleInHeb resultPage container">
        <Results
          signsOfPain={{ ...store.getState().PainsAppState.signsOFPain }}
        />
        <AddPatient />
      </div>
    </div>
  );
}

export default ResultsPagesInEn;
