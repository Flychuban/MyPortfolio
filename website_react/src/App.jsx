import { useState } from 'react'
import Hero from './sections/Hero/Hero'
import Projects from './sections/Projects/Projects'
import Skills from './sections/Skills/Skills'
import Contact from './sections/Contact/Contact'
import './App.css'

function App() {
  return (
    <>
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </>
  )
}

export default App
