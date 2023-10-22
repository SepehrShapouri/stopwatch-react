import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import StopWatch from './StopWatch'
import App from './App'
import Video from './Video'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StopWatch/>
    <App/>
    <Video/>
  </React.StrictMode>,
)
