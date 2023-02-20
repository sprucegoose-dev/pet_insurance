export enum ClaimStatus {
    PENDING = 'pending',
    APPROVED = 'approved',
    REJECTED = 'rejected',
}

export interface IInsuranceStatusResource {
    id: number;
    type: ClaimStatus;
    label: string;
}

