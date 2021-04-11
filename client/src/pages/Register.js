import React from 'react'
import '../layouts/css/auth.css'
import FormRegister from '../containers/FormRegister'

export default function Register() {
  return (
    <div className="auth">
      <div className="auth-wrap">
        <FormRegister />
      </div>
    </div>
  )
}