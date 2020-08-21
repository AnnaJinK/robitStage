const Router = require('express').Router()
const auth = require('./auth')
const toy = require('./toy')
const mail = require('./mail/mail.controller')

Router.use('/auth', auth)
Router.use('/toy', toy)
Router.use('/mail', mail)

module.exports = Router