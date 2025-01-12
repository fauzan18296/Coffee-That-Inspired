import { Route } from './routes/route'
import { DarkModeProvider } from './context/DarkMode'
const App = () => {
  return (
    <DarkModeProvider>
    <Route />
    </DarkModeProvider>
  )
}

export default App
