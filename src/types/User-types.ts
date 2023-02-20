import { Request, Response } from 'express';
import { IPetResource } from './Pet-types';

export interface IUserPayload {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export interface ICreateUserRequest extends Request {
    body: IUserPayload;
}

export interface IUpdateUserRequest extends ICreateUserRequest {
    params: {
        userId: string;
    }
}

export interface IDeleteUserRequest extends Request {
    params: {
        userId: string;
    }
}

export interface IGetUserRequest extends Request {
    params: {
        userId: string;
    }
}

export interface IGetPetsRequest extends Request {
    params: {
        userId: string;
    }
}

export interface IUserResource {
    createdAt: string;
    email: number;
    firstName: number;
    id: number;
    lastName: string;
    password?: number;
    updatedAt: string;
}

export interface IUserStatic {
    create: (payload: IUserPayload) => Promise<IUserResource>;
    update: (petId: number, payload: IUserPayload) => Promise<void>;
    delete: (petId: number) => Promise<void>;
    getPets: (userId: number) => Promise<IPetResource[]>;
    getOne: (userId: number) => Promise<IUserResource>;
    getAll: () => Promise<IUserResource[]>;
}

export interface IUserModel {
}

export interface IUsersController {
    create: (req: ICreateUserRequest, res: Response) => Promise<void>;
    update: (req: IUpdateUserRequest, res: Response) => Promise<void>;
    delete: (req: IDeleteUserRequest, res: Response) => Promise<void>;
    getOne: (req: IGetUserRequest, res: Response) => Promise<void>;
    getAll: (req: Request, res: Response) => Promise<void>;
}

