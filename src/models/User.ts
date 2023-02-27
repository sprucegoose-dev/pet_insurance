import bcrypt from 'bcrypt';

import {
    IUserModel,
    IUserStatic,
    IUserResource,
    IUserPayload,
} from '../types/User-types';
import UserResource from '../resources/UserResource';
import { CustomException, ERROR_NOT_FOUND } from '../services/ExceptionHandler';
import PetResource from '../resources/PetResource';
import PetTypeResource from '../resources/PetTypeResource';
import InsuranceStatusResource from '../resources/InsuranceStatusResource';
import { IPetResource } from '../types/Pet-types';

const User: IUserStatic = class User implements IUserModel {

    static async create(payload: IUserPayload): Promise<IUserResource> {
        const {
            firstName,
            lastName,
            email,
            password,
        } = payload;

        const user = await UserResource.create({
            firstName,
            lastName,
            email,
            password: await bcrypt.hash(password, 10),
        });

        return user.toJSON();
    }

    static async update(userId: number, payload: IUserPayload): Promise<IUserResource> {
        const {
            firstName,
            lastName,
            email,
            password,
        } = payload;

        await UserResource.update({
            firstName,
            lastName,
            email,
            password: await bcrypt.hash(password, 10),
        }, {
            where: {
                id: userId,
            }
        });

        return await this.getOne(userId);
    }

    static async delete(userId: number): Promise<void> {
        await UserResource.destroy({
            where: {
                id: userId,
            }
        });
    }

    static async getOne(userId: number): Promise<IUserResource> {
        const user = await UserResource.findOne({
            where: {
                id: userId,
            }
        });

        if (!user) {
            throw new CustomException(ERROR_NOT_FOUND, 'User not found');
        }

        return user.toJSON();
    }

    static async getAll(): Promise<IUserResource[]> {
        const users = await UserResource.findAll();

        return users.map(user => user.toJSON());
    }

    static async getPets(ownerId: number): Promise<IPetResource[]> {
        const pets = await PetResource.findAll({
            where: {
                ownerId,
            },
            include: [
                {
                    model: PetTypeResource,
                    as: 'type',
                },
                {
                    model: InsuranceStatusResource,
                    as: 'insuranceStatus',
                },
                {
                    model: UserResource,
                    as: 'owner',
                },
            ]
        });

        return pets.map(pet => pet.toJSON());
    }

};

export default User;
