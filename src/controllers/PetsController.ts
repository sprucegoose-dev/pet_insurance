import { Response } from 'express';

import Pet from '../models/Pet';
import { exceptionHandler } from '../services/ExceptionHandler-decorator';
import {
    ICreatePetRequest,
    IDeletePetRequest,
    IGetPetRequest,
    IPetsController,
    IUpdatePetRequest,
} from '../types/Pet-types';

@exceptionHandler()
class PetsController implements IPetsController {

    async create(req: ICreatePetRequest, res: Response): Promise<void> {
        const response = await Pet.create(req.body);
        res.send(response);
    }

    async update(req: IUpdatePetRequest, res: Response): Promise<void> {
        const response = await Pet.update(parseInt(req.params.petId), req.body);
        res.send(response);
    }

    async delete(req: IDeletePetRequest, res: Response): Promise<void> {
        const response = await Pet.delete(parseInt(req.params.petId));
        res.send(response);
    }

    async getOne(req: IGetPetRequest, res: Response): Promise<void> {
        const response = await Pet.getOne(parseInt(req.params.petId));
        res.send(response);
    }

}

export default new PetsController;
