'use strict'

const Users = require('../models/users')

exports.routerGetUser = async (req, res, next) => {
  try {
    const _id = req.user.user_id // mengambil id pengguna

    // mencari data pengguna di database
    await Users.findOne({ _id }, (err, user) => {
      if (err) throw err
      
      res.status(200).json(user) // mengirim data user ke client
    })
  }
  catch(err) {
    res.status(401).json({
      message: 'pengguna tidak ditemukan',
      code: 401
    })
  }
}