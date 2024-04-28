'use strict';
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  /**
   * @param {import('sequelize').QueryInterface} queryInterface 
   * @param {import('sequelize').Sequelize} Sequelize 
   */
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,

          type: Sequelize.INTEGER
        },
        username: {
          allowNull: false,
          type: Sequelize.STRING
        },
        email: {
          allowNull: false,
          type: Sequelize.STRING
        },
        name: {
          allowNull: false,
          type: Sequelize.STRING
        },
        langague: {
          allowNull: false,
          type: Sequelize.STRING
        },
        age: {
          allowNull: false,
          type: Sequelize.INTEGER
        },
        picture: {
          allowNull: false,
          type: Sequelize.STRING
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
          field: 'created_at'
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
          field: 'updated_at'
        }
      }
    );
  },
  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('Users');
  }
};
