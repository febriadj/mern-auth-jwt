import React, { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    document.title = 'Home'
  })

  return (
    <div className="home">
      <div className="home-wrap">
        <h2>Halaman Awal</h2>
      </div>
    </div>
  )
}