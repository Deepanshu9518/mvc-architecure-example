'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class st extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  st.init({
    name: DataTypes.TEXT,
    roll: DataTypes.TEXT,
    address: DataTypes.TEXT,
    id:{
      type:DataTypes.INTEGER,
      primaryKey:true
    }
  }, {
    sequelize,
    modelName: 'st',
  });
  return st;
};