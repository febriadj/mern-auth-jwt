import { Fragment } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// import semua halaman
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'

export default function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={ Login } />
          <Route exact path="/register" component={ Register } />
          <Route exact path="/" component={ Home } />
          <Route exact path="/:username" component={ Dashboard } />
        </Switch>
      </BrowserRouter>
    </Fragment>
  )
}