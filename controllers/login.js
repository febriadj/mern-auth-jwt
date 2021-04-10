'use strict'

const 
  jwt = require('jsonwebtoken')
, token = process.env.SECRET_TOKEN
, Users = require('../models/users')

exports.routerLogin = async (req, res, next) => {
  try {
    const { nameOrEmail, password } = req.body
    const regexPassword = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]){8,24}/

    // kondisi jika password tidak sesuai dengan regex password
    if (regexPassword.test(password) == false) {
      return res.status(400).json({ // password harus berupa gabungan huruf kecil, besar, angka, dan simbol
        status: 'login gagal',
        code: 400,
        message: 'password tidak valid'
      })
    }

    // mengambil data pengguna melalui username atau email dan password
    const user = await Users.findOne({
      $and: [{
        $or: [{ username: nameOrEmail }, { email: nameOrEmail }],
        password
      }]
    })

    // kondisi jika pengguna tidak ditemukan
    if (!user) {
      return res.status(401).json({
        status: 'login gagal',
        code: 401,
        message: 'pengguna tidak ditemukan'
      })
    }

    // membuat token jwt
    await jwt.sign({ user_id: user._id }, token, (err, token) => {
      if (err) throw err

      res.status(200).json({ token }) // mengirim token ke client
    })
  }
  catch(err) {
    console.error(err)
  }
}