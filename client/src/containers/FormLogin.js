import React, { useState } from 'react'

export default function FormLogin() {
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
      const postLogin = await fetch('http://localhost:8080/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nameOrEmail, password })
      })

      // mengambil token dari api
      const postLoginJson = postLogin.json()
      const result = await postLoginJson

      localStorage.setItem('token', result.token) // memasukkan token ke localStorage browser

      // menghapus value state userAuth
      userAuth((prevState) => ({
        ...prevState, nameOrEmail: '', password: '' // menghapus value form input
      }))
    }
    catch(err) {
      console.error(err)
    }
  }

  return (
    <form className="login-form" method="post" onSubmit={ handleSubmit }>
      <input 
        name = "nameOrEmail"
        placeholder = "Masukan username atau email"
        onChange = { handleChange }
      />
      <input 
        name = "password"
        placeholder = "Masukan password"
        onChange = { handleChange }
      />
      <button type="submit">Login</button>
    </form>
  )
}