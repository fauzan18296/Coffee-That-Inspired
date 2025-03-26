import { useState, useEffect } from 'react'
import CoffeeProduct from '../services/api/CoffeeProduct.service'

export const useCoffeeProducts = () => {
  const [coffeeHotProducts, setCoffeeHotProducts] = useState([])
  const [coffeeIceProducts, setCoffeeIceProducts] = useState([])
  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal

    // API Menu Coffee Hot
    CoffeeProduct((data) => {
      setCoffeeHotProducts(data)
      console.log(data)
    }, signal, 'hot')

    // API Menu Coffee Ice
    CoffeeProduct((data) => { 
      setCoffeeIceProducts(data)
    }, signal, 'iced')
    
    return () => {
      controller.abort()
      console.log('CleanUp request aborted!')
    }
   }, [])
  return {
    coffeeHotProducts, setCoffeeHotProducts, coffeeIceProducts, setCoffeeIceProducts
  }
}
