import {
    IPetModel,
    IPetStatic,
    IPetPayload,
    IExtendedPetResource,
} from '../types/Pet-types';
import PetResource from '../resources/PetResource';
import { CustomException, ERROR_NOT_FOUND } from '../services/ExceptionHandler';
import UserResource from '../resources/UserResource';
import InsuranceStatusResource from '../resources/InsuranceStatusResource';
import PetTypeResource from '../resources/PetTypeResource';
import ClaimResource from '../resources/ClaimResource';
import { IExtendedClaimResource } from '../types/Claim-types';
import ClaimStatusResource from '../resources/ClaimStatusResource';

const Pet: IPetStatic = class Pet implements IPetModel {

    static async create(payload: IPetPayload): Promise<IExtendedPetResource> {
        const {
            name,
            age,
            typeId,
            ownerId,
            insuranceStatusId,
        } = payload;

        const pet = (await PetResource.create({
            name,
            age,
            typeId,
            insuranceStatusId,
            ownerId,
        })).toJSON();

        return await this.getOne(pet.id);
    }

    static async update(petId: number, payload: IPetPayload): Promise<IExtendedPetResource> {
        const {
            name,
            age,
            typeId,
            insuranceStatusId,
        } = payload;

        await PetResource.update({
            name,
            age,
            typeId,
            insuranceStatusId,
        }, {
            where: {
                id: petId,
            }
        });

        return await this.getOne(petId);
    }

    static async delete(petId: number): Promise<void> {
        await PetResource.destroy({
            where: {
                id: petId,
            }
        });
    }

    static async getOne(petId: number): Promise<IExtendedPetResource> {
        const pet = await PetResource.findOne({
            where: {
                id: petId,
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
            ],
        });

        if (!pet) {
            throw new CustomException(ERROR_NOT_FOUND, 'Pet not found');
        }

        return pet.toJSON();
    }

    static async getClaims(petId: number): Promise<IExtendedClaimResource[]> {
        const claims = await ClaimResource.findAll({
            where: {
                petId,
            },
            include: [
                {
                    model: ClaimStatusResource,
                    as: 'status',
                },
            ],
        });

        return claims.map(claim => claim.toJSON());
    }
};

export default Pet;
