import Header from '../components/Layouts/Header'
import ProductsSection from '../components/Ui/ProductsSection'
import { useContext } from 'react'
import { DarkModeContext } from '../context/DarkMode'

const Products = () => {
  const { darkMode } = useContext(DarkModeContext)
  return (
    <div className={`${darkMode && "bg-neutral-900 text-white" || "bg-white"}`}>
      <Header />
      <ProductsSection />
    </div>
  )
}

export default Products
