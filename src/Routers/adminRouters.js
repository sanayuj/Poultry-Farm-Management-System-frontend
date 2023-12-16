import React from 'react'
import { Route,Routes } from "react-router-dom";
import LoginAdmin from '../Pages/Admin/LoginAdmin';
import HomeAdmin from '../Pages/Admin/HomeAdmin';
import ListUser from '../Pages/Admin/ListUserPage';
import UserFarmPage from '../Pages/Admin/UserFarmPage';
import FarmDetailsPage from '../Pages/Admin/FarmDetailsPage';
function adminRouters() {
  return (
    <Routes>
        <Route path='/login' element={<LoginAdmin/>}/>
        <Route path='/' element={<HomeAdmin/>}/>
        <Route path='/userDetails' element={<ListUser/>}/>
        <Route path='/userfarm/:userId' element={<UserFarmPage/>}/>
        <Route path='/farmDetails/:farmId/:userId' element={<FarmDetailsPage/>}/>
    </Routes>
  )
}

export default adminRouters