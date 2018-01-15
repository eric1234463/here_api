'use strict';
module.exports = (sequelize, DataTypes) => {
    var Medicine = sequelize.define(
        'Medicine',
        {
            id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
            name: { type: DataTypes.STRING(255), allowNull: false },
        },
        {
            tableName: 'medicine'
        }
    );
    Medicine.associate = function (models) { };
    return Medicine;
};
