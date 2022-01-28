import { DataTypes, Model, Sequelize } from "sequelize"

export class UserModel extends Model {
  public id!: number

  public username!: string

  public password!: string

  public name!: string

  //timestamps
  public readonly createdAt!: Date

  public readonly updatedAt!: Date

  static initModel(sequelize: Sequelize) {
    this.init(
      {
        username: DataTypes.STRING,
        password: DataTypes.STRING,
        name: DataTypes.STRING
      },
      {
        sequelize,
        tableName: 'users'
      }
    )
  }
}