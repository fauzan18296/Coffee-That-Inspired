import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from '../pages/Home'
import About from '../pages/About'

export const Route = () => {
  const Routes = createBrowserRouter([
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
      <RouterProvider router={Routes} />
  )
}