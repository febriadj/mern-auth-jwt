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

app.listen(port)
console.log('server running on port:' + port)