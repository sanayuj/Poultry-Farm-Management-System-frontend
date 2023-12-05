import React from 'react'
import { Route,Routes } from "react-router-dom";
import LoginAdmin from '../Pages/Admin/LoginAdmin';
function adminRouters() {
  return (
    <Routes>
        <Route path='/login' element={<LoginAdmin/>}/>
    </Routes>
  )
}

export default adminRouters