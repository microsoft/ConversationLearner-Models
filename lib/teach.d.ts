export declare class Teach {
    teachId: string;
    createdDatetime: string;
    lastQueryDatetime: string;
    packageId: number;
    constructor(init?: Partial<Teach>);
}
export declare class TeachResponse {
    packageId: number;
    teachId: string;
    trainDialogId: string;
    constructor(init?: Partial<TeachResponse>);
}
