"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return [
      queryInterface.addColumn("doctor", "about", Sequelize.STRING, {
        after: "photoURL"
      }),
      queryInterface.addColumn("doctor", "telphone", Sequelize.STRING, {
        after: "photoURL"
      }),
      queryInterface.addColumn("doctor", "gender", Sequelize.STRING, {
        after: "photoURL"
      }),
      queryInterface.addColumn("doctor", "age", Sequelize.STRING, {
        after: "photoURL"
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
      queryInterface.removeColumn("doctor", "telphone"),
      queryInterface.removeColumn("doctor", "about"),
      queryInterface.removeColumn("doctor", "age"),
      queryInterface.removeColumn("doctor", "gender")
    ];
  }
};
