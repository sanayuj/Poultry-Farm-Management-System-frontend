import { userInstance } from "../Axios/axiosInstance";


//POST methods

export const userSignup = (values) => {
  return userInstance.post("/signup", { ...values });
};

export const userLogin = (values) => {
  return userInstance.post("/login", { ...values });
};

export const addFarmDetails=(values,userId)=>{
  console.log(userId,"function user Api")
  return userInstance.post(`/addfarm/${userId}`,{...values})
}
//GET methods

export const userHeader=()=>{
  return userInstance.get('/')
} 

export const showUserFarms=(userId)=>{
  console.log(userId,"Api farm")
  return userInstance.get(`/showuserfarms/${userId}`)
}

