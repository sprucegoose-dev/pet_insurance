import { DataTypes, Model } from 'sequelize';

import { sequelize } from '../../database/connection';

export default class UserResource extends Model {}

UserResource.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        field: 'name',
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
