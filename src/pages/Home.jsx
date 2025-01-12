import Header from '../components/Layouts/Header'
import HeroSection from '../components/Ui/HeroSection'
import { DarkModeContext } from '../context/DarkMode'
import { useContext } from 'react'
const Home = () => {
    const { darkMode } = useContext(DarkModeContext)
  return (
    <div className={`${darkMode ? 'bg-neutral-900' : 'bg-white'}`}>
      <Header />
      <HeroSection />
    </div>
  )
}

export default Home
