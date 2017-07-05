export declare class Session {
    sessionId: string;
    createdDatetime: string;
    lastQueryDatetime: string;
    packageId: number;
    saveToLog: boolean;
    constructor(init?: Partial<Session>);
}
