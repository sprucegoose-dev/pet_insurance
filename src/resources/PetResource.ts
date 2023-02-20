import { DataTypes, Model } from 'sequelize';

import { sequelize } from '../../database/connection';
import InsuranceStatusResource from './InsuranceStatusResource';
import PetTypeResource from './PetTypeResource';
import UserResource from './UserResource';

export default class PetResource extends Model {}

PetResource.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        field: 'name',
    },
    age: {
        type: DataTypes.INTEGER,
        field: 'age',
    },
    typeId: {
        type: DataTypes.INTEGER,
        field: 'type_id',
        references: {
            model: PetTypeResource,
            key: 'id',
        },
    },
    insuranceStatusId: {
        type: DataTypes.INTEGER,
        field: 'insurance_status_id',
        references: {
            model: InsuranceStatusResource,
            key: 'id',
        },
    },
    ownerId: {
        type: DataTypes.INTEGER,
        field: 'owner_id',
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

PetResource.belongsTo(PetTypeResource, {
    foreignKey: 'typeId',
    as: 'type',
});

PetResource.belongsTo(InsuranceStatusResource, {
    foreignKey: 'insuranceStatusId',
    as: 'insuranceStatus',
});

PetResource.belongsTo(UserResource, {
    foreignKey: 'ownerId',
    as: 'owner',
});

UserResource.hasMany(PetResource, {
    foreignKey: {
        name: 'ownerId',
        field: 'id',
    },
    as: 'pets',
});

