import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { Schema, model } from "mongoose";
import fs from "fs";
const dotenv = require("dotenv");
import path from 'path';
import emailRoutes from "./API/emailRoutes";
import { Gender } from "./API/Media/mediaSchema";
import mediaRouter from "./API/Media/mediaRoutes"

dotenv.config();
const { mongo_URI } = process.env;


const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(cors());
console.log("hallo app")

app.use("/api/v1/email", emailRoutes);
app.use("/api/v1/media", mediaRouter);

const server = app.listen(PORT, () => {
  console.log(`server is listening in port:${PORT} :)`);
});

mongoose.connect(`${mongo_URI}`).then(() => {
  console.log("Connected to MongoDB!!!");
}).catch((err: any) => console.error(err));  




// // --UPLOADING FILES --------------------------------
// export const MediaSchema = new Schema({
//   name: {type:String, require:true},
//   gender: {type:String, enum: Object.values(Gender), default:Gender.None},
//   numberOfQues: Number,
//   imgUrl: {type:String, require:true},
// });


// const MediaModel = model("media", MediaSchema);

// const directoryPath =
//   "../client/src/Assets/Images/image1MaleGif"; // כתובת התיקייה שבה נמצאים התמונות

// fs.readdir(directoryPath, async (err, files) => {
//   if (err) {
//     console.error("Error reading directory:", err);
//     return;
//   }

//   for (const file of files) {
//     const imagePath = path.join(directoryPath, file);
//     const imageBuffer = fs.readFileSync(imagePath);
//     const numberOfQuestion = Math.floor((parseInt(file.replace(/\D/g, ''))+1) /2);
    
//     console.log(file + "       +      " + numberOfQuestion)
//     // try {
//     //   console.log("on processing....");
//     //   const newImage = new MediaModel({
//     //     name: file,
//     //     gender: Gender.Male,
//     //     numberOfQues: numberOfQuestion||1,
//     //     imgUrl: imageBuffer,
//     //   });

//     //   new MediaModel();
//     //   await newImage.save();
//     //   console.log(`Image ${file} uploaded successfully.`);
//     // } catch (error) {
//     //   console.error(`Error uploading image ${file}:`, error);
//     // }
//   }
// });
