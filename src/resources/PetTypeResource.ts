import { DataTypes, Model } from 'sequelize';

import { sequelize } from '../../database/connection';

export default class InsuranceStatusResource extends Model {}

InsuranceStatusResource.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    type: {
        type: DataTypes.STRING,
    },
}, {
    sequelize,
    modelName: 'PetTypeResource',
    tableName: 'pet_types',
    timestamps: false,
});
