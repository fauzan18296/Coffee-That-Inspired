import { ShoppingCart, Sun, Moon } from 'react-feather'
import PropTypes from 'prop-types'
import Button from '../Ui/Button'
import { DarkModeContext } from '../../context/DarkMode'
import { useContext } from 'react'
import { Link } from 'react-router'

const Navbar = ({children}) => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext)
  return (
    <>
      <nav className={`md:text-lg md:font-semibold ${darkMode && 'bg-neutral-900 text-white' }
      font-Poppins font-bold`}>
          {children}
      </nav >
      <div className='hidden md:flex md:static gap-2 justify-center'>
        {/* Icon Tampilan Desktop */}
        <Button classname='hover:text-primary' onClick={() => setDarkMode(!darkMode)}> 
          {
          darkMode ? <Sun /> : <Moon />
          }
          </Button> 
        <Button classname='hover:text-primary'>
          <Link to='/carts'><ShoppingCart /></Link>
        </Button>
          {/* Akhir Icon Tampilan Desktop */}
          </div>
    </>
  )
}

Navbar.propTypes = {
  children: PropTypes.node.isRequired
}

export default Navbar
