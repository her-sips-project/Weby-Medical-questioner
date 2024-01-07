
// import React, { useState } from 'react';
// import { useForm, Controller } from 'react-hook-form';
// import store from '../../../Redux/ReduxStore/Store';
// import Patient from '../../../Models/PatientsModel/PatientModel/Patient-model';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// function AddPatient() {
//     const getSignsOfPaintOject={...store.getState().PainsAppState.signsOFPain}
//     const { control, handleSubmit } =  useForm();

//     async function onSubmit(data1:any):Promise<void> {
//         try {  
//           if(data1.gender == null)
//               data1.gender='male'
//         const patient:Patient={lastName:data1.lastName , firstName:data1.firstName,
//         sex:data1.gender, email:data1.email, birthDate:data1.birthdate, country:data1.country}

//         const { data } = await axios.post(`http://localhost:5002/api/v1/email/send-mail`,
//          {  
//             result: store.getState().PainsAppState,
//             patient: patient,
//             agreementSend:data1.agreementSend
//         });
//             if(!data.status)
//                 console.error("mail is not send");
//             else {
//                 const { status, error } = data;
//             }

  
//         }
//         catch (error) {
//             console.error(error);
//           }

//         //navigate("/Main")
//     }
//     const navigate = useNavigate();


//     const handleCancel = () => {
    
//       };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       {/* First Name */}
//       <div>
//         <label htmlFor="firstName">First Name:</label>
//         <Controller
//           name="firstName"
//           control={control}
//           render={({ field }) => <input type="text" id="firstName" {...field} />}
//         />
//       </div>

//       {/* Last Name */}
//       <div>
//         <label htmlFor="lastName">Last Name:</label>
//         <Controller
//           name="lastName"
//           control={control}
//           render={({ field }) => <input type="text" id="lastName" {...field} />}
//         />
//       </div>

//       {/* Birthdate */}
//       <div>
//         <label htmlFor="birthdate">Birthdate:</label>
//         <Controller
//           name="birthdate"
//           control={control}
//           render={({ field }) => <input required type="date" id="birthdate" {...field} />}
//         />
//       </div>

//       {/* Gender */}
//       <div>
//         <label htmlFor="gender">Gender:</label>
//         <Controller
//           name="gender"
//           control={control}
//           render={({ field }) => (
//             <select  id="gender" defaultValue={"male"} {...field}>
//               <option value="male">Male</option>
//               <option value="female">Female</option>
//             </select>
//           )}
//         />
//       </div>

//       {/* Email */}
//       <div>
//         <label htmlFor="email">Email:</label>
//         <Controller
//           name="email"
//           control={control}
//           render={({ field }) => <input type="email" id="email" {...field} />}
//         />
//       </div>

//       {/* Country */}
//       <div>
//         <label htmlFor="country">Country:</label>
//         <Controller
//           name="country"
//           control={control}
//           render={({ field }) => (
//             <select id="country" {...field}>
//               <option value="usa">USA</option>
//               <option value="canada">Canada</option>
//               <option value="uk">UK</option>
//               {/* Add more countries as needed */}
//             </select>
//           )}
//         />
//       </div>
//    {/* email doc sent */}
//       <div>
//         <label htmlFor="agreementSend">האם אתה/את מסכים/מסכימה לשלוח את התוצאות ל
//             <span> sips.study@gmail.com</span>
//          </label>
//         <Controller
//           name="agreementSend"
//           control={control}
//           render={({ field }) => <input type="checkbox" id="agreementSend" {...field} />}
//         />
//       </div>
//       <button type="submit">Submit</button>
//       <button type="button" onClick={handleCancel}>Cancel</button>
//     </form>
//   );
// };

// export default AddPatient;

//עמנואל

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Patient from "../../../Models/PatientsModel/PatientModel/Patient-model";
import store from "../../../Redux/ReduxStore/Store";
import axios from "axios";
import { SyntheticEvent, useState } from "react";
import "./AddPatient.css";

function AddPatient(): JSX.Element {
  const navigate = useNavigate();
  const [isAgreeSips, setIsAgreeSips] = useState(false);
  const [isAgreeHimself, setIsAgreeHimself] = useState(false);
  const getSignsOfPaintOject = {
    ...store.getState().PainsAppState.signsOFPain,
  };
  const getPatient = {
    ...store.getState().PatientsAppState.patientModelAppState,
  };
  const { register, handleSubmit } = useForm<Patient>();
  async function submit(patient: Patient): Promise<void> {
    patient.isAgreeSips = isAgreeSips;
    patient.isAgreeHimself = isAgreeHimself;
    console.log("patient====================");
    console.log(patient.email);

    try {
      //   //  in addPatientInHeb change 25-41
      //   //const patient:Patient={lastName:data1.lastName , firstName:data1.firstName,
      //   //sex:data1.gender, email:data1.email, birthDate:data1.birthdate, country:data1.country}
      //   //console.log(patient)
      const { data } = await axios.post(
        "http://localhost:5001/api/v1/email/send-mail",
        {
          result: store.getState().PainsAppState,
          patient: patient,
        }
      );
      console.error(data);
    } catch (error) {
      console.error(error);
    }

    // navigate("/");
  }
  function isChecked(args: SyntheticEvent) {
    if ((args.target as HTMLInputElement).name === "sips") {
      getPatient.isAgreeSips = true;
      setIsAgreeSips(true);
      console.log((args.target as HTMLInputElement).name);
    }
    if ((args.target as HTMLInputElement).name === "changeCheckbox") {
      getPatient.isAgreeHimself = true;
      setIsAgreeHimself(true);
    }
  }
  const backToHomPage = () => {
    navigate("/");
  };
  return (
    <div className="AddPatientInHeb  container w-50">
      <form onSubmit={handleSubmit(submit)}>
        <label>שם פרטי</label>
        <input type="text" autoFocus {...register("firstName")} />
        <br />
        <label>שם משפחה</label>
        <input type="text" autoFocus {...register("lastName")} />
        <br />
        <label>תאריך לידה</label>
        <input type="text" {...register("birthDate")} />
        <br />
        <label>עיר</label>
        <input type="text" {...register("city")} />
        <div>
          <label className="chekbox1">
            אני מסכים.ה לשלוח את התוצאות באנונימיות למטרות מחקר
            <input type="checkbox" name="sips" onChange={isChecked} />
          </label>
          <label>
            שלחו אליי את התוצאות במייל
            <input
              type="checkbox"
              id="sendToMe"
              name="changeCheckbox"
              onChange={isChecked}
            />
          </label>
          {isAgreeHimself ? (
            <>
              <input
                type="email"
                {...register("email")}
                placeholder="כתובת מייל"
              ></input>
            </>
          ) : (
            <> </>
          )}
        </div>
        <button className="sendBtn">שלח לי את התוצאות</button>
        <button onClick={backToHomPage} className="cancelBtn">
          ביטול
        </button>
      </form>
      {/* <button onClick={backToHomPage}>Back To Hom Page</button> */}
    </div>
  );
}

export default AddPatient;


