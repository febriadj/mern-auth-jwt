'use strict'

const 
  mongoose = require('mongoose')
, uri = process.env.MONGO_URI

async function runMongo() {
  // membuat koneksi dan opsi mongodb
  const conn = await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })

  console.log('mongodb connected')
  return conn
}

module.exports = runMongo()