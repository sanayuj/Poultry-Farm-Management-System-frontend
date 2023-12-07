import React from 'react'
import "./SubNavBar.css"
import { Link } from 'react-router-dom'
function SubNavbar() {
  return (
    <div className='firstDiv'>
    <div className='SubmainDiv container'>
    <ul className='subList'>
        <li><Link className='Link-none'>Add Farm Details</Link></li>
        <li><Link className='Link-none'>Feed Management</Link></li>
        <li><Link className='Link-none'>Medicine Management</Link></li>
        <li><Link className='Link-none'>Mortality Tracking</Link></li>
        <li><Link className='Link-none'>Help and Support</Link></li>
    </ul>
    </div>
    </div>
  )
}

export default SubNavbar