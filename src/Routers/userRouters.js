import { Route, Routes } from "react-router-dom";
import SignupPage from "../Pages/User/SignupPage";
import React from "react";
import LoginPage from "../Pages/User/LoginPage";
import HomePage from "../Pages/User/HomePage";
import AddFarm from "../Pages/User/AddFarmPage";
import FeedManagePage from "../Pages/User/FeedManagePage";
import ShowFarmsPage from "../Pages/User/ShowFarmsPage";
import MedicinePage from "../Pages/User/MedicinePage";

function UserRouters() {
  return (
    <Routes>
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/addfarm" element={<AddFarm />} />
      <Route path="/feed/:farmId" element={<FeedManagePage />} />
      <Route path="/showfarms/:values" element={<ShowFarmsPage />} />
      <Route path="/medicine/:farmId" element={<MedicinePage/>}/>
    </Routes>
  );
}

export default UserRouters;
