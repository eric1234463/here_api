"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return [
      queryInterface.addColumn("record", "title", {
        type: Sequelize.STRING(255),
        after: "patientId"
      }),
      queryInterface.changeColumn("record", "description", {
        type: Sequelize.STRING(255)
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
      queryInterface.removeColumn("record", "title"),
    ];
  }
};
