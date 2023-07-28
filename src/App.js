import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';

import Contact from './components/Contact/Contact';
import { Route, Router, Routes } from 'react-router-dom';
import Navbar from './components/Common/Navbar';
import AddProjectForm from './components/AddProjectForm';
import Addproject from './components/Project/Addproject';
import Projects from './components/Projects';

import About2 from './components/About/About2';



function App() {
  return (
    <div className="bg-[#0f0e17]">
    
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/about' element={<About2/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/admin' element={<Addproject/>}/>
        </Routes>
      
  </div>
  );
}

export default App;
