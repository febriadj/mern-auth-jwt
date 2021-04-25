import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../layouts/css/main.css'

export default function Home() {
  useEffect(() => {
    document.title = 'Home'
  })

  return (
    <div className="home">
      <div className="home-wrap">
        <h2>Halaman Awal</h2>
        <div className="link">
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
      </div>
    </div>
  )
}