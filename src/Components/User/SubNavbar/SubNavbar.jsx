import React from 'react'
import "./SubNavBar.css"
import { Link } from 'react-router-dom'
function SubNavbar() {
  return (
    <div className='firstDiv'>
    <div className='SubmainDiv container'>
    <ul className='subList'>
        <li><Link className='Link-none'  to={"/addfarm"}>Add Farm Details</Link></li>
        <li><Link className='Link-none' page='Feed' to={"/showfarms"}>Feed Management</Link></li>
        <li><Link className='Link-none' page='Medicine'  to={"/showfarms"}>Medicine Management</Link></li>
        <li><Link className='Link-none' page='Mortality' to={"/showfarms"}>Mortality Tracking</Link></li>
        <li><Link className='Link-none'>Help and Support</Link></li>
    </ul>
    </div>
    </div>
  )
}

export default SubNavbar