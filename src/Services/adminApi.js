import { adminInstance } from "../Axios/axiosInstance";

//POST

export const adminLogin=(values)=>{
    return adminInstance.post("/login",{...values})
}

export const userDisable=(id)=>{
    console.log(id,"Disable!!")
    return adminInstance.post("/disableuser",{id})
}

//GET

export const getUserDetails=()=>{
    return adminInstance.get("/listuser")
}
export const getUserFarmDetails=(userId)=>{
    return adminInstance.get(`/getuserFarm/${userId}`)
}
