import * as React from 'react'
import { Router } from 'react-router-dom'
import {Switch, Route} from 'react-router'
import * as History from 'history'

import {LoginComponent} from 'src/login/LoginForm' 
import {DashboardComponent} from 'src/main/components'


export const history = History.createBrowserHistory()

export const render = () => (
    <Router history={history} >
        <Switch>
            <Route exact={true} path='/' component={LoginComponent}/>
            <Route exact={true} path='/main' component={DashboardComponent}/>
        </Switch>
    </Router>
    
)
