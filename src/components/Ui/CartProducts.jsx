import PropTypes from 'prop-types'
import { memo } from 'react'

const CartProducts = memo((props) => {
  const { cart, coffeeProducts } = props
  return (
    <div className='w-5/6'>
              <h1 className='text-center text-primary text-2xl mb-5 font-semibold'>Cart</h1>
            <table className='table table-auto border-spacing-x-6 border-separate  border border-black text-left '>
              <thead>
                <tr>
                <th>Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  </tr>
              </thead>
            { 
             coffeeProducts.length > 0 && cart.map(item => {
                const product = coffeeProducts.find(product => product.id === item.id)
                return (
                  <tr key={item.id}>
                    <td>{product.name}</td>
                    <td>{(product.price).toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })}</td>
                    <td>{item.qty}</td>
                    <td>{ (product.price * item.qty).toLocaleString('en-US', { style:'currency', currency:'USD', maximumFractionDigits: 0 })}</td>
                  </tr>
                )
              })
            }
              </table>
              </div>
  )
})

CartProducts.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.shape({})),
  coffeeProducts: PropTypes.arrayOf(PropTypes.shape({})),
}
CartProducts.displayName = 'MyCartProducts'

export default CartProducts
