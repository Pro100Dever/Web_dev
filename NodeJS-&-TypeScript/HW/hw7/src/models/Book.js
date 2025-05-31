import { DataTypes } from 'sequelize'
import sequelize from '../config/db.js'

const Book = sequelize.define(
  'Book',
  {
    //Если хотите добавить какое то поле в таблицу, необходимо описать желаемое поле в данном объекте
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    //Например, хотим добавить поле username, надо описать его тип, может ли он быть null и тд
    author: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: 'Books',
    timestamps: false,
  }
)

export default Book
