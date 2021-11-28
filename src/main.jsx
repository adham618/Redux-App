import { configureStore } from '@reduxjs/toolkit'
import React, { useReducer } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import userReducer from "./features/user"
const store = configureStore({
  reducer: {
    user: userReducer
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
