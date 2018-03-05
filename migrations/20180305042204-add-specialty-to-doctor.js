"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return [
      queryInterface.addColumn("doctor", "specialty_id", Sequelize.BIGINT, {
        after: "displayName"
      })
    ];
  },

  down: (queryInterface, Sequelize) => {
    return [
      queryInterface.removeColumn("doctor", "specialty_id"),
    ];
  }
};
