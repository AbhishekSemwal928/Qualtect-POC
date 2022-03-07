
import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'

const Routes = () => {
    return (
        <Switch>
            <Redirect from="/" to="/login" exact />
            {/* <Route path="/" component={Home} /> */}

            <Route path="/login" component={Login} />
            <Route path="/home" component={Home} />

        </Switch>
    )
}

export default Routes