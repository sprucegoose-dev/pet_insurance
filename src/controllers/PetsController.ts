import { Response } from 'express';

import Pet from '../models/Pet';
import { ICreatePetRequest } from '../types/Pet-types';

class PetsController implements IPetsController {

    async create(req: ICreatePetRequest, res: Response) {
        const { userId } = req;
        const response = await Pet.create(userId, req.body);
        res.send(response);
    }

}

export default new PetsController;
