import Header from '../components/Layouts/Header'
import ContactSection from '../components/Ui/ContactSection'
import { useContext } from 'react'
import { DarkModeContext } from '../context/DarkMode'

const Contact = () => {
  const { darkMode } = useContext(DarkModeContext)
  return (
    <div className={`${darkMode && 'bg-neutral-900 text-white'}`}>
      <Header />
      <ContactSection />
    </div>
  )
}

export default Contact
