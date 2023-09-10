import logo from './logo.svg';
import './App.css';
import './index';
import './input.css';

import {Routes,Route} from "react-router-dom";
import LandingPage from './pages/LandingPage';
import DetailsPage from './pages/DetailsPage';
import Navbar from './components/Navbar';
import NavTest from './components/NavTest';



function App() {
  return (
    <div className="bg-sky-500/75" >
       {/* className="bg-gradient-to-b from-[#96be7f] to-[#26381c]" */}
    <Navbar/>
    {/* <NavTest/> */}
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/details" element={<DetailsPage />} />
    </Routes>
    
    </div>
    );
}

export default App;
