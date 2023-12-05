import React from 'react'
import { Route,Routes } from "react-router-dom";
import LoginAdmin from '../Pages/Admin/LoginAdmin';
import HomeAdmin from '../Pages/Admin/HomeAdmin';
function adminRouters() {
  return (
    <Routes>
        <Route path='/login' element={<LoginAdmin/>}/>
        <Route path='/' element={<HomeAdmin/>}/>
    </Routes>
  )
}

export default adminRouters