import { CartContext } from '../../context/CartContext'
import { useCoffeeProducts } from '../../hooks/useCoffeeProducts'
import { useEffect, useContext } from 'react'

const CartProducts = (() => {
  const { cart } = useContext(CartContext)
  const { coffeeIceProducts } = useCoffeeProducts()

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
    return () => {
      localStorage.removeItem('cart')
      console.log('CleanUp data local storage')
    }
  }, [cart])
  
  return (
         <div className="flex justify-center  items-center  w-full min-h-screen flex-col">
              <h1 className='text-center text-primary font-Poppins text-4xl mb-5 font-semibold'>Cart</h1>
            <table className='table table-auto border-spacing-x-10 border-separate max-mobile:border-spacing-x-2 border rounded-md border-black text-balance '>
              <thead>
                <tr  className='text-lg'>
                <th>Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  </tr>
        </thead>
        <tbody>
            { 
          coffeeIceProducts.length > 0 && cart.map(item => {
            const product = coffeeIceProducts.find(products => products.id == item.id)
            
                return (
                  <tr className='text-base' key={item.id}>
                    <td className='text-primary font-bold text-xl'>{product.title}</td>
                    <td className='text-lg font-medium'>{new Intl.NumberFormat("en-US", { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(product.price)}</td>
                    <td className='text-lg font-medium'>{item.qty}</td>
                    <td className='text-lg font-medium'>{(product.price * item.qty).toLocaleString("en-US", { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })}</td>
                  </tr>
                )
          })
          }
                </tbody>
              </table>
      </div>

  )
})

export default CartProducts
