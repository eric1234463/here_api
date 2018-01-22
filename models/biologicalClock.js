'use strict';
module.exports = (sequelize, DataTypes) => {
    var patientBiologicalClock = sequelize.define(
        'patientBiologicalClock',
        {
            id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
            type: { type: DataTypes.TEXT, allowNull: false },
            patientId: { type: DataTypes.BIGINT, allowNull: false },
            date: { type: DataTypes.DATEONLY, allowNull: false },
            createdAt: {
                allowNull: false,
                type: DataTypes.DATE
            },
            updatedAt: {
                allowNull: false,
                type: DataTypes.DATE
            }
        },
        {
            tableName: 'patient_biological_clock'
        }
    );
    patientBiologicalClock.associate = function (models) { };
    return patientBiologicalClock;
};
