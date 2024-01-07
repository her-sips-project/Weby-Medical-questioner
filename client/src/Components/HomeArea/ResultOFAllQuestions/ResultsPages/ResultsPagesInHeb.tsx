import { useEffect, useState } from "react";
import { useLanguageNavigationToEn } from "../../../../Hooks/hooks";
import store from "../../../../Redux/ReduxStore/Store";
import Navbar from "../../../Navbar/Navbar";
import AddPatientInHeb from "../../../PatientsArea/AddPatientInHeb/AddPatientInHeb";
import ResultsInHeb from "../ResultOFAllQuestionsInHeb/ResultsInHeb/ResultsInHeb";
// import "./ResulOfQuestionsFemaleInHeb.css";
import "./ResultsPageStyle.css";

function ResultsPagesInHeb(): JSX.Element {
  const customRoutes = "/ResulOfQuestionsMale";
  useLanguageNavigationToEn(customRoutes);
  const [isMobile, setIsMobile] = useState(false);
  const [goToForm, setGoToForm] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 580);
      console.log(isMobile); // Set a breakpoint for mobile size
    };

    checkScreenSize(); // Initial check

    window.addEventListener("resize", checkScreenSize); // Listen for window resize

    return () => {
      window.removeEventListener("resize", checkScreenSize); // Clean up on unmount
    };
  }, []);

  const CompForLaptop = () => {
    return (
      <div>
        <Navbar />
        <div className="ResulOfQuestionsFemaleInHeb resultPage container">
          <AddPatientInHeb />
          <ResultsInHeb
            signsOfPain={{ ...store.getState().PainsAppState.signsOFPain }}
          />
        </div>
      </div>
    );
  };

  const CompForMobile = () => {
    return (
      <div className="">
        <Navbar />
        {!goToForm ? (
          <div className="ResulOfQuestionsFemaleInHeb resultPage container">
            <div>
              <ResultsInHeb
                signsOfPain={{ ...store.getState().PainsAppState.signsOFPain }}
              />
              <button
                onClick={() => {
                  setGoToForm(!goToForm);
                }}
              >
                שלח את התוצאות
              </button>
            </div>
          </div>
        ) : (
          <AddPatientInHeb />
        )}
      </div>
    );
  };

  return (
    <div className="">{isMobile ? <CompForMobile /> : <CompForLaptop />}</div>
  );
}

export default ResultsPagesInHeb;
