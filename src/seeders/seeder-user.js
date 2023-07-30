"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Users',[{

       Name: 'admin',
       email: 'admin@gmail.com',
       password: '<PASSWORD>',
       phone: '0123456789',
       roleid: '1',
       createdAt: new Date(),
       updatedAt: new Date()
   }])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
