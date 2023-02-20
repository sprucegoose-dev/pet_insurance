import {
    IPetModel,
    IPetStatic,
    IPetResource,
    IPetPayload,
} from '../types/Pet-types';
import PetResource from '../resources/PetResource';
import { CustomException, ERROR_NOT_FOUND } from '../services/ExceptionHandler';

const Pet: IPetStatic = class Pet implements IPetModel {

    static async create(payload: IPetPayload): Promise<IPetResource> {
        const {
            name,
            age,
            typeId,
            userId,
            statusId,
        } = payload;

        const pet = await PetResource.create({
            name,
            age,
            typeId,
            statusId,
            userId,
        });

        return pet.toJSON();
    }

    static async update(petId: number, payload: IPetPayload): Promise<void> {
        const {
            name,
            age,
            typeId,
            statusId,
        } = payload;

        await PetResource.update({
            name,
            age,
            typeId,
            statusId,
        }, {
            where: {
                id: petId,
            }
        });
    }

    static async delete(petId: number): Promise<void> {
        await PetResource.destroy({
            where: {
                id: petId,
            }
        });
    }

    static async getOne(petId: number): Promise<IPetResource> {
        const pet = await PetResource.findOne({
            where: {
                id: petId,
            }
        });

        if (!pet) {
            throw new CustomException(ERROR_NOT_FOUND, 'Pet not found');
        }

        return pet.toJSON();
    }
};

export default Pet;
