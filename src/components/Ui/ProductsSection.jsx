import { useCoffeeProducts } from '../../hooks/useCoffeeProducts'
import { CardIceCoffeeProducts } from '../Element/Mappings/CardIceCoffeeProducts'

const ProductsSection = () => {
  const { coffeeIceProducts } = useCoffeeProducts()

  return (
    <div className='flex justify-center  items-center flex-col min-h-screen w-full'>
          <h1 className="text-2xl max-mobile:text-lg mt-32 text-primary font-bold tracking-wide ">Products ☕</h1>
      <div className="container flex items-center justify-center flex-col my-7">
        <div className='flex justify-center items-center'>
          <div className='flex justify-center items-center text-xl'>
          <div className='grid grid-cols-3 gap-8 max-mobile:grid-cols-1 max-mobile:mx-6'>
              {
            coffeeIceProducts.length > 0 && coffeeIceProducts.map((product) => {
            return (
              <div key={product.id}>
                <CardIceCoffeeProducts product={product} />
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
