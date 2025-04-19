import { useState, useEffect } from 'react'
import CoffeeProduct from '../services/api/CoffeeProduct.service'

export const useCoffeeProducts = () => {
  const [coffeeHotProducts, setCoffeeHotProducts] = useState([])
  const [coffeeIceProducts, setCoffeeIceProducts] = useState([])
  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal

    // API Menu Coffee Hot
    CoffeeProduct(signal, 'hot')
      .then((data) => {
        setCoffeeHotProducts(data || [])
         console.log(data)
    })
      .catch((err) => {
      console.error(err)
    })

    // API Menu Coffee Ice
    CoffeeProduct(signal, 'iced')
      .then((data) => {
        setCoffeeIceProducts(data || [])
      })
        .catch((err) => {
      console.error(err)
    })
    
    return () => {
      controller.abort()
      console.log('CleanUp request aborted!')
    }
   }, [])
  return {
    coffeeHotProducts, setCoffeeHotProducts, coffeeIceProducts, setCoffeeIceProducts
  }
}
