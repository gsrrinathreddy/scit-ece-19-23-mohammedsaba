
import './App.css';
import Navbar from './components/Navbar'; 
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Aboutme from './pages/Aboutme';
import Hobbies from './pages/Hobbies';
import Qualification from './pages/Qualification';
import Experience from './pages/Experience';
import Ceritification from './pages/Ceritification';
import Workshop from './pages/Workshop';
import ContactMe from './pages/ContactMe';
import Skills from './pages/Skills';

function App( ) {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/Aboutme" element={<Aboutme/>}/>
        <Route path="/Hobbies" element={<Hobbies/>}/>
        <Route path="Qualification/" element={<Qualification/>}/>
        <Route path="/Skills" element={<Skills/>}/>
        <Route path="/Experience" element={<Experience/>}/>
        <Route path="/Contactme" element={<ContactMe/>}/>
        <Route path="/Ceritification" element={<Ceritification/>}/>
        <Route path="Workshop" element={<Workshop/>}/>




      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
