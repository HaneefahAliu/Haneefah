import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/home';
import About from './pages/about';
import CaseStudies from './pages/case-studies';
import ForWheels from './pages/forwheels';
import PlatePal from './pages/platepal';
import Twikkie from './pages/twikkie';

function App() {
  const location = useLocation();
  
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/case-studies' element={<CaseStudies />} />

          <Route path='/case-studies/twikkie' element={<Twikkie />} />
          <Route path='/case-studies/forwheels' element={<ForWheels />} />
          <Route path='/case-studies/platepal' element={<PlatePal />} />
        </Routes>
      </main>
      {location.pathname !== '/' && <Footer />}
    </div>
  );
}

export default App;
