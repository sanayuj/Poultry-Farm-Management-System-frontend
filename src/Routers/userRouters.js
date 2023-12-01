import { Route,Routes } from "react-router-dom";
import LoginPage from "../Pages/User/LoginPage";

import React from 'react'

function UserRouters() {
  return (
    <Routes>
        <Route path="/login" element={<LoginPage/>}/>  
    </Routes>
  )
}

export default UserRouters