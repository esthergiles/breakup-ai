import React from 'react'
import {FaBars, FaTimes} from 'react-icons'
import Logo from '../assets/logo3-white.png'
const Navbar = () => {
  return (
    <div className='fixed w-full h-[100px] flex justify-between items-center px-4 bg-black text-white'>
    <div>
        <img src={Logo} alt ="Logo Image"  style={{width: '200px'}} />
    </div>
    <div>
        <ul>
            <li> My Porfolio </li>
            <li> Github </li>
        </ul>
    </div>
    </div>
  )
}

export default Navbar
