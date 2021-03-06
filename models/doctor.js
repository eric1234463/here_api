"use strict";
module.exports = (sequelize, DataTypes) => {
  var Doctor = sequelize.define(
    "Doctor",
    {
      id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
      uid: { type: DataTypes.STRING, allowNull: true },
      email: { type: DataTypes.STRING, allowNull: true },
      displayName: { type: DataTypes.STRING, allowNull: true },
      photoURL: { type: DataTypes.STRING, allowNull: true },
      location: { type: DataTypes.STRING, allowNull: true },
      district_id: { type: DataTypes.BIGINT, allowNull: true },
      specialty_id: { type: DataTypes.BIGINT, allowNull: true },
      about: { type: DataTypes.STRING, allowNull: true },
      telphone: { type: DataTypes.STRING, allowNull: true },
      gender: { type: DataTypes.STRING, allowNull: true },
      age: { type: DataTypes.INTEGER, allowNull: true },
      google_lat: { type: DataTypes.DECIMAL, allowNull: true },
      google_lng: { type: DataTypes.DECIMAL, allowNull: true },
      open_time: { type: DataTypes.TIME, allowNull: true },
      close_time: { type: DataTypes.TIME, allowNull: true }
    },
    {
      tableName: "doctor"
    }
  );
  Doctor.associate = function(models) {
    Doctor.belongsTo(models.District, { foreignKey: "district_id" });
    Doctor.belongsTo(models.Specialty, { foreignKey: "specialty_id" })
  };
  return Doctor;
};
