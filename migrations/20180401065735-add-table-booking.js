'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('booking', {
      id: { type: Sequelize.BIGINT, primaryKey: true, autoIncrement: true },
      doctorId: { type: Sequelize.BIGINT,  allowNull: false},
      patientId: { type: Sequelize.BIGINT, allowNull: false },
      time: { type: Sequelize.TIMEONLY, allowNull: false },
      date: { type: Sequelize.DATEONLY, allowNull: false },
      status: { type: Sequelize.CHAR(1), allowNull: false },
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
    return queryInterface.dropTable('booking');
  }
};
