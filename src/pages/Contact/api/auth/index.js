const Router = require('express').Router();
const authCtrl = require('./auth.controller');

Router.post('/register', authCtrl.localRegister);
Router.post('/login', authCtrl.login);
Router.post('/logout', authCtrl.logout);
Router.get('/exists/:key(id|username)/:value', authCtrl.exists);
Router.get('/check', authCtrl.check);

module.exports = Router;