import React from 'react'
import { Redirect } from 'react-router-dom'

export default function Dashboard() {
  const isLoggedIn = localStorage.getItem('token')

  if (!isLoggedIn) {
    return <Redirect to="/login" />
  }

  return (
    <div className="dashboard">
      <div className="dashboard-wrap">
        <h2>Halaman Dashboard</h2>
      </div>
    </div>
  )
}