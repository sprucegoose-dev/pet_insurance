import { DataTypes, Model } from 'sequelize';

import { sequelize } from '../../database/connection';

export default class InsuranceStatusResource extends Model {}

InsuranceStatusResource.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    status: {
        type: DataTypes.STRING,
    },
}, {
    sequelize,
    modelName: 'ClaimStatusResource',
    tableName: 'claim_statuses',
    timestamps: false,
});
