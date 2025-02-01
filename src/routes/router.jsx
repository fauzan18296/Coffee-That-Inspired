import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from '../pages/Home'
import About from '../pages/About'
import Products from '../pages/Products'
import Carts from '../pages/Carts'

export const Router = () => {
  const Route = createBrowserRouter([
  {
    path: "/",
    element: <Home />
    },
  {
    path: "/about",
    element: <About />
    },
  {
    path: "/products",
    element: <Products />
    },
  {
    path: "/carts",
    element: <Carts />
    },
  ])
    return (
      <RouterProvider router={Route} />
  )
}