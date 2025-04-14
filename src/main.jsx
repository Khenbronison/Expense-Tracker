import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import ExpenseForm from './components/ExpenseForm'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)