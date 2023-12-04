import { userInstance } from "../Axios/axiosInstance";

export const userSignup = (values) => {
  console.log("Service API called!!");
  return userInstance.post("/signup", { ...values });
};

export const userLogin = (values) => {
  console.log("Login function is worked!!");
  return userInstance.post("/login", { ...values });
};
