'use strict';
module.exports = (sequelize, DataTypes) => {
    var District = sequelize.define(
        'District',
        {
            id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
            name: { type: DataTypes.STRING(255), allowNull: false },
        },
        {
            tableName: 'district'
        }
    );
    District.associate = function (models) { };
    return District;
};
