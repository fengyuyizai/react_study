import * as React from "react"
import * as ReactDOM from "react-dom"
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux"
import thunk from 'redux-thunk'
import App from "./app"
import reducers from "./store/reducers"
import logger from "redux-logger"

const store = createStore(reducers, applyMiddleware(thunk, logger))

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById("app"))