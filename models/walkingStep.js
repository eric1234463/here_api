"use strict";
module.exports = (sequelize, DataTypes) => {
  var patientWalkingStep = sequelize.define(
    "patientWalkingStep",
    {
      id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
      patientId: { type: DataTypes.BIGINT, allowNull: false },
      date: { type: DataTypes.DATEONLY, allowNull: false },
      value: { type: DataTypes.BIGINT, allowNull: false },
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
      tableName: "patient_walking_step"
    }
  );
  patientWalkingStep.associate = function(models) {};
  return patientWalkingStep;
};
