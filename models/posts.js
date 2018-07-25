'use strict';
module.exports = (sequelize, DataTypes) => {
  var posts = sequelize.define('posts', {
    PostId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    PostTitle: DataTypes.STRING,
    PostBody: DataTypes.STRING,
    UserId: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  },
   {
     timeStamps: false
   }

  );
  posts.associate = function(models) {
// posts.hasmany(models.users, {
//   foreignKey: 'PostId'
// });  
};
  return posts;
};