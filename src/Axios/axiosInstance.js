import axios from "axios"

const userInstance=axios.create({
    baseURL:process.env.REACT_APP_BASE_URL
})

const adminInstance=axios.create({
    baseURL:`${process.env.REACT_APP_BASE_URL}/admin`
})

export {userInstance,adminInstance}