import React, { useEffect } from 'react'
import '../layouts/css/main.css'

export default function NotFound() {
  useEffect(() => {
    document.title = '404 - Halaman Tidak Ditemukan'
  })

  return (
    <div className="notfound">
      <div className="notfound-wrap">
        <h1 className="404">404</h1>
        <span></span>
        <p className="paragraf">Halaman yang anda cari tidak ditemukan</p>
      </div>
    </div>
  )
}