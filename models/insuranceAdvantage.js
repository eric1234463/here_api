'use strict';
module.exports = (sequelize, DataTypes) => {
    var InsuranceAdvantage = sequelize.define(
        'InsuranceAdvantage',
        {
            id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
            name: { type: DataTypes.STRING(255), allowNull: false },
        },
        {
            tableName: 'insurance_advantage'
        }
    );
    InsuranceAdvantage.associate = function (models) { };
    return InsuranceAdvantage;
};
