'use strict';
module.exports = (sequelize, DataTypes) => {
  var ScanRecord = sequelize.define(
    'ScanRecord',
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
        }
    },
    {
      tableName: 'scan_record'
    }
  );
  ScanRecord.associate = function(models) {
    ScanRecord.belongsTo(models.Doctor, {foreignKey: 'doctorId'});
    ScanRecord.belongsTo(models.Patient, {foreignKey: 'patientId'});
  };
  return ScanRecord;
};
