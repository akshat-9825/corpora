import axios from "axios";

import { LoginDataType, SignUpDataType } from "./utils";

export const SignupApiCall = async (SignupData: SignUpDataType) => {
  try {
    const response = await axios.post(
      "http://localhost:5001/api/v1/auth/signup",
      SignupData,
      {
        withCredentials: true,
      }
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const LoginApiCall = async (LoginData: LoginDataType) => {
  try {
    const response = await axios.post(
      "http://localhost:5001/api/v1/auth/login",
      LoginData,
      {
        withCredentials: true,
      }
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};
