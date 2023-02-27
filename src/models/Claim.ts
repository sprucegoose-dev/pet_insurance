import {
    IClaimModel,
    IClaimStatic,
    IClaimPayload,
    IClaimResource,
} from '../types/Claim-types';
import ClaimResource from '../resources/ClaimResource';
import { CustomException, ERROR_NOT_FOUND } from '../services/ExceptionHandler';
import ClaimStatusResource from '../resources/ClaimStatusResource';

const Claim: IClaimStatic = class Claim implements IClaimModel {

    static async create(payload: IClaimPayload): Promise<IClaimResource> {
        const {
            cost,
            description,
            statusId,
            petId,
        } = payload;

        const claim = (await ClaimResource.create({
            cost,
            description,
            statusId,
            petId,
        })).toJSON();

        return await this.getOne(claim.id);
    }

    static async update(claimId: number, payload: IClaimPayload): Promise<IClaimResource> {
        const {
            cost,
            description,
            statusId,
            petId,
        } = payload;

        await ClaimResource.update({
            cost,
            description,
            statusId,
            petId,
        }, {
            where: {
                id: claimId,
            }
        });

        return await this.getOne(claimId);
    }

    static async delete(ClaimId: number): Promise<void> {
        await ClaimResource.destroy({
            where: {
                id: ClaimId,
            }
        });
    }

    static async getOne(claimId: number): Promise<IClaimResource> {
        const claim = await ClaimResource.findOne({
            where: {
                id: claimId,
            },
            include: [
                {
                    model: ClaimStatusResource,
                    as: 'status',
                },
            ],
        });

        if (!claim) {
            throw new CustomException(ERROR_NOT_FOUND, 'Claim not found');
        }

        return claim.toJSON();
    }
};

export default Claim;
