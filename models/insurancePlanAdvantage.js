"use strict";
module.exports = (sequelize, DataTypes) => {
  var InsurancePlanAdvantage = sequelize.define(
    "InsurancePlanAdvantage",
    {
      id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
      insurance_advantage_id: { type: DataTypes.BIGINT, allowNull: false },
      insurance_plan_id: { type: DataTypes.BIGINT, allowNull: false }
    },
    {
      tableName: "insurance_plan_advantage"
    }
  );
  InsurancePlanAdvantage.associate = function(models) {
    InsurancePlanAdvantage.belongsTo(models.InsuranceAdvantage, { foreignKey: "insurance_advantage_id" });
  };
  return InsurancePlanAdvantage;
};
