'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('record_factor', {
      id: { type: Sequelize.BIGINT, primaryKey: true, autoIncrement: true },
      recordId: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: { model: 'record', key: 'id' }
      },
      factorId: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: { model: 'factor', key: 'id' }
      },
      class: {
        type: Sequelize.STRING,
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
    return queryInterface.dropTable('record_factor');
  }
};
