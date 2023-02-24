import { ClaimStatus } from './InsuranceStatus-types';

export interface IClaimStatusResource {
    id: number;
    type: ClaimStatus;
    label: string;
}

