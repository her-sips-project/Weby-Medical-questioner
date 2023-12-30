interface Patient {
    _id: string;
    firstName: string;
    lastName: string;
    age: number;
    sex: string;
    birthDate: string;
    photoOfUser: FileList;
    country: string;
    city: string;
    date: string;
    time: string;
    email: string;
    isAgreeSips:boolean;
    isAgreeHimself:boolean;
  }
  export default Patient;