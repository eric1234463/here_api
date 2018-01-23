'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return [
      queryInterface.addColumn('patient_biological_clock', 'date', Sequelize.DATEONLY),
      queryInterface.addColumn('patient_biological_clock', 'dateTime', Sequelize.DATE),

    ]
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    return [
      queryInterface.removeColumn('patient_biological_clock', 'date'),
      queryInterface.removeColumn('patient_biological_clock', 'dateTime')
    ]
  }
};
