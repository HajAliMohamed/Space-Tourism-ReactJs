import React, { useState } from 'react';
import "./style/header.css"
import { Link } from 'react-router-dom';
import logo from "./logo.svg"
import humb from "./icon-hamburger.svg"
export default function Header() {

  const[clicked,setClick] = useState(false)

  function handleClick(){
      setClick(true)
  }

  if(clicked){
    document.querySelector(".mobile__navbar").classList.add("open")
  }

  return <div className='header' >

        <img src={logo} alt='logo' />
        <hr/>

        <ul className='header__navbar'>
          <li><span>00</span><Link to='/'>Home</Link></li>
          <li><span>01</span><Link to='/destination/Moon'>Destination</Link></li>
          <li><span>02</span><Link to='/crew/DouglasHurley'>Crew</Link></li>
          <li><span>03</span><Link to='/technology/LaunchVehicle'>Technology</Link></li>
        </ul>

        <img onClick={handleClick} className='humb' src={humb} alt='humburger'/>

  </div>;
}