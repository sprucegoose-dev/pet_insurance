export enum InsuranceStatus {
    FULLY_COVERED = 'fully_covered',
    ACCIDENT_ONLY = 'accident_only',
    NO_COVER = 'no_cover',
}

export interface IInsuranceStatusResource {
    id: number;
    type: InsuranceStatus;
    label: string;
}

