'use strict'

const 
  router = require('express').Router()
, tokenAuthenticate = require('../authentication/auth')

// import controllers router
const 
  { routerRegister } = require('../controllers/register')
, { routerLogin } = require('../controllers/login')

router.post('/login', routerLogin) // router untuk aksi login
router.post('/register', routerRegister) // router untuk aksi register

module.exports = router