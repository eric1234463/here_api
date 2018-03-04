"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return [
      queryInterface.addColumn("doctor", "district_id", Sequelize.BIGINT, {
        after: "location"
      })
    ];
  },

  down: (queryInterface, Sequelize) => {
    return [
      queryInterface.removeColumn("doctor", "district_id"),
    ];
  }
};
