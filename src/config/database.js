require('dotenv/config');

const options = {
  dialect: process.env.DB_DIALECT || 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT || ''),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  define: {
    timestamps: true,
    underscored: true,
  },
};

module.exports = options;
