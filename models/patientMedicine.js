"use strict";
module.exports = (sequelize, DataTypes) => {
  var PatientMedicine = sequelize.define(
    "PatientMedicine",
    {
      id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
      patient_id: { type: DataTypes.BIGINT, allowNull: false },
      medicine_id: { type: DataTypes.BIGINT, allowNull: false }
    },
    {
      tableName: "patient_medicine"
    }
  );
  PatientMedicine.associate = function(models) {
    PatientMedicine.belongsTo(models.Medicine, {foreignKey: 'medicine_id'});
    PatientMedicine.belongsTo(models.Patient, {foreignKey: 'patient_id'});
  };
  return PatientMedicine;
};
