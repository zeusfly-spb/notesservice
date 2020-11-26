'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      login: {
        allowNull: false,
        type: Sequelize.STRING
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING
      },
      options: {
        allowNull: true,
        type:  Sequelize.JSON
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.STRING(19)
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.STRING(19)
      }
    }).then(() => queryInterface.addIndex('Users', ['createdAt', 'updatedAt']));
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};