import React, { useEffect } from 'react'
import '../layouts/css/auth.css'
import FormLogin from '../containers/FormLogin'

export default function Login() {
  useEffect(() => {
    document.title = 'Login'
  })

  return (
    <div className="auth">
      <div className="auth-wrap">
        <FormLogin />
      </div>
    </div>
  )
}