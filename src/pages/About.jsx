import AboutSection from '../components/Ui/AboutSection'
import Header from '../components/Layouts/Header'
import { DarkModeContext } from '../context/DarkMode'
import { useContext } from 'react'
const About = () => {
  const { darkMode } = useContext(DarkModeContext)
  return (
    <div className={`${darkMode && 'bg-neutral-900 text-white'}`}>
    <Header />
     <AboutSection /> 
    </div>
  )
}

export default About
