'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return [
      queryInterface.addColumn('patient', 'email', Sequelize.STRING, {
        after: 'photoURL'
      }),
      queryInterface.addColumn('doctor', 'email', Sequelize.STRING, {
        after: 'photoURL'
      })
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
      queryInterface.removeColumn('patient', 'email'),
      queryInterface.removeColumn('doctor', 'email')
    ]
  }
};
