'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('record', {
      id: { type: Sequelize.BIGINT, primaryKey: true, autoIncrement: true },
      doctorId: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: { model: 'doctor', key: 'id' }
      },
      patientId: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: { model: 'patient', key: 'id' }
      },
      title: { type: Sequelize.STRING(255), allowNull: true },
      description: { type: Sequelize.STRING(255), allowNull: true },
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
    return queryInterface.dropTable('record');
  }
};
