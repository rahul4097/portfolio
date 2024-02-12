import { useState } from 'react'
import Navbar from './component/Navbar/navbar'
import Intro from './component/Intro/intro'
import Skills from './component/Skills/Skills'
import Works from './component/Works/Works'
import Contact from './component/Contact/Contact'
import Footer from './component/Footer/Footer'
function App() {

  return (
    <>
  <div className="App">
    <Navbar />
    <Intro />
    <Skills />
    <Works />
    <Contact />
    <Footer />
  </div>
    </>
  )
}

export default App
