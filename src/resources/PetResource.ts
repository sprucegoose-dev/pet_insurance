import { DataTypes, Model } from 'sequelize';

import { sequelize } from '../../database/connection';
import UserResource from './UserResource';

export default class PetResource extends Model {}

PetResource.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    userId: {
        type: DataTypes.INTEGER,
        field: 'user_id',
        references: {
            model: UserResource,
            key: 'id',
        },
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
    modelName: 'PetResource',
    tableName: 'pets',
    timestamps: true,
});
