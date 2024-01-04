import { Request, Response } from "express";
import calculateAge from "../assets/CalculateAge";
import isEmailValid from "./isEmailValid";
const nodemailer = require("nodemailer");
export async function sendMail(req: Request, res: Response) {
  try {
    const mangerEmail: any = process.env.EMAIL;
    const { result, patient } = req.body;
    console.log("1...The  result object is ");
    console.log("===============================================================");
    console.log(result);
    console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
    console.log("2...The patient object");
    console.log("-------------------------------------------------------------");
    console.log(patient);
    let age = calculateAge(patient.birthDate);
    if (age > 120 || age <= 0) {
      return res.send({ status: false, error: "Incorrect age" });
    }
    //This means there is no  email in variable patient.email
    let patient_email: string;
    let isEmailIsValid: boolean = false;
    //Validating the user email
    const { valid, reason, validators } = await isEmailValid(patient.email);
    if (valid) {
      patient_email = patient.email;
      isEmailIsValid = true;
    } else {
      return res.send({ status: false, error: "InValid email" });
    }
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MANGER_EMAIL,
        pass: process.env.PASSWORD,
      },
    });
    const emailAddresses: string[] = [];
    if (patient.isAgreeHimself) emailAddresses.push(patient_email);
    if (patient.isAgreeSips) emailAddresses.push(mangerEmail);
    let mailOptions = {
      from: "SIPS",
      bcc: emailAddresses,
      subject: `${patient.firstName} ,${patient.lastName} - תוצאות`,
      text: `${JSON.stringify(patient)}`,
      html: `<html  lang="he" >
            <head>
              <style>
              *{
                direction: rtl;
          
                justify-content: center;
                align-items: center;
              }
                /* עיצוב הטבלה */
                 table {
                   font-family: Arial, sans-serif;
                   border-collapse: collapse;
                   width: 100%;
                   direction: rtl;
                   justify-content: center;
                   align-items: center;
                    margin: auto;
                 }
      
                 th, td {
                   border: 1px solid #dddddd;
                   text-align: right;
                   padding: 8px;
                   direction: ltr;
                   justify-content: center;
                   align-items: center;
                 }
    
            
              </style>
    
            </head>
            <body >
          
              <h2> ${patient.firstName} , ${patient.lastName} - results</h2>
              <h2>מין:${patient.sex}</h2>
              <h3>גיל:${age}</h3>
              <!-- הטבלה -->
              <table>
                <tr>
                  <th> שאלה</th>
                  <th>תוצאה</th>
                 
                </tr>
                <tr>
                  <td>:קושי בשתיית נוזלים</td>
                  <td> ${JSON.parse(
                    result.signsOFPain.difficultySwallowingLiquids
                  )} </td>
    
                </tr>
                <tr>
                  <td>:קושי באכילת מוצקים</td>
                  <td>${JSON.parse(
                    result.signsOFPain.difficultrySwallowingSolidFood
                  )}</td>
                </tr>
                <tr>
                <td>:קושי בבליעת תרופות</td>
                <td>${JSON.parse(
                  result.signsOFPain.difficultySwallowingPills
                )}</td>
              </tr>
              <tr>
              <td>:שיעול באכילה</td>
              <td>${JSON.parse(result.signsOFPain.coughingWhileEating)}</td>
            </tr>
            <tr>
            <td>:ירידה במשקל</td>
            <td>${JSON.parse(result.signsOFPain.losingWeight)}</td>
          </tr>
          <tr>
          <td>:מחנק בזמן האוכל</td>
          <td>${JSON.parse(result.signsOFPain.ChokingDuringMeals)}</td>
        </tr>
        <tr>
        <td>:המנעות מאכילה בחברה</td>
        <td>${JSON.parse(result.signsOFPain.AvoidingEatingWithOthers)}</td>
      </tr>
      <tr>
      <td> :כאב בבליעה</td>
      <td>${JSON.parse(result.signsOFPain.PainWhileSwallowing)}</td>
    </tr>
    <tr>
    <td> :הנאה מאכילה</td>
    <td>${JSON.parse(result.signsOFPain.EnjoyingMeals)}</td>
    </tr>
    <tr>
    <td> :חרדה מאכילה</td>
    <td>${JSON.parse(result.signsOFPain.feelingAnxiousAboutSwallowing)}</td>
    </tr>
    <tr>
    <td>
    ${JSON.parse(result.signsOFPain.numberOfSignsOfPain)} /10
    </td>
    <td> </td>
    
    </tr>
    
      </table>
            </body>
          </html>`,
    };
    let errorResponse: any;
    let EmailSentResponse: any;
    transporter.sendMail(
      mailOptions,
      function (error: any, info: { response: string }) {
        if (error) {
          errorResponse = error;
        } else {
          EmailSentResponse = { "Email sent": info.response };
        }
      }
    );
    if (errorResponse) {
      return res.send(errorResponse);
    } else {
      return res.send({ status: true });
    }
  } catch (error) {
    return res.send({ status: "error message" });
  }
}
