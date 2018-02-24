import React from 'react'
import { Route, Link } from 'react-router-dom'
import Login from '../login'
import Home from '../home'

export default () => (
  <div>
    <header>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
    </main>
  </div>
)
