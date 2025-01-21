import { useState, useEffect } from 'react'
import CoffeeProduct from '../services/api/CoffeeProduct.service'

export const useCoffeeProducts = () => {
  const [coffeeProducts, setCoffeeProducts] = useState([])
   useEffect(() => {
    CoffeeProduct((res) => {
      setCoffeeProducts(res.data)
      console.log(res.data)
    })
   }, [])
  return { coffeeProducts, setCoffeeProducts }
}
