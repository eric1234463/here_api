'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('scan_record', {
      id: { type: Sequelize.BIGINT, primaryKey: true, autoIncrement: true },
      doctorId: { type: Sequelize.BIGINT,  allowNull: false},
      patientId: { type: Sequelize.BIGINT, allowNull: false },
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
    return queryInterface.dropTable('scan_record');
  }
};
