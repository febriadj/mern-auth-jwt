import { Fragment } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// import semua halaman
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'
import NotFound from './pages/NotFound'

export default function App() {
  const isLoggedIn = localStorage.getItem('token') // mengambil token pada local storage

  return (
    <Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={ Login } />
          <Route exact path="/register" component={ Register } />
          <Route exact path="/">
            {
              // jika todak ada token, tampilkan halaman awal
              // jika ada, tampilkan halaman dashboard
              !isLoggedIn ? <Home /> : <Dashboard />
            }
          </Route>
          <Route exact component={ NotFound } />
        </Switch>
      </BrowserRouter>
    </Fragment>
  )
}