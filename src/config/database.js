module.exports = {
  dialect: 'postgres',
  host: '127.0.0.1',
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: 'GoBarber',
  operatorAliases: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
