'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('insurance_plan_disadvantage', {
      id: { type: Sequelize.BIGINT, primaryKey: true, autoIncrement: true },
      insurance_disadvantage_id: { type: Sequelize.BIGINT,  allowNull: false},
      insurance_plan_id: { type: Sequelize.BIGINT, allowNull: false },
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
    return queryInterface.dropTable('insurance_plan_disadvantage');
  }
};
