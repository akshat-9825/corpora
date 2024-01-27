import { Slide, SlideProps } from "@mui/material";

export function SlideTransition(props: SlideProps) {
  return <Slide {...props} direction="left" />;
}

export interface AuthenticationType {
  type: "login" | "signup";
}

export interface SignUpDataType {
  email?: string;
  phone?: number;
  password: string;
  confirm_password: string;
  type?: string;
  username: string;
}

export interface LoginDataType {
  email: string;
  password: string;
}
