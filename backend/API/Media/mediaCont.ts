import mongoose, { Schema, model } from "mongoose";
import MediaModel, { Gender } from "./mediaSchema";
import fs from "fs";

export const handleGetAllImgs = async (req: any, res: any) => {
  try {
    console.log("im in server handleGetAllImgs");
    const response = await MediaModel.find({});
    console.log(response);
    res.json(response);
  } catch (error) {
    console.error(error);
  }
};

// handleGetAllImgs();

// ---UPLOADING--------------------------------
// --
// export const MediaSchema = new Schema({
//     name: {type:String, require:true},
//     gender: {type:String, enum: Object.values(Gender), default:Gender.None},
//     numberOfQues: Number,
//     imgUrl: {type:String, require:true},
//   });

//   const MediaModel = model("media", MediaSchema);

//   const directoryPath =
//     "../client/src/Assets/Images/image1MaleGif"; // כתובת התיקייה שבה נמצאים התמונות

//   fs.readdir(directoryPath, async (err, files) => {
//     if (err) {
//       console.error("Error reading directory:", err);
//       return;
//     }

//     for (const file of files) {
//       const imagePath = path.join(directoryPath, file);
//       const imageBuffer = fs.readFileSync(imagePath);
//       const numberOfQuestion = Math.floor((parseInt(file.replace(/\D/g, ''))+1) /2);

//       console.log(file + "       +      " + numberOfQuestion)
//       // try {
//       //   console.log("on processing....");
//       //   const newImage = new MediaModel({
//       //     name: file,
//       //     gender: Gender.Male,
//       //     numberOfQues: numberOfQuestion||1,
//       //     imgUrl: imageBuffer,
//       //   });

//       //   new MediaModel();
//       //   await newImage.save();
//       //   console.log(`Image ${file} uploaded successfully.`);
//       // } catch (error) {
//       //   console.error(`Error uploading image ${file}:`, error);
//       // }
//     }
//   });
