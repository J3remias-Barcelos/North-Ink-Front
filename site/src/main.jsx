import React from 'react'
import ReactDOM from 'react-dom/client'

import '../src/utils/global.css'
import '../src/utils/utils.js'
import App from './pages/App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
