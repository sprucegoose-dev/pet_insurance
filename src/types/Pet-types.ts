import { Request, Response } from 'express';
import { IExtendedClaimResource } from './Claim-types';
import { IInsuranceStatusResource } from './InsuranceStatus-types';
import { IPetTypeResource } from './PetType-types';
import { IUserResource } from './User-types';

export interface IPetPayload {
    age: number;
    insuranceStatusId: number;
    name: string;
    typeId: number;
    ownerId: number;
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

export interface IGetClaimRequest extends Request {
    params: {
        petId: string;
    }
}

export interface IPetResource {
    age: number;
    createdAt: string;
    insuranceStatusId: number;
    name: string;
    typeId: number;
    updatedAt: string;
    userId: number;
}

export interface IExtendedPetResource extends IPetResource {
    owner: IUserResource;
    type: IPetTypeResource;
    InsuranceStatus: IInsuranceStatusResource;
}

export interface IPetStatic {
    create: (payload: IPetPayload) => Promise<IExtendedPetResource>;
    delete: (petId: number) => Promise<void>;
    getClaims: (petId: number) => Promise<IExtendedClaimResource[]>;
    getOne: (petId: number) => Promise<IExtendedPetResource>;
    update: (petId: number, payload: IPetPayload) => Promise<IExtendedPetResource>;
}

export interface IPetModel {
}

export interface IPetsController {
    create: (req: ICreatePetRequest, res: Response) => Promise<void>;
    delete: (req: IDeletePetRequest, res: Response) => Promise<void>;
    getClaims: (req: IGetClaimRequest, res: Response) => Promise<void>;
    update: (req: IUpdatePetRequest, res: Response) => Promise<void>;
}
