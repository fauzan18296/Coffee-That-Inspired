import { createContext, useState } from 'react'
import PropTypes from 'prop-types'

const DarkModeContext = createContext()

const DarkModeProvider = ({ children }) => {  
  const [darkMode, setDarkMode] = useState(false)

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  )
}
 
DarkModeProvider.propTypes = { 
  children: PropTypes.node.isRequired
 }
export { DarkModeProvider, DarkModeContext }