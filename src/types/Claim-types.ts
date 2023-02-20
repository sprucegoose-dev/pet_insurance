import { Request, Response } from 'express';
import { IClaimStatusResource } from './ClaimStatus-types';

export interface IClaimPayload {
    petId: number;
    statusId: number;
    description: string;
    cost: number;
}

export interface ICreateClaimRequest extends Request {
    body: IClaimPayload;
}

export interface IUpdateClaimRequest extends ICreateClaimRequest {
    params: {
        claimId: string;
    }
}

export interface IDeleteClaimRequest extends Request {
    params: {
        claimId: string;
    }
}

export interface IGetClaimRequest extends Request {
    params: {
        claimId: string;
    }
}

export interface IClaimResource {
    cost: number;
    createdAt: string;
    description: string;
    id: number;
    petId: number;
    statusId: number;
    updatedAt: string;
}

export interface IExtendedClaimResource extends IClaimResource {
    status: IClaimStatusResource;
}

export interface IClaimStatic {
    create: (payload: IClaimPayload) => Promise<IExtendedClaimResource>;
    update: (claimId: number, payload: IClaimPayload) => Promise<IExtendedClaimResource>;
    delete: (claimId: number) => Promise<void>;
    getOne: (claimId: number) => Promise<IExtendedClaimResource>;
}

export interface IClaimModel {
}

export interface IClaimsController {
    create: (req: ICreateClaimRequest, res: Response) => Promise<void>;
    update: (req: IUpdateClaimRequest, res: Response) => Promise<void>;
    delete: (req: IDeleteClaimRequest, res: Response) => Promise<void>;
}

