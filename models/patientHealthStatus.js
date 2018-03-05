"use strict";
module.exports = (sequelize, DataTypes) => {
  var patientHealthStatus = sequelize.define(
    "patientHealthStatus",
    {
      id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
      patientId: { type: DataTypes.BIGINT, allowNull: false },
      date: { type: DataTypes.DATEONLY, allowNull: false },
      value: { type: DataTypes.BIGINT, allowNull: false },
      distance: { type: DataTypes.BIGINT, allowNull: false },
      step: { type: DataTypes.BIGINT, allowNull: false },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    },
    {
      tableName: "patient_health_status"
    }
  );
  patientHealthStatus.associate = function(models) {};
  return patientHealthStatus;
};
