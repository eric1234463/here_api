'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('doctor', {
      id: { type: Sequelize.BIGINT, primaryKey: true, autoIncrement: true },
      uid: { type: Sequelize.STRING, allowNull: true },
      displayName: { type: Sequelize.STRING, allowNull: true },
      photoURL: { type: Sequelize.STRING, allowNull: true },
      location: { type: Sequelize.STRING, allowNull: true },
      google_lat: { type: Sequelize.DECIMAL, allowNull: true },
      google_lng: { type: Sequelize.DECIMAL, allowNull: true },
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
    return queryInterface.dropTable('doctor');

  }
};
