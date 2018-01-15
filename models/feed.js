'use strict';
module.exports = (sequelize, DataTypes) => {
    var Feed = sequelize.define(
        'Feed',
        {
            id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
            doctorId: {
                type: DataTypes.BIGINT,
                allowNull: false,
                references: { model: 'doctor', key: 'id' }
            },
            photoURL: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            title: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            content: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            tableName: 'feed'
        }
    );
    Feed.associate = function (models) { 
        Feed.belongsTo(models.Doctor, {foreignKey: 'doctorId'})
    };
    return Feed;
};
