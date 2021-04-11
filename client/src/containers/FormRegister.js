import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function FormRegister() {
  const [userAuth, setUserAuth] = useState({
    username: '', email: '',
    password: '', confirmPassword: ''
  })

  async function handleChange(event) {
    try {
      const { name, value } = event.target
      console.log({ name: value })
    }
    catch(err) {
      console.error(err)
    }
  }

  return (
    <form className="register-form" method="post">
      <h2 className="title">Buat Akun</h2>
      <input 
        name = "username"
        placeholder = "Masukan username"
        onChange = { handleChange }
        value = { userAuth.username }
      />
      <input 
        name = "email"
        placeholder = "Masukan email"
        onChange = { handleChange }
        value = { userAuth.email }
      />
      <input 
        name = "password"
        placeholder = "Masukan password"
        onChange = { handleChange }
        value = { userAuth.password }
      />
      <input 
        name = "confirmPassword"
        placeholder = "Masukan password sekali lagi"
        onChange = { handleChange }
        value = { userAuth.confirmPassword }
      />
      <button type="submit">Buat Akun</button>
      <div className="ask">
        <p>Belum Punya Akun?</p>
        <Link to="/login" className="link">Login Disini</Link>
      </div>
    </form>
  )
}