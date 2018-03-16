"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return [
      queryInterface.addColumn("doctor", "open_time", Sequelize.TIME, {
        after: "location"
      }),
      queryInterface.addColumn("doctor", "close_time", Sequelize.TIME, {
        after: "location"
      })
    ];
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    return [
      queryInterface.removeColumn("doctor", "open_time"),
      queryInterface.removeColumn("doctor", "close_time")
    ];
  }
};
