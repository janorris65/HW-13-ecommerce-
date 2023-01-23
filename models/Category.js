const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    id:{
      type:DataTypes.INTEGER,
      allownull: false,
      autoIncrement:true,
      primaryKey:true,
    },
    category_name:{
      type:DataTypes.STRING,
      allownull:false
    }
    // define columns
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
