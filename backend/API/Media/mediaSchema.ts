import mongoose, { model } from "mongoose";
const { Schema } = mongoose;


export enum Gender {
  Male = "male",
  Female = "female",
  None = "none",
}

// ----------------------------------------------------------------------------

export const MediaSchema = new Schema({
  name: {type:String, require:true},
  gender: {type:String, enum: Object.values(Gender), default:Gender.None},
  numberOfQues: Number,
  imgUrl: {type:String, require:true},
});


const MediaModel = model("media", MediaSchema);
export default MediaModel;
