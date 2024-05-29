import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import './App.css';

import Header from './components/Header';
import SideBar from './components/SideBar';
import Home from './pages/home';
import About from './pages/about';
import CaseStudies from './pages/case-studies';
import Projects from './pages/projects';
import Contact from './pages/contact';
import ForWheels from './pages/forwheels';
import EduLearn from './pages/edulearn';
import PlatePal from './pages/platepal';
import StudySync from './pages/studysync';

function App() {
  const location = useLocation();
  const hideSidebar = location.pathname.startsWith('/case-studies/');
  
  return (
    <div className="App">
      <Header />
      <main>
      {!hideSidebar && <SideBar />}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/case-studies' element={<CaseStudies />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />

          <Route path='/case-studies/forwheels' element={<ForWheels />} />
          <Route path='/case-studies/edulearn' element={<EduLearn />} />
          <Route path='/case-studies/platepal' element={<PlatePal />} />
          <Route path='/case-studies/studysync' element={<StudySync />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
