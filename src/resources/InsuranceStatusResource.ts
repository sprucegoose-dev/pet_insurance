import { DataTypes, Model, Optional } from 'sequelize';

import { sequelize } from '../../database/connection';
import { IInsuranceStatusResource } from '../types/InsuranceStatus-types';

export default class InsuranceStatusResource extends Model<IInsuranceStatusResource, Optional<IInsuranceStatusResource, 'id'>> {}

InsuranceStatusResource.init({
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
    modelName: 'InsuranceStatusResource',
    tableName: 'insurance_statuses',
    timestamps: false,
});
