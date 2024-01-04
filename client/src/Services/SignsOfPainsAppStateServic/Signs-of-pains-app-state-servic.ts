import { Unsubscribe } from "redux";
import {
  PainsAppState,
  addArrayOfImagesAction,
  addPainAction,
} from "../../Redux/SignsOfPainsAppState/signs-0f-pains-app-state";
import SignsOfPain from "./../../Models/SignsOfPainsModel/SignsOfPainModel/Signs-Of-Pain-Model";
import store from "./../../Redux/ReduxStore/Store";
import { PatientsModelAction, PatientsModelAppState } from "../../Redux/PatientsModelAppState/PatientsModel-AppState";


export class SignsOfPainsStateService {
  public getSignsOfPainsState(signsOfPains: SignsOfPain): void {
    if (signsOfPains != null) {
      store.dispatch(addPainAction(signsOfPains));
    }
  }

  public getArrayOfImagesPainsState(signsOfPains: SignsOfPain): void {
    if (signsOfPains != null) {
      // console.log("addArrayOfImagesAction(signsOfPains)");
      // console.log(signsOfPains);
      store.dispatch(addArrayOfImagesAction(signsOfPains));
    }
  }
  //Hock...
  public subscribe(changeListener:(painsState:PainsAppState)=>void):Unsubscribe{
    return  store.subscribe(()=>changeListener(store.getState().PainsAppState));
   }
  public subscribeForPatient(changeListener:(painsState:PatientsModelAppState)=>void):Unsubscribe{
    return  store.subscribe(()=>changeListener(store.getState().PatientsAppState));
   }
}
const signsOfPainsStateService = new SignsOfPainsStateService();

export default signsOfPainsStateService;
