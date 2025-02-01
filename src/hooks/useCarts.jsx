import { useState } from 'react'

export const useCarts = () => {
  const [cart, setCart] = useState([])

  const handleAddToCart = (id) => {
    if (cart.find(item => item.id === id)) {
      setCart(
        cart.map(item => item.id === id ? {
          ...item,
          qty: item.qty + 1,
        } : item))
    } else{
      setCart([
     ...cart,
      {
         id,
        qty: 1
        }
      ])
      }
  }
  
  return { cart, handleAddToCart, setCart }
}
