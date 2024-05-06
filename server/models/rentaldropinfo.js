'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class rentalDropInfo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      
    }
  }
  rentalDropInfo.init({
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
    dropLocation: DataTypes.STRING,
    dropDate: DataTypes.DATE,
    ddropTime: DataTypes.TIME
  }, {
    sequelize,
    modelName: 'rentalDropInfo',
  });
  return rentalDropInfo;
};