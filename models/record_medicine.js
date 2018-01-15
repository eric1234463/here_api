'use strict';
module.exports = (sequelize, DataTypes) => {
    var RecordMedicine = sequelize.define(
        'RecordMedicine',
        {
            id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
            recordId: { type: DataTypes.BIGINT, allowNull: false },
            medicineId:  { type: DataTypes.BIGINT, allowNull: false },
            class: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            tableName: 'record_medicine'
        }
    );
    RecordMedicine.associate = function (models) { 
        RecordMedicine.belongsTo(models.Medicine, {foreignKey: 'medicineId'});
    };
    return RecordMedicine;
};
