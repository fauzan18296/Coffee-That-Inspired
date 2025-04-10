import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from '../pages/Home'
import About from '../pages/About'
import Products from '../pages/Products'
import Carts from '../pages/Cart/Carts'
import Contact from '../pages/Contact'

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
      path: '/carts',
      element: <Carts />
    }, 
    {
      path: '/contact',
      element: <Contact />
    }
  ])
    return (
      <RouterProvider router={Route} />
  )
}