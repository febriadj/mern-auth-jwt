import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function FormLogin() {
  const [message, setMessage] = useState(undefined)
  const [userAuth, setUserAuth] = useState({
    nameOrEmail: '',
    password: ''
  })

  async function handleChange(event) {
    try {
      const { name, value } = event.target

      // mengisi nilai state userAuth
      setUserAuth((prevState) => ({ 
        ...prevState, [name]: value 
      }))
    }
    catch(err) {
      console.error(err)
    }
  }

  async function handleSubmit(event) {
    try {
      event.preventDefault()
      const { nameOrEmail, password } = userAuth

      // mengirim body request ke server
      const postLogin = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nameOrEmail, password })
      })

      // mengambil token dari api
      const postLoginJson = postLogin.json()
      const result = await postLoginJson

      // menghapus value state userAuth
      setUserAuth((prevState) => ({
        ...prevState, nameOrEmail: '', password: '' // menghapus value form input
      }))

      // cek apakah token bernilai undefined atau tidak
      if (result.token === undefined) throw result

      localStorage.setItem('token', result.token) // memasukkan token ke localStorage browser

      window.location.href = '/'
    }
    catch(err) {
      setMessage(err.message)
    }
  }

  return (
    <form className="login-form" method="post" onSubmit={ handleSubmit }>
      <h2 className="title">Login</h2>
      {
        message ? <p className="message">{ message }</p> : null
      }
      <input 
        type = "text"
        name = "nameOrEmail"
        placeholder = "Masukan username atau email"
        onChange = { handleChange }
        value = { userAuth.nameOrEmail }
        required
      />
      <input 
        type = "password"
        name = "password"
        placeholder = "Masukan password"
        onChange = { handleChange }
        value = { userAuth.password }
        required
      />
      <button type="submit">Login</button>
      <div className="ask">
        <p>Belum Punya Akun?</p>
        <Link to="/register" className="link">Buat Akun Disini</Link>
      </div>
    </form>
  )
}