"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('OrderDetail', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        order_id: {
          type: Sequelize.INTEGER
        },
        product_id: {
          type: Sequelize.INTEGER
        },
        quantity: {
          type: Sequelize.INTEGER
        },
        unit_price: {
          type: Sequelize.FLOAT
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
      await queryInterface.dropTable('OrderDetails');
    }
  };
  