import Product from './Product.js'
import User from './User.js'

User.hasOne(Product, { foreignKey: 'userId', as: 'product' })
Product.belongsTo(User, { foreignKey: 'userId', as: 'user' })

export { Post, User }
