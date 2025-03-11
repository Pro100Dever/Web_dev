import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App'
import './index.css'

function toTime(sec) {
  const min = Math.floor(sec / 60)
  const seconds = sec % 60
  return `${min}:${seconds}`
}
const check = toTime(13000)
console.log(check)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
