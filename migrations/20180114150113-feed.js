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
      content: { type: Sequelize.STRING(255), allowNull: false },
      photoURL: { type: Sequelize.STRING(16), allowNull: true },
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
