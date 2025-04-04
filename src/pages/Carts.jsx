import Header from '../components/Layouts/Header'
import CartProducts from '../components/Ui/CartProducts'
// import { useCarts } from '../hooks/useCarts'

const Carts = () => {
  return (
    <div>
      <Header />
      <div className='flex justify-center items-center min-h-screen'>
        <CartProducts />
        </div>
    </div>
  )
}

export default Carts
