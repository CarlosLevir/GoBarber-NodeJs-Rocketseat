const express = require('express');
const multer = require('multer');
const multerConfig = require('./config/multer');

const routes = express.Router();

const UserController = require('./app/controllers/UserController');
const SessionController = require('./app/controllers/SessionController');
const DashboardController = require('./app/controllers/DashboardController');
const FileController = require('./app/controllers/FileController');
const AppointmentController = require('./app/controllers/AppointmentController');
const AvailableController = require('./app/controllers/AvailableController');

const authMiddleware = require('./app/middlewares/auth');
const guestMiddleware = require('./app/middlewares/guest');

routes.use('/app', authMiddleware);

routes.use((req, res, next) => {
  res.locals.flashSuccess = req.flash('success');
  res.locals.flashError = req.flash('error');

  return next();
});

routes.get('/', guestMiddleware, SessionController.create);
routes.post('/signin', SessionController.store);

routes.get('/signup', guestMiddleware, UserController.create);
routes.post('/signup', multer(multerConfig).single('avatar'), UserController.store);

routes.get('/app/files/:file', FileController.show);

routes.get('/app/dashboard', DashboardController.index);
routes.get('/app/logout', SessionController.destroy);

routes.get('/app/appointments/new/:provider', AppointmentController.create);
routes.post('/app/appointments/new/:provider', AppointmentController.store);

routes.get('/app/available/:provider', AvailableController.index);

module.exports = routes;
