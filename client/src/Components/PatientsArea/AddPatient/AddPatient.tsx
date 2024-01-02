import { useForm } from "react-hook-form";
import "./AddPatient.scss";
import Patient from "./../../../Models/PatientsModel/PatientModel/Patient-model";
import { useNavigate } from "react-router-dom";
import { MessageClient } from "cloudmailin";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
import { SyntheticEvent, useState } from "react";
import store from "../../../Redux/ReduxStore/Store";
// const nodemailer = require("nodemailer");

function AddPatient() {
  const [isAgreeSips, setIsAgreeSips] = useState(false);
  const [isAgreeHimself, setIsAgreeHimself] = useState(false);
  const backToHomPage = () => {
    navigate("/");
  };
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<Patient>();
  const getSignsOfPaintOject = {
    ...store.getState().PainsAppState.signsOFPain,
  };
  const getPatient = {
    ...store.getState().PatientsAppState.patientModelAppState,
  };
  async function submit(patient: Patient): Promise<void> {
    const formData = new FormData();
    formData.append("firstName", patient.firstName);
    formData.append("lastName", patient.lastName);
    formData.append("age", patient.age.toString());
    formData.append("birthDate", patient.birthDate);
    formData.append("photoOfUser", patient.photoOfUser[0]);
    formData.append("country", patient.country);
    formData.append("city", patient.city);
    //navigate("/Main")//===========================================================??????
    const USERNAME: string = "";
    const API_KEY: string = "";
    const client = new MessageClient({ username: USERNAME, apiKey: API_KEY });
    const response = await client.sendMessage({
      from: '"Sender Name" <from@example.net>',
      to: "to@example.com",
      subject: "Hello from node",
      plain: "Hello world?",
      html: "<strong>Hello world?</strong>",
      headers: { "x-myheader": "test header" },
    });
  }
  //===============================================================================
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

  return (
    <div className="AddPatient  container w-50"  >
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
        <button className="sendBtn">Send my results</button>
        <button onClick={backToHomPage} className="cancelBtn">
          Cancel
        </button>
      </form>
      {/* <button onClick={backToHomPage}>Back To Hom Page</button> */}
    </div>
  );
  return (
    <div className="AddPatient Box">
      <h1>Add Patient</h1>

      <form onSubmit={handleSubmit(submit)}>
        <label>First Name</label>
        <input type="text" autoFocus {...register("firstName")} />
        <br />
        <label>Last Name</label>
        <input type="text" autoFocus {...register("lastName")} />
        <br />
        <label>age</label>
        <input type="number" {...register("age")} />
        <br />
        <label>Birth Date</label>
        <input type="text" {...register("birthDate")} />
        <br />
        <label>Photo Of user</label>
        <input type="file" accept="imag/*" {...register("photoOfUser")} />
        <label>Country</label>
        <input type="text" {...register("country")} />
        <br />
        <label>City</label>
        <input type="text" {...register("city")} />
        <br />
        <button>Send</button>
        <button>Cancel</button>
      </form>
    </div>
  );
}

export default AddPatient;
