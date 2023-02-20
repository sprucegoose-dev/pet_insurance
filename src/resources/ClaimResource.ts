import { DataTypes, Model } from 'sequelize';

import { sequelize } from '../../database/connection';
import PetResource from './PetResource';

export default class UserResource extends Model {}

UserResource.init({
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
        field: 'pet_id',
        references: {
            model: PetResource,
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
    modelName: 'UserResource',
    tableName: 'users',
    timestamps: true,
});
