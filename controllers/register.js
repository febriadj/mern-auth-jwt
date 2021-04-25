'use strict'

const Users = require('../models/users')

exports.routerRegister = async (req, res, next) => {
  try {
    const { username, email, password, confirmPassword } = req.body
    const regexPassword = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]){8,24}/
    
    if (password !== confirmPassword) {
      throw {
        message: 'password dan konfirmasi password tidak sesuai',
        code: 400
      }
    }

    // password harus berupa gabungan huruf kecil, besar, angka, dan simbol
    if (regexPassword.test(password) == false) {
      throw { 
        message: 'password tidak valid',
        code: 400
      }
    }
    
    // membuat schema
    const newSchema = new Users({ username, email, password })

    // insert schema baru ke collection users
    await newSchema.save((err, user) => {
      if (err) return res.status(500).json({
        message: 'username atau email sudah terpakai',
        code: 500
      })

      res.status(200).json({
        status: 'register berhasil',
        code: 200,
        data: user // mengirim data register pengguna ke api
      })
    })
  }
  catch(err) {
    const { message, code } = err
    res.status(code).json({ message, code })
  }
}