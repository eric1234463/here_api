'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('insurance_plan', {
      id: { type: Sequelize.BIGINT, primaryKey: true, autoIncrement: true },
      name: { type: Sequelize.STRING, allowNull: false },
      daliy_cover: { type: Sequelize.BIGINT, allowNull: false },
      surgery_cover: { type: Sequelize.BIGINT, allowNull: false },
      provider: { type: Sequelize.STRING, allowNull: false },
      provider_photo_url: { type: Sequelize.STRING, allowNull: false },
      miscellaneous_benefit: { type: Sequelize.BIGINT, allowNull: false },
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
    return queryInterface.dropTable('insurance_plan');
  }
};
