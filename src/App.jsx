import { Router } from './routes/router'
import { DarkModeProvider } from './context/DarkMode'
import {CartContextProvider} from './context/CartContext'

const App = () => {
  return (
    <DarkModeProvider>
      <CartContextProvider>
        <Router />
      </CartContextProvider>
      </DarkModeProvider>
  )
}

export default App
