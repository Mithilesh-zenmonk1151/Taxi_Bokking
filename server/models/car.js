'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class car extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // this.hasOne(models.carImages)
      
    }
  }
  car.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    userId:{
      type:DataTypes.STRING
    },
    name: DataTypes.STRING,
    model: DataTypes.STRING,
    launchYear: DataTypes.STRING,
    color: DataTypes.STRING,
    features: DataTypes.STRING,
    price: DataTypes.INTEGER,
    stock:DataTypes.INTEGER,
    approved:{type:DataTypes.BOOLEAN,
      defaultValue:false},
  }, {
    sequelize,
    modelName: 'car',
  });
  return car;
};