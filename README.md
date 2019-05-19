# GoBarber-NodeJs-Rocketseat

A Software as a Service to provide a scheduling between barbers and clients.

- [GoBarber-NodeJs-Rocketseat](#gobarber-nodejs-rocketseat)
  - [Usage](#usage)
  - [Technologies](#technologies)
  - [Installation](#installation)
  - [License](#license)

## Usage

The first step is to create your account, then you can login and choose a barber, check his schedule and make an appointment.

## Technologies

- [Node](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [Express-Session](https://www.npmjs.com/package/express-session/)
- [Sequelize](http://docs.sequelizejs.com/)
- [Postgres](https://www.postgresql.org/)
- [Bcrypt](https://www.npmjs.com/package/bcryptjs/)
- [Nunjucks](https://mozilla.github.io/nunjucks/)
- [Multer](https://github.com/expressjs/multer/)
- [Moment.JS](https://momentjs.com/)
- [Connect-Loki](https://www.npmjs.com/package/connect-loki/)
- [Connect-Flash](https://github.com/jaredhanson/connect-flash/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [Eslint-Airbnb](https://eslint.org/)
- [Nodemon](https://nodemon.io/)

## Installation

Clone the project with

```sh
git clone https://github.com/CarlosLevir/GoBarber-NodeJs-Rocketseat.git
```

Get in the path project, then install the dependencies with:

```sh
yarn
```

Then, you have to create your postgres database (Or another if you want) and fill your own fields in .env file.

Now, you have to create tables with the command:

```sh
npx sequelize db:migrate
```

After database config, you can start the server with:

```sh
yarn start
```

If you are in development environment, you can use the development server:

```sh
yarn dev
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
