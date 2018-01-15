'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.addColumn('patient', 'hkid', Sequelize.STRING, {
      after: 'photoURL'
    });
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
    
      Example:
      return queryInterface.dropTable('users');
    */
    queryInterface.removeColumn('patient', 'hkid');
  }
};
