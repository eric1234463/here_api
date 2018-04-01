"use strict";
module.exports = (sequelize, DataTypes) => {
  var Booking = sequelize.define(
    "Booking",
    {
      id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
      doctorId: { type: DataTypes.BIGINT, allowNull: false },
      patientId: { type: DataTypes.BIGINT, allowNull: false },
      date: { type: DataTypes.DATEONLY, allowNull: false },
      time: { type: DataTypes.TIMEONLY, allowNull: false },
      status: { type: DataTypes.CHAR(1), allowNull: false }
    },
    {
      tableName: "booking"
    }
  );
  Booking.associate = function(models) {};
  return Booking;
};
