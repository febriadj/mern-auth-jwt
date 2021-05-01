import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function FormRegister() {
  const [message, setMessage] = useState(undefined)
  const [userAuth, setUserAuth] = useState({
    username: '', email: '',
    password: '', confirmPassword: ''
  })

  async function handleChange(event) {
    try {
      const { name, value } = event.target

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
      const { username, email, password, confirmPassword } = userAuth

      const fetchApi = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username, email, password, confirmPassword
        })
      })

      const fetchJson = fetchApi.json()
      const result = await fetchJson

      if (result.code !== 200) throw result.message
      
      window.location.href = '/login'
      return result
    }
    catch(err) {
      setMessage(err)
    }
  }

  return (
    <form className="register-form" method="post" onSubmit={ handleSubmit }>
      <h2 className="title">Buat Akun</h2>
      {
        message ? <p className="message">{ message }</p> : null
      }
      <input 
        type = "text"
        name = "username"
        placeholder = "Masukan username"
        onChange = { handleChange }
        value = { userAuth.username }
        required
      />
      <input 
        type = "text"
        name = "email"
        placeholder = "Masukan email"
        onChange = { handleChange }
        value = { userAuth.email }
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
      <input 
        type = "password"
        name = "confirmPassword"
        placeholder = "Masukan password sekali lagi"
        onChange = { handleChange }
        value = { userAuth.confirmPassword }
        required
      />
      <button type="submit">Buat Akun</button>
      <div className="ask">
        <p>Sudah Punya Akun?</p>
        <Link to="/login" className="link">Login Disini</Link>
      </div>
    </form>
  )
}