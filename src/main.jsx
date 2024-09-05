import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Logo from './componentes/Logo.jsx'
import './componentes/index.css'
import './componentes/logo.css'
import './componentes/email.jsx'
import Email from './componentes/email.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 
    <App />
    <Email/>
    <Logo/>
    
  </React.StrictMode>,
)
