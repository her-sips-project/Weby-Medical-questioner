import mongoose from "mongoose";
const { Schema } = mongoose;

enum Gender {
  Male = "male",
  Female = "female",
  Other = "none",
}

export const MediaSchema = new Schema({
  name: String,
  gender: Gender,
});
