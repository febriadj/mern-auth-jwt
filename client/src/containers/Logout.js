import React from 'react'

export default function Logout() {
  async function handleLogout() {
    localStorage.clear()
    window.location.href = '/login'
  }

  return (
    <button onClick={ handleLogout }>Logout</button>
  )
}