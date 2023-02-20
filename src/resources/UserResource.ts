import { DataTypes, Model } from 'sequelize';

import { sequelize } from '../../database/connection';

export default class UserResource extends Model {}

UserResource.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    firstName: {
        type: DataTypes.STRING,
        field: 'first_name',
    },
    lastName: {
        type: DataTypes.STRING,
        field: 'last_name',
    },
    email: {
        type: DataTypes.STRING,
        field: 'email',
    },
    password: {
        type: DataTypes.STRING,
        field: 'password',
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
