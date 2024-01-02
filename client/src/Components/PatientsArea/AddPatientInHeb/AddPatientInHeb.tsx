import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Patient from "../../../Models/PatientsModel/PatientModel/Patient-model";
import store from "../../../Redux/ReduxStore/Store";
import axios from "axios";
import { SyntheticEvent, useState } from "react";
import "./AddPatientInHeb.scss";

function AddPatientInHeb(): JSX.Element {
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

export default AddPatientInHeb;
