const Router = require('express').Router();
const toyCtrl = require('./toy.controller');

Router.post('/register', toyCtrl.register);
Router.get('/exists/:key(index)/:value', toyCtrl.exists);
Router.get('/list', toyCtrl.list);
Router.get('/get/:key(index)/:value?', toyCtrl.get);
Router.get('/indexlist', toyCtrl.indexlist);
Router.patch('/:id', toyCtrl.update);
Router.delete('/delete/:id', toyCtrl.delete);

module.exports = Router;