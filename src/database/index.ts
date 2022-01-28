import { Sequelize } from 'sequelize';

import config from '../config/database';

import { ProductModel } from '../entities/sequelize/Product';

export async function initDatabase() {
  const sequelize = new Sequelize(config)

  ProductModel.initModel(sequelize);

  await sequelize.authenticate();
}