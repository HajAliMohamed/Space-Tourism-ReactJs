import React  from 'react';
import "./crew.css"
import Header from "../header/Header"
import { Link, Route, Routes } from 'react-router-dom';
import Member from './member/Member';
import MobileNav from '../header/MobileNav';
import crews from "./crews"
import DouglasHurley from "./crewImages/image-douglas-hurley.webp"
import MarkShuttleworth from "./crewImages/image-mark-shuttleworth.webp"
import VictorGlover from "./crewImages/image-victor-glover.webp"
import AnoushehAnsari from "./crewImages/image-anousheh-ansari.webp"
function Crew() {



  return <div className='crew' data-aos="zoom-in">
    <MobileNav/>
    <Header/>


    <p><span>02</span>meet your crew</p>

    

    <div className='hero'>

    <ul>
      <li><Link to="DouglasHurley">Douglas Hurley</Link></li> 
        <li><Link to="MarkShuttleworth">Mark Shuttleworth</Link></li>
        <li><Link to="VictorGlover">Victor Glover</Link></li>
        <li><Link to="AnoushehAnsari">Anousheh Ansari</Link></li>
    </ul>

    <Routes>
  
    
      <Route path={`${crews[0].id}`} element={<Member key={crews[0].name} role={crews[0].role} name={crews[0].name} bio={crews[0].bio} img={DouglasHurley}/>}/>

      <Route path={`${crews[1].id}`} element={<Member key={crews[1].name} role={crews[1].role} name={crews[1].name} bio={crews[1].bio} img={MarkShuttleworth}/>}/>

      <Route path={`${crews[2].id}`} element={<Member key={crews[2].name} role={crews[2].role} name={crews[2].name} bio={crews[2].bio} img={VictorGlover}/>}/>

      <Route path={`${crews[3].id}`} element={<Member key={crews[3].name} role={crews[3].role} name={crews[3].name} bio={crews[3].bio} img={AnoushehAnsari}/>}/>
        
    
    </Routes>
    </div>

  </div>;
}

export default Crew;
