import { Menu } from 'react-feather'
import Navbar from './Navbar'
import Image from '../Ui/Image'
import Button from '../Ui/Button'
import { DarkModeContext } from '../../context/DarkMode'
import { useContext } from 'react'
import { useMenuBtn } from '../../hooks/useMenuBtn'
import { Sun, Moon, ShoppingCart } from 'react-feather'

const Header = () => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext)
   const { isOpen, toggleBtn } = useMenuBtn()
  return (
    <header className={`flex p-3 w-screen justify-around items-center shadow-xl fixed z-50 ${darkMode ? 'bg-neutral-900 text-white' : 'bg-white'}`}>
      <div className=" flex gap-5 items-center">
        <a className='flex gap-2 items-center' href="/">
          <Image image='/src/assets/Img/Brand_Logo/latte-art.avif' alt="Logo" classname="size-12 rounded-md object-cover" />
          <h1 className='text-primary text-2xl font-bold max-mobile:text-xl'><span className={`${darkMode ? 'bg-neutral-900 text-white' : 'bg-white'}`}>Coffee</span><span className='dark:text-primary'>_Inspired</span></h1>
        </a>
       </div>
      <Navbar>
        <div className={`md:flex  md:static md:mx-auto gap-5  md:items-center md:justify-center container absolute max-mobile:h-screen
        max-mobile:top-full
        transition-transition duration-100 delay-75 ease-in-out
      ${!isOpen ? "max-mobile:-left-full" : "max-mobile:left-0"} 
      ${darkMode ? 'max-mobile:bg-neutral-900 text-white' : 'max-mobile:bg-white'}
       max-mobile:w-3/6  max-mobile:text-center max-mobile:flex max-mobile:flex-col max-mobile:justify-evenly max-mobile:text-lg max-mobile:shadow-md`}>
         <a href="/about"><span className="text-primary">About</span></a>
              <a href="/products" className="hover:text-primary">Product</a>
          <a href="/contact" className="hover:text-primary">Contact</a>
      <div className='flex md:hidden md:static flex-row-reverse gap-2 justify-center'>
      {/* Icon Tampilan Mobile */}
      <Button classname='hover:text-primary '>
        <ShoppingCart  className='size-5'  />
      </Button>
      <Button classname='hover:text-primary' onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? <Sun className='size-5' /> : <Moon className='size-5' /> }
      </Button>
          {/* Akhir Icon Tampilan Mobile */}
          </div>
        </div>
      </Navbar>
      <Button classname='md:hidden mx-5 text-primary' type='button' onClick={toggleBtn}>
    <Menu size={20} /> 
      </Button>
    </header>
  )
}

export default Header
