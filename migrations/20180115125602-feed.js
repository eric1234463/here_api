'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('feed', {
      id: { type: Sequelize.BIGINT, primaryKey: true, autoIncrement: true },
      doctorId: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: { model: 'doctor', key: 'id' }
      },
      photoURL: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      content: {
        type: Sequelize.TEXT,
        allowNull: false,
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

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('feed');
  }
};
