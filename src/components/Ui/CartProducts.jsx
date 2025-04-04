import { CartContext } from '../../context/CartContext'
import { useCoffeeProducts } from '../../hooks/useCoffeeProducts'
import { useEffect, useMemo, useContext } from 'react'

const CartProducts = (() => {
  const { cart }  = useContext(CartContext)
  const { coffeeIceProducts } = useCoffeeProducts()

  const memoizedCart = useMemo(() => cart, [cart]);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
    return () => {
      localStorage.removeItem('cart')
      console.log('CleanUp data local storage')
    }
  }, [cart])
  
  return (
         <div className="flex  items-center  w-full min-h-full flex-col">
              <h1 className='text-center text-primary font-Poppins text-4xl mb-5 font-semibold'>Cart</h1>
            <table className='table table-auto border-spacing-5 border-separate  border border-black text-left '>
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
          coffeeIceProducts.length > 0 && memoizedCart.map(item => {
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
