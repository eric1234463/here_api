'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('disease_statics', {
      id: { type: Sequelize.BIGINT, primaryKey: true, autoIncrement: true },
      diseaseId: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: { model: 'disease', key: 'id' }
      },
      month: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      amount: {
        type: Sequelize.INTEGER,
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
    return queryInterface.dropTable('disease_statics');
  }
};
