export enum ClaimStatus {
    PENDING = 'pending',
    APPROVED = 'approved',
    REJECTED = 'rejected',
}

export interface IClaimStatusResource {
    id: number;
    type: ClaimStatus;
    label: string;
}

