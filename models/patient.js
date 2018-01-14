'use strict';
module.exports = (sequelize, DataTypes) => {
    var Patient = sequelize.define(
        'Patient',
        {
            id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
            uid: { type: DataTypes.STRING, allowNull: false },
            displayName: { type: DataTypes.STRING(16), allowNull: true },
            photoURL: { type: DataTypes.STRING(16), allowNull: true },
            weight: { type: DataTypes.INTEGER, allowNull: true },
            height: { type: DataTypes.INTEGER, allowNull: true },
        },
        {
            tableName: 'patient'
        }
    );
    Patient.associate = function (models) { };
    return Patient;
};
