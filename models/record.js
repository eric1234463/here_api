'use strict';
module.exports = (sequelize, DataTypes) => {
  var Record = sequelize.define(
    'Record',
    {
        id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
        doctorId: {
          type: DataTypes.BIGINT,
          allowNull: false,
          references: { model: 'doctor', key: 'id' }
        },
        patientId: {
          type: DataTypes.BIGINT,
          allowNull: false,
          references: { model: 'patient', key: 'id' }
        },
        description: { type: DataTypes.STRING(16), allowNull: true },
    },
    {
      tableName: 'record'
    }
  );
  Record.associate = function(models) {
    Record.belongsTo(models.Doctor, {foreignKey: 'doctorId'});
    Record.belongsTo(models.Patient, {foreignKey: 'patientId'});
    Record.hasMany(models.RecordFactor, {foreignKey: 'recordId'});
    Record.hasMany(models.RecordMedicine, {foreignKey: 'recordId'});
  };
  return Record;
};
