import { Request } from 'express';

export interface ICreatePetRequest extends Request {
    body: {
        age: number;
        name: string;
        statusId?: number;
        typeId: number;
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

export interface IPetModel {
    create: (userId: number, options: ICreatePetRequest) => Promise<IPetResource>;
}

