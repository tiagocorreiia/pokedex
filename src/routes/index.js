import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Pokedex from '../pages/Pokedex'
import Search from '../pages/Search'
import NotFound from '../pages/NotFound'

function Routes() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/pokedex' component={Pokedex} />
          <Route path='/result' component={Search} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default Routes
