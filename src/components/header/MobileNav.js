import React from 'react';
import {Link} from "react-router-dom"
import "./mobileNav.css"
import close from "./icon-close.svg"
function MobileNav(props) {

  return <div className='mobile__navbar' data-aos="flip-up" style={props.isClicked ? {transform : "translateX(0)" , display : "block"} : {transform : "translateX(100%)"}} >

        <img className='humb' src={close} alt='humburger' onClick={()=>{
          props.close()
        }}/>

        <ul className='mobile__navbar__lists'>
          <li><span>00</span><Link to='/'>Home</Link></li>
          <li><span>01</span><Link to='/destination/Moon'>Destination</Link></li>
          <li><span>02</span><Link to='/crew/DouglasHurley'>Crew</Link></li>
          <li><span>03</span><Link to='/technology/LaunchVehicle'>Technology</Link></li>
        </ul>

  </div>;
}

export default MobileNav;
