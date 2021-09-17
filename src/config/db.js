require('dotenv').config();

const config = {
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  dialect: process.DB_DIALECT || 'mysql',
};

module.exports = {
  development: {
    ...config,
  },
  test: {
    ...config,
  },
  production: {
    ...config,
  },
};
