import { Router } from './routes/router'
import { DarkModeProvider } from './context/DarkMode'
const App = () => {
  return (
    <DarkModeProvider>
    <Router />
    </DarkModeProvider>
  )
}

export default App
