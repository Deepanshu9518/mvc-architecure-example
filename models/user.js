'use strict';
const {
  Model, INTEGER
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    id: {
      type : DataTypes.INTEGER,
      primaryKey : true,
      autoincrement: true
    },
    name: DataTypes.TEXT,
    role: DataTypes.TEXT,
    email: DataTypes.TEXT,
    age:DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};