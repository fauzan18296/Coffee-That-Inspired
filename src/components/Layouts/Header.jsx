import { Menu } from 'react-feather'
import Navbar from './Navbar'
import Image from '../Ui/Image'
import Button from '../Ui/Button'
import { DarkModeContext } from '../../context/DarkMode'
import { useContext } from 'react'
import { useMenuBtn } from '../../hooks/useMenuBtn'
import { Link } from 'react-router'
import { Sun, Moon, ShoppingCart } from 'react-feather'
import Logo from '../../assets/Img/Brand_Logo/latte-art.avif'

const Header = () => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext)
  const { isOpen, toggleBtn, handleOutAreaNav } = useMenuBtn()
  document.addEventListener("click", handleOutAreaNav)
  return (
    <header className={`flex p-3 w-screen justify-around items-center shadow-xl fixed z-50 ${darkMode && 'bg-neutral-900 text-white' || 'bg-white'}`}>
        <Button classname='md:hidden mx-2 text-primary' type='button' onClick={toggleBtn}>
    <Menu id='hamburger-menu' size={20} /> 
      </Button>
      <div className=" flex gap-5 items-center justify-center">
        <Link className='flex gap-2 items-center' to="/">
          <Image image={Logo} alt="Logo" classname="size-12 rounded-md object-cover" />
          <h1 className='text-primary text-2xl font-extrabold max-mobile:text-xl font-Poppins'><span className={`${darkMode && 'bg-neutral-900 text-white'}`}>Coffee</span><span className='dark:text-primary'>_Inspired</span></h1>
        </Link>
       </div>
      <Navbar>
        <div id='menuNav' className={`md:flex  md:static md:mx-auto gap-5  md:items-center md:justify-center container absolute max-mobile:h-screen
        max-mobile:top-full
        transition-transition duration-100 delay-75 ease-in-out
      ${!isOpen ? "max-mobile:-left-full" : "max-mobile:left-0"} 
      ${darkMode && 'max-mobile:bg-neutral-900 text-white' || 'max-mobile:bg-white' }
       max-mobile:w-3/6  max-mobile:text-center max-mobile:flex max-mobile:flex-col max-mobile:justify-evenly max-mobile:text-lg max-mobile:shadow-md`}>
         <Link to="/about"><span className="text-primary">About</span></Link>
              <Link to="/products" className="hover:text-primary">Product</Link>
          <Link to="/contact" className="hover:text-primary">Contact</Link>
      <div className='flex md:hidden md:static flex-row-reverse gap-2 justify-center'>
      {/* Icon Tampilan Mobile */}
      <Button classname='hover:text-primary' onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? <Sun className='size-5' /> : <Moon className='size-5' /> }
      </Button>
          {/* Akhir Icon Tampilan Mobile */}
          </div>
        </div>
      </Navbar>
      <Button classname='md:hidden max-mobile:mx-2 max-mobile:text-primary'>
        <ShoppingCart size={20} />
      </Button>
    </header>
  )
}

export default Header
