import Post from './Post'
import User from './Users'

User.hasOne(Post, { foreignKey: 'userId', as: 'post' })
Post.belongsTo(Post, { foreignKey: 'userId', as: 'user' })

export { Post, User }
