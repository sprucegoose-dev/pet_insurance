import {
    ICreatePetRequest,
    IPetModel,
    IPetResource,
} from '../types/Pet-types';
import PetResource from '../resources/PetResource';

class Pet implements IPetModel {

    async create(userId: number, options: ICreatePetRequest): Promise<IPetResource> {
        const pet = await PetResource.create({
            name,
            age,
            typeId,
            statusId,
        });

        return pet.toJSON();
    }
};

export default Pet;
