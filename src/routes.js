const express = require('express');
const multer = require('multer');
const multerConfig = require('./config/multer');

const UserController = require('./app/controllers/UserController');
const SessionController = require('./app/controllers/SessionController');

const authMiddleware = require('./app/middlewares/auth');
const guestMiddleware = require('./app/middlewares/guest');

const routes = express.Router();

routes.get('/', guestMiddleware, SessionController.create);
routes.post('/signin', SessionController.store);

routes.get('/signup', guestMiddleware, UserController.create);
routes.post('/signup', multer(multerConfig).single('avatar'), UserController.store);

routes.use('/app', authMiddleware);

routes.get('/app/dashboard', (req, res) => res.render('dashboard'));
routes.get('/app/logout', SessionController.destroy);

module.exports = routes;
