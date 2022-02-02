import React from 'react';
import "./home.css"
import Header from "../header/Header"
import MobileNav from '../header/MobileNav';
import { Link } from 'react-router-dom';
function Home() {
  return <div className='home' >
            <MobileNav/>
            <Header/>

            <div className='hero' >
              <div>
                <p>So, you want to travel to</p>
                <p>Space</p>
                <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience! Explore </p>
              </div>

              <Link Link to='/destination/Moon'>Explore</Link>
            </div>
  </div>;
}

export default Home;
