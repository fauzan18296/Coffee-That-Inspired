import Header from '../components/Layouts/Header'
import CartProducts from '../components/Ui/CartProducts'
import { useCarts } from '../hooks/useCarts'
import { useCoffeeProducts } from '../hooks/useCoffeeProducts'

const Carts = () => {
  const { coffeeProducts } = useCoffeeProducts()
  const { cart } = useCarts()
  return (
    <div>
      <Header />
      <div className='flex justify-center items-center min-h-screen'>
        <CartProducts
          cart={cart}
          coffeeProducts={coffeeProducts} />
        </div>
    </div>
  )
}

export default Carts
