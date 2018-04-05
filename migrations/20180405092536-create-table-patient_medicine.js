'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('patient_medicine', {
      id: { type: Sequelize.BIGINT, primaryKey: true, autoIncrement: true },
      patient_id: { type: Sequelize.BIGINT, allowNull: false},
      medicine_id: { type: Sequelize.BIGINT, allowNull: false },
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
    return queryInterface.dropTable('patient_medicine');
  }
};
