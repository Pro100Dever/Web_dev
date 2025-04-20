import { DataTypes } from 'sequelize'
import sequelize from '../config/db.js'

const Post = sequelize.define(
  'Post',
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    usedId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: 'Posts',
    timestamps: false,
  }
)

export default Post
