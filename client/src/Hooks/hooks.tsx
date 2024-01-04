// useLanguageNavigation.js
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import signsOfPainsStateService from '../Services/SignsOfPainsAppStateServic/Signs-of-pains-app-state-servic';
import { PainsAppState } from '../Redux/SignsOfPainsAppState/signs-0f-pains-app-state';

const useLanguageNavigationToHeb = (customRoute: string) => {
    const navigate = useNavigate()
  const [language, setLanguage] = useState<string | undefined>("");
  
  useEffect(() => {
    const unSubscribe = signsOfPainsStateService.subscribe(
      (painsState: PainsAppState): void => {
        const { signsOFPain, arrayOfImages } = painsState;

        if (signsOFPain?.language === "hebrew") {
          console.log("change to hebrew");
          navigate(customRoute);
        }
      }
    );

    return () => {
      unSubscribe();
    };
  }, [customRoute]);

  return {}; 
};
export const useLanguageNavigationToEn = (customRoute: string) => {
    const navigate = useNavigate()
  const [language, setLanguage] = useState<string | undefined>("");
  
  useEffect(() => {
    const unSubscribe = signsOfPainsStateService.subscribe(
      (painsState: PainsAppState): void => {
        const { signsOFPain, arrayOfImages } = painsState;

        if (signsOFPain?.language === "english") {
          console.log("change to english");
          navigate(customRoute);
        }
      }
    );

    return () => {
      unSubscribe();
    };
  }, [customRoute]);

  return {}; 
};


export default useLanguageNavigationToHeb;
