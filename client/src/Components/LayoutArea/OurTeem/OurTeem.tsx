import React, { useEffect, useState } from "react";
import store from "../../../Redux/ReduxStore/Store";
import { PainsAppState } from "../../../Redux/SignsOfPainsAppState/signs-0f-pains-app-state";
import signsOfPainsStateService from "../../../Services/SignsOfPainsAppStateServic/Signs-of-pains-app-state-servic";
const OurTeem = () => {
  const langStore = { ...store.getState().PainsAppState.signsOFPain };
  const [language, setLanguage] = useState(langStore.language);
  useEffect(() => {
    const unSubscribe = signsOfPainsStateService.subscribe(
      (painsState: PainsAppState): void => {
        const { signsOFPain, arrayOfImages } = painsState;
        if (signsOFPain?.language) {
          const language = signsOFPain.language;
          setLanguage(language);
        }
      }
    );
  }, []);
  return (
    <div>
      {(language==="english") ? (
        <aside className="en">
          <div>
            <button
              className="ButtonINMain
                 Box"
              title="
                1. Yael Shapira-Galitz, MD
                2. Keren Lupu-Stein, SLP 
                3. Meital Sharon, SLP 
                4. Shir Bouaron-Sharafi, SLP
                5. Boaz Gantz, SLP"
            >
              {" "}
              Our team
            </button>
          </div>
        </aside>
      ) : (
        <>
        <aside className="he">
        <div>
          <button
            className="ButtonINMain
            Box"
            title='
                      ד"ר יעל שפירא גליץ  רופאת אף אוזן וגרון. 

                           קרן לופו שטיין  קלינאית תקשורת. 

                                  מיטל שרון  קלינאית תקשורת. 

                             שיר בוארון שרפי  קלינאית תקשורת. 

                                      בעז גנץ  קלינאי תקשורת              
              '
          >
            הצוות שלנו
          </button>
        </div>
      </aside>
      </>
      )}
    </div>
  );
};

export default OurTeem;
