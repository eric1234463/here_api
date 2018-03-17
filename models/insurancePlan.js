'use strict';
module.exports = (sequelize, DataTypes) => {
    var InsurancePlan = sequelize.define(
        'InsurancePlan',
        {
          id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
          name: { type: DataTypes.STRING, allowNull: false },
          daliy_cover: { type: DataTypes.BIGINT, allowNull: false },
          surgery_cover: { type: DataTypes.BIGINT, allowNull: false },
          provider: { type: DataTypes.STRING, allowNull: false },
          provider_photo_url: { type: DataTypes.STRING, allowNull: false },
          miscellaneous_benefit: { type: DataTypes.BIGINT, allowNull: false }
        },
        {
            tableName: 'insurance_plan'
        }
    );
    InsurancePlan.associate = function (models) { 
        InsurancePlan.hasMany(models.InsurancePlanAdvantage, { foreignKey: "insurance_plan_id" });
        InsurancePlan.hasMany(models.InsurancePlanDisadvantage, { foreignKey: "insurance_plan_id" })
    };
    return InsurancePlan;
};
