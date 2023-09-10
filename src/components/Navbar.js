import React from 'react';
import facebook from "../assets/icons/socials/facebook.png"
import github from "../assets/icons/socials/github.png"
import twitter from "../assets/icons/socials/twitter.png"
import logo from "../assets/icons/socials/logo.png"

const Navbar = ()=>{
  return(
    <div className='flex justify-between items-center pt-5'>
      <img className='cursor-pointer' src={logo} alt='logo' width={40}/>
      <ul className='hidden md:flex'>
        <li className='px-2'>
          <a href='https://www.facebook.com/pamornpon.Z/' target='blank'>
          <img src={facebook} alt='logo' width={30} /></a>
        </li>
        <li className='px-2'>
          <a href='https://github.com/firstfear1412' target='blank'>
          <img src={github} alt='logo' width={30}/></a>
        </li>
        <li className='px-2'>
          <a href='https://www.twitter.com/' target='blank'>
          <img src={twitter} alt='logo' width={30}/></a>
        </li>
      </ul>
    </div>
    
  );
}

export default Navbar;