import { Request, Response } from 'express';

import User from '../models/User';
import { exceptionHandler } from '../services/ExceptionHandler-decorator';
import {
    ICreateUserRequest,
    IDeleteUserRequest,
    IUsersController,
    IUpdateUserRequest,
    IGetPetsRequest,
    IGetUserRequest,
} from '../types/User-types';

@exceptionHandler()
class UsersController implements IUsersController {

    async create(req: ICreateUserRequest, res: Response): Promise<void> {
        const response = await User.create(req.body);
        res.send(response);
    }

    async update(req: IUpdateUserRequest, res: Response): Promise<void> {
        const response = await User.update(parseInt(req.params.userId), req.body);
        res.send(response);
    }

    async delete(req: IDeleteUserRequest, res: Response): Promise<void> {
        const response = await User.delete(parseInt(req.params.userId));
        res.send(response);
    }

    async getOne(req: IGetUserRequest, res: Response): Promise<void> {
        const response = await User.getOne(parseInt(req.params.userId));
        res.send(response);
    }

    async getPets(req: IGetPetsRequest, res: Response): Promise<void> {
        const response = await User.getPets(parseInt(req.params.userId));
        res.send(response);
    }

    async getAll(_req: Request, res: Response): Promise<void> {
        const response = await User.getAll();
        res.send(response);
    }

}

export default new UsersController;
