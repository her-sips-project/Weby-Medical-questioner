import { useForm } from "react-hook-form";
import "./AddPatient.scss";
import Patient from "./../../../Models/PatientsModel/PatientModel/Patient-model";
import { useNavigate } from "react-router-dom";
import { MessageClient } from "cloudmailin";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
import { SyntheticEvent, useState } from "react";
import store from "../../../Redux/ReduxStore/Store";
import axios from "axios";
// const nodemailer = require("nodemailer");

function AddPatient() {
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
    try {
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

    navigate("/Thank");
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
    <div className="AddPatient  container w-50">
      <form onSubmit={handleSubmit(submit)}>
        <label>First Name</label>
        <input type="text" autoFocus {...register("firstName")} />
        <br />
        <label>Last Name</label>
        <input type="text" autoFocus {...register("lastName")} />
        <br />
        <label>Birth date </label>
        <input type="date" {...register("birthDate")} />
        <br />
        <label>City</label>
        <input type="text" {...register("city")} />
        <div>
          <label className="chekbox1">
            <input type="checkbox" name="sips" onChange={isChecked} />I agree to
            send the results anonymously for research purposes.
          </label>
          <label>
            <input
              type="checkbox"
              id="sendToMe"
              name="changeCheckbox"
              onChange={isChecked}
            />
            send me my results.
          </label>
          {isAgreeHimself ? (
            <>
              <input
                type="email"
                {...register("email")}
                placeholder="Mail address"
              ></input>
            </>
          ) : (
            <> </>
          )}
        </div>
        <button
          className="sendBtn"
          onClick={() => {
            navigate("/Thank");
          }}
        >
          Send my results
        </button>
        <button onClick={backToHomPage} className="cancelBtn">
          Cancel
        </button>
      </form>
      {/* <button onClick={backToHomPage}>Back To Hom Page</button> */}
    </div>
  );
}

export default AddPatient;
