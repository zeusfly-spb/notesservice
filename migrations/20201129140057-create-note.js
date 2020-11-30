'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Notes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.BIGINT,
        allowNull: false
      },
      text: {
        type: Sequelize.STRING(1000) + ' CHARSET utf8 COLLATE utf8_unicode_ci'
      },
      link: {
        type: Sequelize.STRING(36),
        unique: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }).then(() => queryInterface.addIndex('Notes', ['userId', 'link']));
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Notes');
  }
};