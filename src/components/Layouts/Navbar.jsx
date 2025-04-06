import { ShoppingCart, Sun, Moon } from 'react-feather'
import PropTypes from 'prop-types'
import Button from '../Ui/Button'
import { DarkModeContext } from '../../context/DarkMode'
import { useContext, memo } from 'react'
import { Link } from 'react-router'
import { useTotalCart } from '../../hooks/useTotalCart'

const Navbar = memo(({children}) => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext)
  const { totalCart, cart } = useTotalCart()

  return (
    <>
      <nav className={`md:text-lg md:font-semibold ${darkMode && 'bg-neutral-900 text-white' }
      font-Poppins font-bold`}>
          {children}
      </nav >
      <div className='hidden md:flex md:static gap-2 justify-center relative'>
        {/* Icon Tampilan Desktop */}
        <Button classname='hover:text-primary' onClick={() => setDarkMode(!darkMode)}> 
          {
          darkMode ? <Sun size={25} /> : <Moon size={25} />
          }
          </Button> 
        <Button type='button' classname='hover:text-primary'>
          <Link to='/carts'>
            <ShoppingCart size={25} />
            <div className={`${cart == 0 ?'hidden' : 'bg-primary'  } text-white rounded-full text-sm text-bold shadow-md w-5 absolute ms-4 bottom-5`}>{totalCart}</div>
            </Link>
        </Button>
          {/* Akhir Icon Tampilan Desktop */}
          </div>
    </>
  )
})

Navbar.propTypes = {
  children: PropTypes.node.isRequired
}
Navbar.displayName = 'MyNavbar'

export default Navbar
