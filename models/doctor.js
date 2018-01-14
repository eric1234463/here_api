'use strict';
module.exports = (sequelize, DataTypes) => {
    var Doctor = sequelize.define(
        'Doctor',
        {
            id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
            uid: { type: DataTypes.STRING, allowNull: true },
            photoURL: { type: DataTypes.STRING, allowNull: true },
            location: { type: DataTypes.STRING, allowNull: true },
            google_lat: { type: DataTypes.DECIMAL, allowNull: true },
            google_lng: { type: DataTypes.DECIMAL, allowNull: true },
        },
        {
            tableName: 'doctor'
        }
    );
    Doctor.associate = function (models) { };
    return Doctor;
};
