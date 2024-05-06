'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('cars', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      uuid:{
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      name: {
        type: Sequelize.STRING
      },
      model: {
        type: Sequelize.STRING
      },
      stock: {
        type: Sequelize.INTEGER
      
    },
    userId:{
      type:Sequelize.STRING
    },
    approved:{type:Sequelize.BOOLEAN,
      defaultValue:false},
  
    
      launchYear: {
        type: Sequelize.STRING
      },
      color: {
        type: Sequelize.STRING
      },
      features: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.INTEGER
      },
     
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('cars');
  }
};