import { useState, useEffect, useContext, useMemo } from 'react'
import { CartContext } from '../context/CartContext'

export const useTotalCart = () => {
  const [totalCart, setTotalCart] = useState(0)
    const { cart } = useContext(CartContext)
    const totalItemInCart = useMemo(() => { 
    return cart.reduce((acc, item) => acc + item.qty, 0)
  }, [cart])
  useEffect(() => {
      setTotalCart(totalItemInCart)
   }, [totalItemInCart])
  
  return { totalCart, cart }
}