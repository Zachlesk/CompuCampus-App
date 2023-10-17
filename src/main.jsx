import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import { NextUIProvider } from '@nextui-org/react'
import { Router } from './Router'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
    </NextUIProvider>
      <Router />
    </React.StrictMode>

)
