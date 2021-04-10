'use strict'

const Users = require('../models/users')

exports.routerRegister = async (req, res, next) => {
  try {
    const { username, email, password, confirmPassword } = req.body

    if (password !== confirmPassword) {
      return res.status(400).json({
        status: 'register gagal',
        code: 400,
        message: 'password dan konfirmasi password tidak sesuai'
      })
    }

    // membuat schema
    const newSchema = new Users({
      username, email, password
    })

    // insert schema baru ke collection users
    await newSchema.save((err, user) => {
      if (err) throw err

      res.status(200).json({
        status: 'register berhasil',
        code: 200,
        data: user // mengirim data register pengguna ke api
      })
    })
  }
  catch(err) {
    console.error(err)
  }
}