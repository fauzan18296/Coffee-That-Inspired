import { useContext, useMemo } from 'react'
import { CartContext } from '../context/CartContext'

export const useTotalCart = () => {
    const { cart } = useContext(CartContext)
    const totalItemInCart = useMemo(() => { 
    return cart.reduce((acc, item) => acc + item.qty, 0)
  }, [cart])
  
  return { totalItemInCart, cart }
}