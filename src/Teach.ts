import { JsonProperty } from 'json-typescript-mapper';

export class Teach
{
    @JsonProperty("teachId")
    public teachId : string;

    @JsonProperty("createdDatetime")
    public createdDatetime : string;

    @JsonProperty("lastQueryDatetime")
    public lastQueryDatetime : string;

    @JsonProperty("packageId")
    public packageId : number;

    public constructor(init?:Partial<Teach>)
    {
        this.teachId = undefined;
        this.createdDatetime = undefined;
        this.lastQueryDatetime = undefined;
        this.packageId = undefined;
        (<any>Object).assign(this, init);
    } 
}

export class TeachResponse
{
    @JsonProperty("packageId")
    public packageId : number;

    @JsonProperty("teachId")
    public teachId : string;

    @JsonProperty("trainDialogId")
    public trainDialogId : string;

    public constructor(init?:Partial<TeachResponse>)
    {
        this.packageId = undefined;
        this.teachId = undefined;
        this.trainDialogId = undefined;
        (<any>Object).assign(this, init);
    } 
}

export class TeachList
{
    @JsonProperty({clazz: Teach, name: 'teaches'})
    public teaches : Teach[];

    public constructor(init?:Partial<TeachList>)
    {
        this.teaches = undefined;
        (<any>Object).assign(this, init);
    }
}

export class TeachIdList
{
    @JsonProperty('teachIds')  
    public teachIds : string[];

    public constructor(init?:Partial<TeachIdList>)
    {
        this.teachIds = undefined;
        (<any>Object).assign(this, init);
    }
}