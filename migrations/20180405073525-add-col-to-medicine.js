"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return [
      queryInterface.changeColumn("medicine", "name", {
        type: Sequelize.STRING(1000)
      }),
      queryInterface.addColumn("medicine", "ingredients", {
        type: Sequelize.STRING(1000)
      }),
      queryInterface.addColumn("medicine", "company", {
        type: Sequelize.STRING(1000)
      }),
      queryInterface.addColumn("medicine", "address", {
        type: Sequelize.STRING(1000)
      }),
      queryInterface.addColumn("medicine", "permit", {
        type: Sequelize.STRING(1000)
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
      queryInterface.removeColumn("medicine", "ingredients"),
      queryInterface.removeColumn("medicine", "address"),
      queryInterface.removeColumn("medicine", "company"),
      queryInterface.removeColumn("medicine", "permit")
    ];
  }
};
