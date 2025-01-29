import { useCoffeeProducts } from '../../hooks/useCoffeeProducts'
import Image from './Image'
import { useContext, useState } from 'react'
import { DarkModeContext } from '../../context/DarkMode'

const ProductsSection = () => {
  const { coffeeProducts } = useCoffeeProducts()
  const { darkMode } = useContext(DarkModeContext)
  const [cart, setCart] = useState([
    {
      id: 1,
      qty: 1
    }
  ])

  return (
    <div className='flex justify-center  items-center flex-col min-h-screen w-full'>
          <h1 className="text-2xl max-mobile:text-lg mt-32 text-primary font-bold tracking-wide ">Products ☕</h1>
      <div className="container flex items-center justify-center flex-col my-7">
        <div className='flex justify-center items-center'>
          <div className='flex justify-center items-center text-xl'>
          <div className='grid grid-cols-3 gap-8 max-mobile:grid-cols-1 max-mobile:mx-6'>
          {coffeeProducts.map((product) => {
            return (
              <div key={product.id}>
                <div className={`${darkMode && "bg-primary text-white" || "bg-white"} rounded-md shadow-lg size-full`}>
                  <div className='text-center tracking-wide'>
                  <Image classname="size-full" image={product.image_url} alt="Image Coffee" />
                    <h2 className={`text-center text-xl max-mobile:text-xl text-primary font-bold ${darkMode && "text-white" || "text-primary"}`}>{product.name}</h2>
                    <p className='text-lg font-semibold max-mobile:text-xl'>{new Intl.NumberFormat("en-us", { style:"currency", currency:"USD", maximumFractionDigits: 0}).format(product.price)}</p>
                    </div>
                </div>
              </div>
            )
          })}
            </div>
        </div>
        </div>
      </div>
      </div>
  )
}

export default ProductsSection
