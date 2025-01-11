import { Menu } from 'react-feather'
import Logo from '../../assets/Img/Brand_Logo/latte-art.avif'
import Navbar from './Navbar'
import Button from '../Ui/Button'
const Header = () => {
  return (
    <header className="flex dark:bg-black/55 dark:backdrop-blur-md bg-white p-3 w-screen justify-between items-center shadow-xl fixed">
      <Navbar>
         <a className='flex gap-2 items-center' href="/">
          <img src={ Logo } alt="Logo" className="w-12 rounded-md object-cover" />
          <h1 className="text-primary text-2xl font-bold"><span className="dark:text-white">Coffee</span> <span className='dark:text-primary'>_Inspires</span></h1>
        </a>
      </Navbar>
      <Button classname='md:hidden mx-5 text-primary' type='button' name={<Menu size={20} />} />
    </header>
  )
}

export default Header
