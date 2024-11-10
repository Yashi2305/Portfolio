import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import './App.css'
import EducationPage from './components/EducationPage'
import TechStack from './components/TechStack'
import ProjectSection from './components/ProjectSection'
import Socials from './components/Socials'

const App = () => {
  return (
    <>
      <Navbar/>
      <HeroSection/>
      <AboutSection/>
      <EducationPage/>
      <TechStack/>
      <ProjectSection/>
      <Socials/>
    </>
  )
}

export default App
