const express = require('express');
const multer = require('multer');
const multerConfig = require('./config/multer');

const UserController = require('./app/controllers/UserController');

const routes = express.Router();

routes.get('/signup', UserController.create);
routes.post('/signup', multer(multerConfig).single('avatar'), UserController.store);

module.exports = routes;
