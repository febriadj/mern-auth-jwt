import React, { useEffect, useState } from 'react'
import Logout from '../containers/Logout'

export default function Dashboard() {
  const token = localStorage.getItem('token') // mengambil token pada local storage
  const [userData, setUserData] = useState({}) // state ini untuk menyimpan data pengguna

  useEffect(() => {
    (async function fetchData() {
      const fetchUser = await fetch('http://localhost:8080/api/user', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token // memberikan token ke server
        }
      })
      
      const userJson = fetchUser.json() // mengambil data fetch dalam bentuk json
      const user = await userJson // userJson berbentuk promise maka harus di await
  
      document.title = user.username

      return setUserData(user)
    })()
  }, [token])

  return (
    <div className="dashboard">
      <div className="dashboard-wrap">
        <Logout />
        <h2 className="username">{ userData.username }</h2>
        <p className="email">{ userData.email }</p>
      </div>
    </div>
  )
}