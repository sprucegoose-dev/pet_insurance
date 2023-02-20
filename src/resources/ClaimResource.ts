import { DataTypes, Model } from 'sequelize';

import { sequelize } from '../../database/connection';
import ClaimStatusResource from './ClaimStatusResource';

import PetResource from './PetResource';

export default class ClaimResource extends Model {}

ClaimResource.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    petId: {
        type: DataTypes.INTEGER,
        field: 'pet_id',
        references: {
            model: PetResource,
            key: 'id',
        },
    },
    statusId: {
        type: DataTypes.INTEGER,
        field: 'status_id',
        references: {
            model: ClaimStatusResource,
            key: 'id',
        },
    },
    description: {
        type: DataTypes.STRING,
    },
    cost: {
        type: DataTypes.INTEGER,
    },
    createdAt: {
        type: DataTypes.DATE,
        field: 'created_at',
        defaultValue: DataTypes.NOW,
    },
    updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at',
        defaultValue: DataTypes.NOW,
    },
}, {
    sequelize,
    modelName: 'ClaimResource',
    tableName: 'claims',
    timestamps: true,
});

ClaimResource.belongsTo(ClaimStatusResource, {
    foreignKey: 'statusId',
    as: 'status',
});
