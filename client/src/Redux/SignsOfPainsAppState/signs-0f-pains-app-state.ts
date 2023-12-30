import SignsOfPain from "./../../Models/SignsOfPainsModel/SignsOfPainModel/Signs-Of-Pain-Model";
export class PainsAppState {
  public signsOFPain?: SignsOfPain;
  public arrayOfImages?:any[];
  public constructor() {
    this.arrayOfImages=[];
    const cernentPainstPains = sessionStorage.getItem("cernentPainstPains");
    //this.signsOFPain = sessionStorage.getItem("cernentPainstPains");
    const cernentPainstPainsUpDate = sessionStorage.getItem(
      "cernentPainstPainsUpDate"
    );

    if (!cernentPainstPains) {
      // this.signsOFPain=cernentPainstPains;
    }
    if (!cernentPainstPainsUpDate) {
      // this.signsOFPain=cernentPainstPainsUpDate;
    }
  }
}
export enum PainsActionType {
  AddPains = "AddPains",
  AddArrayOfImages = "AddArrayOfImages",
  UpDatePains = "UpDatePains",
  DeletePains = "DeletePains",
  SetPains = "SetPains",
}
export interface PainsAction {
  type: PainsActionType;
  payLoad: any;
}
export function addArrayOfImagesAction(signsOFPain:SignsOfPain): PainsAction {
  return { type: PainsActionType.AddArrayOfImages, payLoad:signsOFPain};
}
export function addPainAction(signsOFPain: SignsOfPain): PainsAction {
  return { type: PainsActionType.AddPains, payLoad: signsOFPain };
}
export function upDatePainAction(
  signsOFPainTOUpDate: SignsOfPain
): PainsAction {
  return { type: PainsActionType.UpDatePains, payLoad: signsOFPainTOUpDate };
}
export function deletePainAction(
  numberSignsOFPainTODelete: number
): PainsAction {
  return {
    type: PainsActionType.UpDatePains,
    payLoad: numberSignsOFPainTODelete,
  };
}
export function setPainsAction(allSignsOFPains: SignsOfPain[]): PainsAction {
  return { type: PainsActionType.UpDatePains, payLoad: allSignsOFPains };
}
export function painsReducer(
  painsAppState: PainsAppState = new PainsAppState(),
  painsAction: PainsAction
): PainsAppState {
  const newPainsAppState: PainsAppState = new PainsAppState();
  switch (painsAction.type) {
    case PainsActionType.AddPains:
      newPainsAppState.signsOFPain = painsAction.payLoad;
      // console.log("This is a painsReducer function");
      // console.log(newPainsAppState.signsOFPain);
      sessionStorage.setItem("cernentPainstPains", painsAction.payLoad);
      break;
      case PainsActionType.AddArrayOfImages:
        newPainsAppState.arrayOfImages = painsAction.payLoad.arrayOfImages;
        // console.log(painsAction.payLoad.arrayOfImages);
        // console.log("This is a painsReducer function  arrayOfImages");
        // console.log(newPainsAppState.arrayOfImages);
        sessionStorage.setItem("AddArrayOfImages", painsAction.payLoad.arrayOfImages);
        break;
    case PainsActionType.UpDatePains:
      newPainsAppState.signsOFPain = painsAction.payLoad;
      sessionStorage.setItem("cernentPainstPainsUpDate", painsAction.payLoad);
      break;
    case PainsActionType.DeletePains:
      //
      break;
    case PainsActionType.SetPains:
      //
      break;
  }
  return newPainsAppState;
}