import { adminInstance } from "../Axios/axiosInstance";

export const adminLogin=(values)=>{
    console.log("Admin Login Page!!")
    return adminInstance.post("/login",{...values})
}