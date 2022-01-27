import { Sequelize } from 'sequelize';

import config from '../config/database';

export async function initDatabase() {
  const sequelize = new Sequelize(config)

  await sequelize.authenticate();
}