import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import { Router } from './Router'

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
 <div className='card'> 
    <React.StrictMode>
      <BrowserRouter>
        <Router />
        <App/>
      </BrowserRouter>
    
    </React.StrictMode>
  </div> 
);