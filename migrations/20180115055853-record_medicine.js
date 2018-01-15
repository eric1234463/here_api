'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('record_medicine', {
      id: { type: Sequelize.BIGINT, primaryKey: true, autoIncrement: true },
      recordId: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: { model: 'record', key: 'id' }
      },
      medicineId: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: { model: 'medicine', key: 'id' }
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
    return queryInterface.dropTable('record_medicine');
  }
};
