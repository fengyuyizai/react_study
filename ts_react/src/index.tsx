import * as React from "react"
import * as ReactDOM from "react-dom"
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import router from './router/index'

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            {
                router.map((route, i) => {
                    return <Route key={i} {...route}></Route>
                })
            }
        </Switch>
    </BrowserRouter>
    ,
    document.getElementById("app")
)