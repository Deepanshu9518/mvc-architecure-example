'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class nd extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  nd.init({
    name: DataTypes.TEXT,
    teacher: DataTypes.INTEGER,
    address: DataTypes.TEXT,
    id:{
      type:DataTypes.INTEGER,
      primaryKey:true,
      initialAutoIncrement:true
    },
    roll: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'nd',
  });
  return nd;
};