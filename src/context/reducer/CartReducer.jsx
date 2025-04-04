export const CartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD': {
      const productInCart = state.find((item) => item.id === action.payload.id)
      if (productInCart) {
        return state.map((item) => item.id === action.payload.id ? {
          ...item,
          qty: item.qty + 1
        } : item)
      } else {
        return [...state, {...action.payload, qty: 1 } ];
      }
    }
    default: {
      return state;
      }
 }
 
}
