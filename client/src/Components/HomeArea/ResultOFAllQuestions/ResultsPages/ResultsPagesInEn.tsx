import { useEffect, useState } from "react";
import SignsOfPain from "../../../../Models/SignsOfPainsModel/SignsOfPainModel/Signs-Of-Pain-Model";
import store from "../../../../Redux/ReduxStore/Store";
import Results from "../Results/Results";
import AddPatient from "../../../PatientsArea/AddPatient/AddPatient";
import "./ResultsPageStyle.css";
import Navbar from "../../../Navbar/Navbar";
import useLanguageNavigationToHeb from "../../../../Hooks/hooks";

function ResultsPagesInEn(): JSX.Element {
  const [isMobile, setIsMobile] = useState(false);
  const [goToForm, setGoToForm] = useState(false);

  const customRoutes = "/ResulOfQuestionsMaleInHeb";
  useLanguageNavigationToHeb(customRoutes);

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
      <div className="">
        <Navbar />
        <div className="ResulOfQuestionsFemaleInHeb resultPage container">
          <Results
            signsOfPain={{ ...store.getState().PainsAppState.signsOFPain }}
          />
          <AddPatient />
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
              <Results
                signsOfPain={{ ...store.getState().PainsAppState.signsOFPain }}
              />
              <button
                onClick={() => {
                  setGoToForm(!goToForm);
                }}
              >
                send me results
              </button>
            </div>
          </div>
        ) : (
          <AddPatient />
        )}
      </div>
    );
  };

  return (
    <div className="">
      {isMobile ? <CompForMobile /> : <CompForLaptop />}
    </div>
  );
}

export default ResultsPagesInEn;
