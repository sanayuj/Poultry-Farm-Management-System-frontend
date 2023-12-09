import { Route,Routes } from "react-router-dom";
import SignupPage from "../Pages/User/SignupPage";
import React from 'react'
import LoginPage from "../Pages/User/LoginPage";
import HomePage from "../Pages/User/HomePage";
import AddFarm from "../Pages/User/AddFarmPage";

function UserRouters() {
  return (
    <Routes>
        <Route path="/signup" element={<SignupPage/>}/>  
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/addfarm" element={<AddFarm/>}/>

    </Routes>
  )
}

export default UserRouters