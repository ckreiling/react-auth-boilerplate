import React, {Component} from 'react'
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom'
import './App.css'
import Login from "./auth/components/Login"
import AuthenticatedRoute from "./auth/components/AuthenticatedRoute"
import LoginStatus from './auth/components/SignoutButton'
import Nuke from "./nuke/components"

class App extends Component {
  render = () => (
    <BrowserRouter>
      <div className="App">
        <LoginStatus/>
        <Switch>
          <Route path="/login" exact component={Login}/>
          <AuthenticatedRoute path="/" exact authComponent={Nuke}/>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
