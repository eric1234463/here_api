'use strict';
module.exports = (sequelize, DataTypes) => {
    var Medicine = sequelize.define(
        'Medicine',
        {
            id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
            name: { type: DataTypes.STRING(1000), allowNull: false },
            permit: { type: DataTypes.STRING(1000), allowNull: false },
            ingredients: { type: DataTypes.STRING(1000), allowNull: false },
            company: { type: DataTypes.STRING(1000), allowNull: false },
            address: { type: DataTypes.STRING(1000), allowNull: false },
        },
        {
            tableName: 'medicine'
        }
    );
    Medicine.associate = function (models) { };
    return Medicine;
};
