import { createContext, useReducer } from 'react'
import { CartReducer } from './reducer/CartReducer'
import PropTypes from 'prop-types'

const CartContext = createContext()

const CartContextProvider = ({children}) => {
  const [cart, dispatch] = useReducer(CartReducer, [])
   
  return (
    <CartContext.Provider value={{cart, dispatch}}>
  {children}
    </CartContext.Provider>
  )
}

CartContextProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export { CartContextProvider, CartContext }
