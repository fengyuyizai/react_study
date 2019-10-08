import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from '@/view/home.js'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/home" exact={true} component={Home}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
