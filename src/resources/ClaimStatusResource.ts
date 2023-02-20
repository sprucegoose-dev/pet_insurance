import { DataTypes, Model } from 'sequelize';

import { sequelize } from '../../database/connection';

export default class ClaimStatusResource extends Model {}

ClaimStatusResource.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    type: {
        type: DataTypes.STRING,
    },
    label: {
        type: DataTypes.STRING,
    },
}, {
    sequelize,
    modelName: 'ClaimStatusResource',
    tableName: 'claim_statuses',
    timestamps: false,
});
