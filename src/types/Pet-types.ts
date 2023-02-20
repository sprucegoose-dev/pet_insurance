import { Request, Response } from 'express';

export interface IPetPayload {
    age: number;
    name: string;
    statusId: number;
    typeId: number;
    userId: number;
}

export interface ICreatePetRequest extends Request {
    body: IPetPayload;
}

export interface IUpdatePetRequest extends ICreatePetRequest {
    params: {
        petId: string;
    }
}

export interface IDeletePetRequest extends Request {
    params: {
        petId: string;
    }
}

export interface IGetPetRequest extends Request {
    params: {
        petId: string;
    }
}

export interface IPetResource {
    age: number;
    createdAt: string;
    name: string;
    statusId: number;
    typeId: number;
    updatedAt: string;
    userId: number;
}

export interface IPetStatic {
    create: (payload: IPetPayload) => Promise<IPetResource>;
    update: (petId: number, payload: IPetPayload) => Promise<void>;
    delete: (petId: number) => Promise<void>;
    getOne: (petId: number) => Promise<IPetResource>;
}

export interface IPetModel {
}

export interface IPetsController {
    create: (req: ICreatePetRequest, res: Response) => Promise<void>;
    update: (req: IUpdatePetRequest, res: Response) => Promise<void>;
    delete: (req: IDeletePetRequest, res: Response) => Promise<void>;
}

