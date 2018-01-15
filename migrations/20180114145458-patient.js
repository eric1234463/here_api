'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('patient', {
      id: { type: Sequelize.BIGINT, primaryKey: true, autoIncrement: true },
      uid: { type: Sequelize.STRING, allowNull: false},
      displayName: { type: Sequelize.STRING, allowNull: true },
      photoURL: { type: Sequelize.STRING, allowNull: true },
      weight: { type: Sequelize.INTEGER, allowNull: true },
      height: { type: Sequelize.INTEGER, allowNull: true },
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
    return queryInterface.dropTable('patient');
  }
};
