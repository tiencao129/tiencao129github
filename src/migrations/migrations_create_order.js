"use strict";
module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('Order', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        user_id: {
          type: Sequelize.INTEGER
        },
        order_date: {
          type: Sequelize.DATE
        },
        status: {
          type: Sequelize.INTEGER
        },
        total_money: {
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
      await queryInterface.dropTable('Orders');
    }
  };