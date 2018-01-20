'use strict';
module.exports = (sequelize, DataTypes) => {
    var Disease = sequelize.define(
        'Disease',
        {
            id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
            name: { type: DataTypes.TEXT, allowNull: true },
            description: { type: DataTypes.TEXT, allowNull: true },
            symptoms: {
                type: DataTypes.TEXT, allowNull: true
            },
            prevention: {
                type: DataTypes.TEXT, allowNull: true
            }
        },
        {
            tableName: 'disease'
        }
    );
    Disease.associate = function (models) { };
    return Disease;
};
