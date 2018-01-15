'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return [
      queryInterface.addColumn('patient', 'hkid', Sequelize.STRING, {
        after: 'photoURL'
      }),
      queryInterface.addColumn('patient', 'gender', Sequelize.STRING(1), {
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
      queryInterface.removeColumn('patient', 'hkid'),
      queryInterface.removeColumn('patient', 'gender')
    ]
  }
};
