const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    avatar: DataTypes.STRING,
    password: DataTypes.VIRTUAL,
    password_hash: DataTypes.STRING,
    provider: DataTypes.BOOLEAN,
  }, {
    hooks: {
      beforeSave: async (user) => {
        if (user.password) await bcrypt.hash(user.password, 10);
      },
    },
  });

  return User;
};
