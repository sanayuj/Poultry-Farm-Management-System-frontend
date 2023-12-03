import { Route,Routes } from "react-router-dom";
import SignupPage from "../Pages/User/SignupPage";

import React from 'react'

function UserRouters() {
  return (
    <Routes>
        <Route path="/signup" element={<SignupPage/>}/>  
    </Routes>
  )
}

export default UserRouters