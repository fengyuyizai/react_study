import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import rootReducer from './reducers'
import thunk from 'redux-thunk'

const middlewares = [
  thunk
]

middlewares.push(require('redux-logger').createLogger())
const store = createStore(rootReducer, applyMiddleware(...middlewares))

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
