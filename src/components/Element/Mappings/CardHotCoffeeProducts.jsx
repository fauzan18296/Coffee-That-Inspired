import { useContext } from 'react'
import { DarkModeContext } from '../../../context/DarkMode'
import Image from '../../Ui/Image'
import PropTypes from 'prop-types'

const CardHotCoffeeProducts = ({ product }) => {
    const { darkMode } = useContext(DarkModeContext)
  return (
   <div className={`flex  rounded-lg shadow-lg size-full justify-center items-center flex-col ${darkMode && 'bg-primary text-white' || 'bg-white'}`}>
                <Image classname=" max-mobile:mx-auto max-mobile:h-60 h-72 rounded-md pt-6" image={product.image} alt="Coffee Image" />
                <h1 className={`text-2xl max-mobile:text-xl font-bold text-primary tracking-wide my-2 ${darkMode && 'text-white'}`}>{product.title}</h1>
                <p className='text-xl mx-4 max-mobile:text-base tracking-wide'>{product.description}</p>
                </div>
  )
}

CardHotCoffeeProducts.propTypes = {
  product: PropTypes.object.isRequired
}
export default CardHotCoffeeProducts