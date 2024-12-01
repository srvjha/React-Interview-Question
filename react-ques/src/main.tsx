import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Key from './single-quest-page/key.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Key/>
  </StrictMode>,
)
