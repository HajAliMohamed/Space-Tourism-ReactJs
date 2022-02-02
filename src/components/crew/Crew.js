import React, {useState ,useEffect} from 'react';
import "./crew.css"
import Header from "../header/Header"
import { Link, Route, Routes } from 'react-router-dom';
import Member from './member/Member';
import MobileNav from '../header/MobileNav';
function Crew() {

  const[items,setItems] = useState([])

  useEffect(()=>{
    fetch("http://localhost:3001/crew")
    .then(res => res.json())
    .then(data => setItems(data))
  }, [])
  return <div className='crew' >
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
    {
        items.map((i)=>{
          return (<Route path={`${i.id}`} element={<Member key={i.name} role={i.role} name={i.name} bio={i.bio} img={i.images.png}/>}/>)
        })
      }
    </Routes>
    </div>

  </div>;
}

export default Crew;
