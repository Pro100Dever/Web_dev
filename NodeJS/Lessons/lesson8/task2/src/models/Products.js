import { DataTypes } from 'sequelize'
import sequelize from '../../../task1/src/config/db.js'

const Product = sequelize.define(
  'User',
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'Products',
    timestamps: false,
  }
)

export default Product
