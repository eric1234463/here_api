'use strict';
module.exports = (sequelize, DataTypes) => {
    var patientBiologicalClock = sequelize.define(
        'patientBiologicalClock',
        {
            id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
            type: { type: DataTypes.TEXT, allowNull: true },
            patientId: { type: DataTypes.BIGINT, allowNull: false }
        },
        {
            tableName: 'patient_biological_clock'
        }
    );
    patientBiologicalClock.associate = function (models) { };
    return patientBiologicalClock;
};
