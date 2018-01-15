'use strict';
module.exports = (sequelize, DataTypes) => {
    var Factor = sequelize.define(
        'Factor',
        {
            id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
            name: { type: DataTypes.STRING(255), allowNull: false },
        },
        {
            tableName: 'factor'
        }
    );
    Factor.associate = function (models) { };
    return Factor;
};
