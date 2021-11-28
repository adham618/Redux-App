import { configureStore } from '@reduxjs/toolkit'
import React, { useReducer } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import userReducer from "./features/user"
import themeReducer from "./features/theme"
const store = configureStore({
  reducer: {
    user: userReducer,
    theme: themeReducer
  }
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
