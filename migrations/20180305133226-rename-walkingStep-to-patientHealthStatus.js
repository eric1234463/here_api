'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.renameTable('patient_walking_step','patient_health_status');
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.renameTable('patient_health_status','patient_walking_step');
  }
};
