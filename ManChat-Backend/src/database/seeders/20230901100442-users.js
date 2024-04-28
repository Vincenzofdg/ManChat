'use strict';

/**
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataType} DataTypes 
 */

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        username: 'vincenzofdg',
        email: 'vincenzo@adm.com',
        name: 'Vincenzo F. Di Giacomo',
        langague: 'en',
        age: 28,
        picture: '',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        username: 'nickk221',
        email: 'nick@adm.com',
        name: 'Nick Jr. Santos',
        langague: 'en',
        age: 33,
        picture: '',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        username: 'jack_223',
        email: 'jack@adm.com',
        name: 'Jack Santos',
        langague: 'en',
        age: 30,
        picture: '',
        created_at: new Date(),
        updated_at: new Date(),
      }
    ], {});

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
