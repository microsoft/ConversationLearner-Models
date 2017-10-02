export class Session
{
    public sessionId : string;
    public createdDatetime : string;
    public lastQueryDatetime : string;
    public packageId : number;
    public saveToLog : boolean;

    public constructor(init?:Partial<Session>)
    {
        (<any>Object).assign(this, init);
    } 
}

export class SessionList
{
    public sessions : Session[];

    public constructor(init?:Partial<SessionList>)
    {
        (<any>Object).assign(this, init);
    }
}

export class SessionIdList
{
    public sessionIds : string[];

    public constructor(init?:Partial<SessionIdList>)
    {
        (<any>Object).assign(this, init);
    }
}