'use strict'

const 
  jwt = require('jsonwebtoken')
, token = process.env.SECRET_TOKEN
, Users = require('../models/users')

exports.routerLogin = async (req, res, next) => {
  try {
    const { nameOrEmail, password } = req.body
    const regexPassword = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]){8,24}/

    // password harus berupa gabungan huruf kecil, besar, angka, dan simbol
    if (regexPassword.test(password) == false) {
      throw { 
        message: 'password tidak valid',
        code: 400
      }
    }

    // mengambil data pengguna melalui username atau email dan password
    const user = await Users.findOne({
      $and: [{
        $or: [{ username: nameOrEmail }, { email: nameOrEmail }],
        password
      }]
    })

    // kondisi jika pengguna tidak ditemukan
    if (!user) throw {
      message: 'pengguna tidak ditemukan',
      code: 401
    }

    // membuat token jwt
    await jwt.sign({ user_id: user._id }, token, (err, token) => {
      if (err) throw err

      res.status(200).json({ token }) // mengirim token ke client
    })
  }
  catch(err) {
    res.status(err.code).json({
      message: err.message,
      code: err.code
    })
  }
}