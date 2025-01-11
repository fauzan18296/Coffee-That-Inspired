import { ShoppingCart, Sun, Moon } from 'react-feather'
import PropTypes from 'prop-types'
import Button from '../Ui/Button'
const Navbar = ({ children }) => {
  return (
  <div className="container flex mx-2 gap-5 items-center">
    { children }
        <nav className="hidden md:flex  md:static mx-auto gap-5  md:items-center md:justify-center md:text-lg font-semibold">
      <a href="/about"><span className="text-primary">About</span></a>
      <a href="/products" className="hover:text-primary">Product</a>
        <a href="/contact" className="hover:text-primary">Contact</a>
          <div className='flex md:hidden md:static flex-row-reverse gap-2 justify-center'>
          {/* Icon Tampilan Mobile */}
          <Button classname='hover:text-primary ' name={<ShoppingCart size={20} />} />
          <Button classname='hover:text-primary ' name={ <Sun size={20} />}/>
              {/* Akhir Icon Tampilan Mobile */}
          </div>
      </nav >
      <div className='hidden md:flex md:static gap-2 justify-end'>
        {/* Icon Tampilan Desktop */}
        <Button classname='hover:text-primary' name={<Sun />} />
         <Button classname='hover:text-primary' name={<Moon />} />
        <Button classname='hover:text-primary' name={<ShoppingCart />} />
          {/* Akhir Icon Tampilan Desktop */}
          </div>
      </div>
  )
}

Navbar.propTypes = {
  children: PropTypes.node.isRequired
}

export default Navbar
