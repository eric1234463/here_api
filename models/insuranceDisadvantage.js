'use strict';
module.exports = (sequelize, DataTypes) => {
    var InsuranceDisadvantage = sequelize.define(
        'InsuranceDisadvantage',
        {
            id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
            name: { type: DataTypes.STRING(255), allowNull: false },
        },
        {
            tableName: 'insurance_disadvantage'
        }
    );
    InsuranceDisadvantage.associate = function (models) { };
    return InsuranceDisadvantage;
};
