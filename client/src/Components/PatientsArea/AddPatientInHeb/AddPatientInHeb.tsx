// import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
// import Patient from "../../../Models/PatientsModel/PatientModel/Patient-model";
// import "./AddPatientInHeb.css";
// import axios from "axios";
// import store from "../../../Redux/ReduxStore/Store";
// import React, { useState } from "react";



//  function AddPatientInHeb(): JSX.Element {
//     const getSignsOfPaintOject={...store.getState().PainsAppState.signsOFPain}

//     const navigate = useNavigate();
//     const{register,handleSubmit} = useForm<Patient>();
 
//     async function submit(patient:Patient):Promise<void> {
//         try {
 
//         const formData = new FormData();
//         formData.append("firstName",patient.firstName);
//         formData.append("lastName",patient.lastName);
//         formData.append("age",patient.age.toString());
//         formData.append("birthDate",patient.birthDate);
//         formData.append("photoOfUser",patient.photoOfUser[0]);
//         formData.append("country",patient.country);
//         formData.append("city",patient.city);

// //  in addPatientInHeb change 25-41

//         const { data } = await axios.post(`http://localhost:5002/api/v1/email/send-mail`,
//          {  
//             result: store.getState().PainsAppState,
//             patient: patient,
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
//     return (
//         <div className="AddPatientInHeb Box">
//              <h1>הוספת פרטי חולה</h1>
                
//                 <form onSubmit={handleSubmit(submit)}>
//                  <label>שם פרטי</label>
//                  <input type="text" autoFocus {...register("firstName")}/>
//                  <br/>
//                  <label>שם משפחה</label>
//                  <input type="text" autoFocus {...register("lastName")}/>
//                  <br/>
//                  <label>גיל</label>
//                  <input type="number"  {...register("age")}/>
//                  <br/>
//                 <label>מין</label>
//                 <br/>

//                 <input type="radio"  {...register("sex")}/>
//                  <br/>
//                 <label>תאריך לידה</label>
//                  <input type="text"  {...register("birthDate")}/>
//                  <br/>
//                  <label>פוטו</label>
//                  <input type="file" accept="imag/*" {...register("photoOfUser")}/>
//                  <label>מדינה</label>
//                 <input type="text"  {...register("country")}/>
//                 <br/>
//                <label>עיר</label>
//                <input type="text"  {...register("city")}/>
//                <br/>  
//                <button>שלח</button>
//               <button >בטל</button>
//               </form>	
			
//         </div>
//     );


// }

// export default AddPatientInHeb;

import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import store from '../../../Redux/ReduxStore/Store';
import Patient from '../../../Models/PatientsModel/PatientModel/Patient-model';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddPatientInHeb() {
    const getSignsOfPaintOject={...store.getState().PainsAppState.signsOFPain}
    const { control, handleSubmit } =  useForm();

    async function onSubmit(data1:any):Promise<void> {
        try {
        
        // const formData = new FormData();
        // formData.append("firstName",patient.firstName);
        // formData.append("lastName",patient.lastName);
        // formData.append("age",patient.age.toString());
        // formData.append("birthDate",patient.birthDate);
        // formData.append("photoOfUser",patient.photoOfUser[0]);
        // formData.append("country",patient.country);
        // formData.append("city",patient.city);

//  in addPatientInHeb change 25-41

        const patient:Patient={lastName:data1.lastName , firstName:data1.firstName,
        sex:data1.gender, email:data1.email, birthDate:data1.birthdate, country:data1.country}
        console.log(patient)
        const { data } = await axios.post(`http://localhost:5002/api/v1/email/send-mail`,
         {  
            result: store.getState().PainsAppState,
            patient: patient,
            agreementSend:data1.agreementSend
        });
            if(!data.status)
                console.error("mail is not send");
            else {
                const { status, error } = data;
            }

  
        }
        catch (error) {
            console.error(error);
          }

        //navigate("/Main")
    }
    const navigate = useNavigate();


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* First Name */}
      <div>
        <label htmlFor="firstName">First Name:</label>
        <Controller
          name="firstName"
          control={control}
          render={({ field }) => <input type="text" id="firstName" {...field} />}
        />
      </div>

      {/* Last Name */}
      <div>
        <label htmlFor="lastName">Last Name:</label>
        <Controller
          name="lastName"
          control={control}
          render={({ field }) => <input type="text" id="lastName" {...field} />}
        />
      </div>

      {/* Birthdate */}
      <div>
        <label htmlFor="birthdate">Birthdate:</label>
        <Controller
          name="birthdate"
          control={control}
          render={({ field }) => <input type="date" id="birthdate" {...field} />}
        />
      </div>

      {/* Gender */}
      <div>
        <label htmlFor="gender">Gender:</label>
        <Controller
          name="gender"
          control={control}
          render={({ field }) => (
            <select id="gender" defaultValue={"male"} {...field}>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          )}
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email">Email:</label>
        <Controller
          name="email"
          control={control}
          render={({ field }) => <input type="email" id="email" {...field} />}
        />
      </div>

      {/* Country */}
      <div>
        <label htmlFor="country">Country:</label>
        <Controller
          name="country"
          control={control}
          render={({ field }) => (
            <select id="country" {...field}>
              <option value="usa">USA</option>
              <option value="canada">Canada</option>
              <option value="uk">UK</option>
              {/* Add more countries as needed */}
            </select>
          )}
        />
      </div>
   {/* email doc sent */}
      <div>
        <label htmlFor="agreementSend">האם אתה/את מסכים/מסכימה לשלוח את התוצאות ל
            <span> sips.study@gmail.com</span>
         </label>
        <Controller
          name="agreementSend"
          control={control}
          render={({ field }) => <input type="checkbox" id="agreementSend" {...field} />}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddPatientInHeb;


