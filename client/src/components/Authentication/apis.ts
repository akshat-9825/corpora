import axios from "axios";

import { LoginDataType, SignUpDataType } from "./utils";

export const SignupApiCall = async (SignupData: SignUpDataType) => {
  const response = await axios.post(
    "http://localhost:5001/api/signup",
    SignupData,
    {
      withCredentials: true,
    }
  );
  return response;
};

export const LoginApiCall = async (LoginData: LoginDataType) => {
  const response = await axios.post(
    "http://localhost:5001/api/login",
    LoginData,
    {
      withCredentials: true,
    }
  );
  return response;
};
