'use strict'

const
  express = require('express')
, app = express()
, dotenv = require('dotenv')
, cors = require('cors')
, port = process.env.PORT || 8080

dotenv.config({ path: './.env' }) // konfigurasi .env file
app.use(cors()) // membuka akses cors

// express urlencoded untuk meng-handle body request
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use('/api', require('./routes/index')) // semua rute program

require('./config/database') // menjalankan mongodb server

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))

  app.get('*', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
  })
}

app.listen(port)
console.log('server running on port:' + port)