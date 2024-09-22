const { Sequelize, DataTypes } = require("sequelize");

// ==========USER================
const User = sequelize.define("User", {
  name: {
    type: DataTypes.STRING(50),
  },
  email: {
    type: DataTypes.STRING(100),
  },
});
// ==========POST=================
const Post = sequelize.define("Post", {
  title: {
    type: DataTypes.STRING(50),
  },
  content: {
    type: DataTypes.TEXT(1000),
  },
});

User.hasMany(Post);
Post.belongsTo(User);

module.exports = User;
module.exports = Post;
