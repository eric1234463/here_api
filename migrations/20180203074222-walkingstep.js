"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("patient_walking_step", {
      id: { type: Sequelize.BIGINT, primaryKey: true, autoIncrement: true },
      patientId: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: { model: "patient", key: "id" }
      },
      value: {
        type: Sequelize.BIGINT,
        allowNull: false
      },
      date: {
        allowNull: false,
        type: Sequelize.DATEONLY
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
    return queryInterface.dropTable("patient_walking_step");
  }
};
