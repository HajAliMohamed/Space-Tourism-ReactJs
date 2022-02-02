import React ,{useEffect} from 'react';
import Home from "../home/Home"
import Destination from "../destination/Destination"
import Crew from "../crew/Crew"
import Technology from "../technology/Technology"
import "./style/app.css"
import {BrowserRouter , Routes , Route , HashRouter} from "react-router-dom"
import Planet from '../destination/planets/Planet';
import Member from '../crew/member/Member';
import Rocket from '../technology/rocket/Rocket';
import AOS from 'aos';
import 'aos/dist/aos.css';
function App() {

  return (
    <div className="App">

    <HashRouter>
        <Routes>
          <Route path="/" element={ <Home />}/>  
          <Route path="/destination/*" element={<Destination/>} >
              <Route path="Moon" element={<Planet/>}/>
              <Route path="Mars" element={<Planet/>}/>
              <Route path="Europa" element={<Planet/>} />
              <Route path="Titan" element={<Planet/>}/>
          </Route>
          <Route path="/crew/*" element={<Crew/>}>
              <Route path="DouglasHurley" element={<Member/>}/>
              <Route path="MarkShuttleworth" element={<Member/>}/>
              <Route path="VictorGlover" element={<Member/>} />
              <Route path="AnoushehAnsari" element={<Member/>}/>
          </Route>
          <Route path="/technology/*" element={<Technology/>}>
              <Route path="LaunchVehicle" element={<Rocket/>}/>
              <Route path="SpacePort" element={<Rocket/>} />
              <Route path="SpaceCapsule" element={<Rocket/>}/>
          </Route>
        </Routes>

    </HashRouter>

    </div>
  );
}

export default App;
