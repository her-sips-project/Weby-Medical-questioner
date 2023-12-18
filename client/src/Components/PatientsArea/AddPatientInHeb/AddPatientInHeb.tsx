import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Patient from "../../../Models/PatientsModel/PatientModel/Patient-model";
import "./AddPatientInHeb.css";
import axios from "axios";
import store from "../../../Redux/ReduxStore/Store";
import React from "react";



 function AddPatientInHeb(): JSX.Element {
    const getSignsOfPaintOject={...store.getState().PainsAppState.signsOFPain}
    const navigate = useNavigate();
    const{register,handleSubmit} = useForm<Patient>();
    async function submit(patient:Patient):Promise<void> {
        try {
        const formData = new FormData();
        formData.append("firstName",patient.firstName);
        formData.append("lastName",patient.lastName);
        formData.append("age",patient.age.toString());
        formData.append("birthDate",patient.birthDate);
        formData.append("photoOfUser",patient.photoOfUser[0]);
        formData.append("country",patient.country);
        formData.append("city",patient.city);
//  in addPatientInHeb change 25-41
        const { data } = await axios.post(`http://localhost:5001/api/v1/email/send-mail`,
         {  
            result: store.getState().PainsAppState,
            patient: patient,
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
    return (
        <div className="AddPatientInHeb Box">
             <h1>הוספת פרטי חולה</h1>
                
                <form onSubmit={handleSubmit(submit)}>
                 <label>שם פרטי</label>
                 <input type="text" autoFocus {...register("firstName")}/>
                 <br/>
                 <label>שם משפחה</label>
                 <input type="text" autoFocus {...register("lastName")}/>
                 <br/>
                 <label>גיל</label>
                 <input type="number"  {...register("age")}/>
                 <br/>
                <label>תאריך לידה</label>
                 <input type="text"  {...register("birthDate")}/>
                 <br/>
                 <label>פוטו</label>
                 <input type="file" accept="imag/*" {...register("photoOfUser")}/>
                 <label>מדינה</label>
                <input type="text"  {...register("country")}/>
                <br/>
               <label>עיר</label>
               <input type="text"  {...register("city")}/>
               <br/>  
               <button>שלח</button>
              <button >בטל</button>
              </form>	
			
        </div>
    );
}

export default AddPatientInHeb;
