import express, { Request, Response } from "express";
// import nodemailer from "nodemailer";

export async function sendMail(req:Request, res:Response) {
  try {
  
    const {  result, patient } = req.body;
    if( { result, patient})
    {
      const nodemailer = require("nodemailer");
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL,
          pass: process.env.PASSWORD,
        },
      });

      const mailOptions = {
        from: 'SIPS',
        to: `${process.env.EMAIL}`,
        subject: `${patient.firstName} , ${patient.lastName} - results`,
        text: `${JSON.stringify(result)}`,
        html: `${JSON.stringify(patient)}`,
      };
 
      transporter.sendMail(mailOptions, function (error: any, info: { response: string; }) {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent: " + info.response);
        }
      });

      res.send({ status: true });

       
    } 
  
  else {
        res.send({ status: false });
  }

  } catch (error) {
    console.error(error);
  }
}
