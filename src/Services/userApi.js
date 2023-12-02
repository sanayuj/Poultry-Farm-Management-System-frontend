import { userInstance } from "../Axios/axiosInstance";

export const userSignup = (values) => {
    console.log("Service API called!!")
  return userInstance.post("/signup", { ...values }, { withCredentials: true });
};
