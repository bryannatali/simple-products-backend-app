import { DataTypes, Model, Sequelize } from "sequelize";

export class ProductModel extends Model {
  public id!: number

  public name!: string

  public description!: string

  public price!: number

  // timestamps
  public readonly createdAt!: Date

  public readonly updatedAt!: Date

  static initModel(sequelize: Sequelize) {
    this.init(
      {
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        price: DataTypes.DOUBLE,
      },
      {
        sequelize,
        tableName: 'products',
      }
    )
  }
}