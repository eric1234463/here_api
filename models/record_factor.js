'use strict';
module.exports = (sequelize, DataTypes) => {
    var RecordFactor = sequelize.define(
        'RecordFactor',
        {
            id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
            recordId: { type: DataTypes.BIGINT, allowNull: false },
            factorId: { type: DataTypes.BIGINT, allowNull: false },
            class: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            tableName: 'record_factor'
        }
    );
    RecordFactor.associate = function (models) {
        RecordFactor.belongsTo(models.Factor, { foreignKey: 'factorId' });
    };
    return RecordFactor;
};
