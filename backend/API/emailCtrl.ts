import express, { Request, Response } from "express";
 
export async function sendMail(req:Request, res:Response) {
  try {
    const mangerEmail:any=process.env.EMAIL;
    const {  result, patient, agreementSend } = req.body;
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
      const emailAddresses=[String];

      if(patient.email!= null)
      emailAddresses.push(patient.email)

      if(agreementSend)
      emailAddresses.push(mangerEmail)

        console.log("first")
      const mailOptions = {
        from: 'SIPS',
         to:  emailAddresses,
        subject: `${patient.firstName} , ${patient.lastName} - results`,
        text: `  ${JSON.stringify(patient)}`,
        html: `
        <table>
  <tr>
    <th>Quation</th>
    <th>result</th>

  </tr>
  <tr>
    <td>difficultySwallowingLiquids</td>  
    <td> ${JSON.parse(result.signsOFPain.difficultySwallowingLiquids)}</td>

  </tr>
  <tr>
    <td>${patient.sex}</td>
    <td>${JSON.parse(result.signsOFPain.difficultrySwallowingSolidFood)}</td>
    <td>${JSON.parse(result.signsOFPain.difficultySwallowingPills)}</td>
  </tr>
</table>
      `,
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
