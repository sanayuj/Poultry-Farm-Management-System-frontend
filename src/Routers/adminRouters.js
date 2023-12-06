import React from 'react'
import { Route,Routes } from "react-router-dom";
import LoginAdmin from '../Pages/Admin/LoginAdmin';
import HomeAdmin from '../Pages/Admin/HomeAdmin';
import ListUser from '../Pages/Admin/ListUserPage';
function adminRouters() {
  return (
    <Routes>
        <Route path='/login' element={<LoginAdmin/>}/>
        <Route path='/' element={<HomeAdmin/>}/>
        <Route path='/userDetails' element={<ListUser/>}/>
    </Routes>
  )
}

export default adminRouters