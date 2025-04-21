import Image from '../../Ui/Image'
import { useContext} from 'react'
import { DarkModeContext } from '../../../context/DarkMode'
import { ShoppingCart } from 'react-feather'
import Button from '../../Ui/Button'
import PropTypes from 'prop-types'
//TODO: Untuk Membuat Cart Product
import { CartContext } from '../../../context/CartContext'

const CardIceCoffeeProducts = ({ product }) => {
  const { darkMode } = useContext(DarkModeContext)
  const { dispatch } = useContext(CartContext)
  
  return (
   <div className={`${darkMode && "bg-primary text-white" || "bg-white"} rounded-md shadow-lg size-full`}>
                  <div className='text-center tracking-wide'>
                  <Image classname="size-1/2 mx-auto rounded-md pt-6" image={product.image} alt="Image Coffee" />
                    <h2 className={`text-center text-xl max-mobile:text-xl text-primary my-2 font-bold ${darkMode && "text-white" || "text-primary"}`}>{product.title}</h2>
                    <p className='text-lg font-semibold max-mobile:text-xl'>{new Intl.NumberFormat("en-us", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(product.price)}</p>
                    <div className='flex justify-evenly'>
                      <Button classname='bg-black text-white rounded-md p-2 my-3 font-bold text-xl max-mobile:text-base max-mobile:p-1 max-mobile:w-4/6 max-w-full w-8/12 cursor-pointer'>Buy Now!</Button>
                      <Button classname={`${ darkMode ? 'text-white' : 'hover:text-primary' }cursor-pointer`}
                        onClick={() => dispatch({
                          type: 'ADD',
                          payload: product
                          })
                        }><ShoppingCart className='size-7  max-mobile:size-6' /></Button>
                      </div>
                    </div>
                </div>
  )
}

CardIceCoffeeProducts.propTypes = {
  product: PropTypes.object.isRequired
}
export default CardIceCoffeeProducts