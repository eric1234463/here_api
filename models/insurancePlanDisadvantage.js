"use strict";
module.exports = (sequelize, DataTypes) => {
  var InsurancePlanDisadvantage = sequelize.define(
    "InsurancePlanDisadvantage",
    {
      id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
      insurance_disadvantage_id: { type: DataTypes.BIGINT, allowNull: false },
      insurance_plan_id: { type: DataTypes.BIGINT, allowNull: false }
    },
    {
      tableName: "insurance_plan_disadvantage"
    }
  );
  InsurancePlanDisadvantage.associate = function(models) {
    InsurancePlanAdvantage.belongsTo(models.InsuranceDisadvantage, { foreignKey: "insurance_disadvantage_id" });
  };
  return InsurancePlanDisadvantage;
};
