'use strict'

const
  express = require('express')
, app = express()
, dotenv = require('dotenv')
, cors = require('cors')
, path = require('path')
, port = process.env.PORT || 8000

dotenv.config({ path: './.env' }) // konfigurasi .env file
app.use(cors()) // membuka akses cors

// express urlencoded untuk meng-handle body request
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use('/api', require('./routes/index')) // semua rute program

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
  
  app.get('*', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
  })
}

require('./config/database') // menjalankan mongodb server

app.listen(port)
console.log('server running on port:' + port)