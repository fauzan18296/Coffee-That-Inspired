import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from '../pages/Home'
import About from '../pages/About'

export const Router = () => {
  const Route = createBrowserRouter([
  {
    path: "/",
    element: <Home />
    },
  {
    path: "/about",
    element: <About />
    }
  ])
    return (
      <RouterProvider router={Route} />
  )
}