import axios from "axios";

export interface SignUpDataType {
  email?: string;
  phone?: number;
  password: string;
  confirm_password: string;
  type?: string;
  username: string;
}

export const SignupApiCall = async (SignupData: SignUpDataType) => {
  console.log("Api call");
  const response = await axios.post(
    "http://localhost:5001/api/signup",
    SignupData
  );
  return response;
};
