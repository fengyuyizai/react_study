import * as React from "react"
import { Redirect, HashRouter, Route, Switch } from 'react-router-dom'
import router from './router/index'

export default class App extends React.Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    {
                        router.map((route, i) => {
                            return <Route key={i} {...route}></Route>
                        })
                    }
                    <Redirect from="/" to="/home"></Redirect>
                </Switch>
            </HashRouter>
        )
    }
}
    
