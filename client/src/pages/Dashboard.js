import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom'

export default function Dashboard() {
  const isLoggedIn = localStorage.getItem('token') // mengambil token pada local storage
  const [userData, setUserData] = useState({}) // state ini untuk menyimpan data pengguna

  useEffect(() => {
    (async function fetchData() {
      const fetchUser = await fetch('http://localhost:8080/api/user', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + isLoggedIn // memberikan token ke server
        }
      })
      
      const userJson = fetchUser.json() // mengambil data fetch dalam bentuk json
      const user = await userJson // userJson berbentuk promise maka harus di await
  
      return setUserData(user)
    })()
  }, [isLoggedIn])
  
  // kondisi jika tidak ada token didalam local storage
  if (!isLoggedIn) {
    return <Redirect to="/login" /> //re-redirect kehalaman login
  }

  return (
    <div className="dashboard">
      <div className="dashboard-wrap">
        <h2 className="username">{ userData.username }</h2>
        <p className="email">{ userData.email }</p>
      </div>
    </div>
  )
}