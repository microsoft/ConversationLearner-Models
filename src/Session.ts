export class Session
{
    public sessionId : string;
    public createdDatetime : string;
    public lastQueryDatetime : string;
    public packageId : number;
    public saveToLog : boolean;

    public constructor(init?:Partial<Session>)
    {
        this.sessionId = undefined;
        this.createdDatetime = undefined;
        this.lastQueryDatetime = undefined;
        this.packageId = undefined;
        this.saveToLog = undefined;
        (<any>Object).assign(this, init);
    } 
}

export class SessionList
{
    public sessions : Session[];

    public constructor(init?:Partial<SessionList>)
    {
        this.sessions = undefined;
        (<any>Object).assign(this, init);
    }
}

export class SessionIdList
{
    public sessionIds : string[];

    public constructor(init?:Partial<SessionIdList>)
    {
        this.sessionIds = undefined;
        (<any>Object).assign(this, init);
    }
}