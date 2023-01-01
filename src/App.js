import React from 'react'
import "./App.css"
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About';
// import Contact from './components/Contact/Contact';
// import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
// import Portfolio from './components/Portfolio/Portfolio';
import Skills from './components/Skills/Skills';

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
    {/* 
      <Portfolio />
      <Contact />
      <Footer /> */}
    </div>
  )
}

export default App