'use strict'

const
  mongoose = require('mongoose')
, Schema = mongoose.Schema

const UsersSchema = new Schema({
  username: {
    type: String,
    validate: /[A-Z0-9_-]/i,
    unique: true,
  },
  email: {
    type: String,
    validate: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    unique: true,
  },
  password: {
    type: String,
  }
}, { 
  timestamps: true 
})

const Users = mongoose.model('users', UsersSchema)
module.exports = Users