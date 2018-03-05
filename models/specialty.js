'use strict';
module.exports = (sequelize, DataTypes) => {
    var Specialty = sequelize.define(
        'Specialty',
        {
            id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
            name: { type: DataTypes.STRING(255), allowNull: false },
        },
        {
            tableName: 'specialty'
        }
    );
    Specialty.associate = function (models) { };
    return Specialty;
};
