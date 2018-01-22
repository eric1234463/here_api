'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('patient_biological_clock', {
      id: { type: Sequelize.BIGINT, primaryKey: true, autoIncrement: true },
      patientId: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: { model: 'patient', key: 'id' }
      },
      type: {
        type: Sequelize.ENUM,
        values: ['SLEEP', 'WAKE'],
        allowNull: false
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
    return queryInterface.dropTable('patient_biological_clock');
  }
};
