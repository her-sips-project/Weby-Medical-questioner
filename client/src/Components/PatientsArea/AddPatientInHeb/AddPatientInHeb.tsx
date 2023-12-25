
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
        

        const patient:Patient={lastName:data1.lastName , firstName:data1.firstName,
        sex:data1.gender, email:data1.email, birthDate:data1.birthdate, country:data1.country }
        const { data } = await axios.post(`http://localhost:5002/api/v1/email/send-mail`,
         {  
            result: store.getState().PainsAppState,
            patient: patient,
            agreementSend:data1.agreementSend
        });
            if(!data.status)
                console.error("mail is not send");
            else {
                // navigate("/Results")
            }

  
        }
        catch (error) {
            console.error(error);
          }


    }
    const navigate = useNavigate();


    const handleCancel = () => {
            navigate("/HomePage")
      };

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
      <button type="button" onClick={handleCancel}>Cancel</button>
    </form>
  );
};

export default AddPatientInHeb;


