import { JsonProperty } from 'json-typescript-mapper';

export class Session
{
    @JsonProperty("sessionId")
    public sessionId : string;

    @JsonProperty("createdDatetime")
    public createdDatetime : string;

    @JsonProperty("lastQueryDatetime")
    public lastQueryDatetime : string;

    @JsonProperty("lastQueryDatetime")
    public packageId : number;

    @JsonProperty("saveToLog")
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
    @JsonProperty({clazz: Session, name: 'sessions'})
    public sessions : Session[];

    public constructor(init?:Partial<SessionList>)
    {
        this.sessions = undefined;
        (<any>Object).assign(this, init);
    }
}

export class SessionIdList
{
    @JsonProperty('sessionIds')  
    public sessionIds : string[];

    public constructor(init?:Partial<SessionIdList>)
    {
        this.sessionIds = undefined;
        (<any>Object).assign(this, init);
    }
}