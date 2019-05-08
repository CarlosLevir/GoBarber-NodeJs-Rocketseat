const express = require('express');
const nunjucks = require('nunjucks');
const path = require('path');
const session = require('express-session');
const LokiStore = require('connect-loki')(session);
const flash = require('connect-flash');
require('dotenv').config();
const routes = require('./routes');

class App {
  constructor() {
    this.express = express();
    this.isDev = process.env.NODE_ENV !== 'production';

    this.middlewares();
    this.views();
    this.routes();
  }

  middlewares() {
    this.express.use(express.urlencoded({ extended: false }));
    this.express.use(flash());
    this.express.use(
      session({
        name: 'root',
        store: new LokiStore({
          path: path.resolve(__dirname, '..', 'tmp', 'sessions.db'),
        }),
        secret: process.env.SECRET,
        resave: false,
        saveUninitialized: true,
      }),
    );
  }

  views() {
    nunjucks.configure(path.resolve(__dirname, 'app', 'views'), {
      watch: this.isDev,
      express: this.express,
      autoescape: true,
    });

    this.express.use(express.static(path.resolve(__dirname, 'public')));
    this.express.set('view engine', 'njk');
  }

  routes() {
    this.express.use(routes);
  }
}

module.exports = new App().express;
