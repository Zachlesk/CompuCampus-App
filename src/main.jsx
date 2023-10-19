import React from 'react'
import ReactDOM from 'react-dom/client'
import { NextUIProvider } from '@nextui-org/react'
import { Router } from './Router'
import './styles.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
      <div className='fixedNavbar'>
      <Router />
      </div>
    </NextUIProvider>
  </React.StrictMode>

)
