import { useCoffeeProducts } from '../../hooks/useCoffeeProducts'
import Image from './Image'
import { useContext} from 'react'
import { DarkModeContext } from '../../context/DarkMode'
import { ShoppingCart } from 'react-feather'
import Button from './Button'

// import CartProducts from './CartProducts'
import { useCarts } from '../../hooks/useCarts'

const ProductsSection = () => {
  const { coffeeIceProducts } = useCoffeeProducts()
  const { darkMode } = useContext(DarkModeContext)
  const { cart, handleAddToCart } = useCarts()

  return (
    <div className='flex justify-center  items-center flex-col min-h-screen w-full'>
          <h1 className="text-2xl max-mobile:text-lg mt-32 text-primary font-bold tracking-wide ">Products ☕</h1>
      <div className="container flex items-center justify-center flex-col my-7">
        <div className='flex justify-center items-center'>
          <div className='flex justify-center items-center text-xl'>
          <div className='grid grid-cols-3 gap-8 max-mobile:grid-cols-1 max-mobile:mx-6'>
              {
            coffeeIceProducts.length > 0 && [...coffeeIceProducts].map((product, index) => {
            return (
              <div key={index}>
                <div className={`${darkMode && "bg-primary text-white" || "bg-white"} rounded-md shadow-lg size-full`}>
                  <div className='text-center tracking-wide'>
                  <Image classname="size-2/4 mx-auto rounded-md pt-6" image={product.image} alt="Image Coffee" />
                    <h2 className={`text-center text-xl max-mobile:text-xl text-primary my-2 font-bold ${darkMode && "text-white" || "text-primary"}`}>{product.title}</h2>
                    <p className='text-lg font-semibold max-mobile:text-xl'>{new Intl.NumberFormat("en-us", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(product.price)}</p>
                    <div className='flex justify-evenly'>
                      <Button classname='bg-black text-white rounded-md p-2 my-3 font-bold text-xl max-mobile:text-base max-mobile:p-1 max-mobile:w-4/6 max-w-full w-8/12 cursor-pointer'>Buy Now!</Button>
                      <Button classname='hover:text-primary cursor-pointer'
                        onClick={() => handleAddToCart(product.id)}><ShoppingCart className='size-7  max-mobile:size-6' /></Button>
                      </div>
                    </div>
                </div>
              </div>
            )
          })}
            </div>
            {/* <CartProducts
                cart={cart}
                coffeeProducts={coffeeProducts} /> */}
        </div>
        </div>
      </div>
      </div>
  )
}

export default ProductsSection
