'uses strict'

const 
  jwt = require('jsonwebtoken')
, secretToken = process.env.SECRET_TOKEN

async function tokenAuthenticate(req, res, next) {
  try {
    const headers = req.headers.authorization

    // kondisi jika tidak ada headers authorization
    if (!headers) {
      return res.status(401).json({
        status: 'failed to request',
        code: 401,
        message: 'perlu memasukkan token pada headers authorization'
      })
    }

    // split headers menjadi array -> ['Bearer', '<token>']
    const token = headers.split(' ')[1] // mengambil token pada index ke 1

    // melakukan verifikasi token jwt
    await jwt.verify(token, secretToken, (err, user) => {
      req.user = user // mengirim username atau email pengguna
      next()
    })
  }
  catch(err) {
    console.error(err)
  }
}

module.exports = tokenAuthenticate