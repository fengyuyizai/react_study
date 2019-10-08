import * as React from "react"
import * as ReactDOM from "react-dom"
import { HashRouter, Route, Switch } from 'react-router-dom'
import router from './router/index'

ReactDOM.render(
    <HashRouter>
        <Switch>
            {
                router.map((route, i) => {
                    return <Route key={i} {...route}></Route>
                })
            }
        </Switch>
    </HashRouter>
    ,
    document.getElementById("app")
)