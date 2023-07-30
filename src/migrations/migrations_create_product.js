"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Product", {
  
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
          },
          name: {
            type: Sequelize.STRING
          },
          image: {
            type: Sequelize.STRING
          },
          price: {
            type: Sequelize.FLOAT
          },
          description: {
            type: Sequelize.TEXT
          },
          quantity: {
            type: Sequelize.INTEGER  
          },
          category_id: {
            type: Sequelize.INTEGER
          },
          brand_id: {
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Product");
  },
};
