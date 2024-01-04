import React, { useEffect, useState } from "react";
import store from "../../../Redux/ReduxStore/Store";
import signsOfPainsStateService from "../../../Services/SignsOfPainsAppStateServic/Signs-of-pains-app-state-servic";
import { PainsAppState } from "../../../Redux/SignsOfPainsAppState/signs-0f-pains-app-state";
const About = () => {
  const langStore = { ...store.getState().PainsAppState.signsOFPain };
  const [language, setLanguage] = useState(langStore.language);
  const hoverStyle: React.CSSProperties = {
    cursor: 'pointer',
  };
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
      {language === "english" ? (
        //  באנגלית  About  החלק הזה 
        <div className="container">
        <p style={{ fontFamily: "Poppins" , ...hoverStyle }}
          className="ButtonINMain "
          title="
           To improve the existing variety of screening test to detect dysphagia we developed this online survey called SIPS – Swallowing Impairment Pictorial Survey. 
           The survey is image-based, and is easy and simple to use. 
           10 pairs of images are presented, each presenting a scenario that is common among people with disordered swallowing . 
           We hope this screening tool will aid medical teams to detect and treat people with swallowing disorders. 
           The survey was developed by a team of speech and language pathologists,  and an otolaryngologist.                
           "
        >
          {" "}
          ABOUT{" "}
        </p>
      </div>
      ) : (
        <>
          <aside className="he">
          <div>
            <p style={{ fontFamily: "Poppins" , ...hoverStyle }}
              className="ButtonINMain"
              title="
               SIPS –. 
               על מנת לשפר את האמצעים הקיימים לביצוע בדיקות סקר לאיתור הפרעות בליעה, פיתחנו את השאלון המקוון שמופיע באתר הזה שנקרא 
               Swallowing Impairment Pictorial Survey
               נות
               השאלון מבוסס כולו על תמונות, והוא פשוט וקל לשימוש.
               
               השאלון מציג זוגות של תמונות, בהן מוצגים תרחישים אופיינים לאנשים ונשים עם קשיי בליעה.
             
               אנו מקווים שהשאלון יהווה כלי עזר לצוותים רפואיים ופארא-רפואיים באיתור וטיפול באוכלוסייה עם קשיי בליעה. 
               השאלון פותח על ידי צוות שכלל קלינאיות תקשורת ורופאת אף אוזן וגרון.                
               "
            >
              {" "}
              אודות{" "}
            </p>
          </div>
        </aside>
        </>
      )}
    </div>
  );
};

export default About;
