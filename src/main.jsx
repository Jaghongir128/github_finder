// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/CSS/style.css'
import { store } from './store/index.js'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
    </Provider>,
)
