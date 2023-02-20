import { Response } from 'express';
import Claim from '../models/Claim';

import { exceptionHandler } from '../services/ExceptionHandler-decorator';
import {
    IClaimsController,
    ICreateClaimRequest,
    IDeleteClaimRequest,
    IGetClaimRequest,
    IUpdateClaimRequest,
} from '../types/Claim-types';

@exceptionHandler()
class ClaimsController implements IClaimsController {

    async create(req: ICreateClaimRequest, res: Response): Promise<void> {
        const response = await Claim.create(req.body);
        res.send(response);
    }

    async update(req: IUpdateClaimRequest, res: Response): Promise<void> {
        const response = await Claim.update(parseInt(req.params.claimId), req.body);
        res.send(response);
    }

    async delete(req: IDeleteClaimRequest, res: Response): Promise<void> {
        const response = await Claim.delete(parseInt(req.params.claimId));
        res.send(response);
    }

    async getOne(req: IGetClaimRequest, res: Response): Promise<void> {
        const response = await Claim.getOne(parseInt(req.params.claimId));
        res.send(response);
    }

}

export default new ClaimsController;
