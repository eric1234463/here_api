"use strict";
module.exports = (sequelize, DataTypes) => {
  var Notification = sequelize.define(
    "Notification",
    {
      id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
      title: { type: DataTypes.STRING(255), allowNull: false },
      body: { type: DataTypes.STRING(255), allowNull: false }
    },
    {
      tableName: "notification"
    }
  );
  Notification.associate = function(models) {};
  return Notification;
};
