export class Teach
{
    public teachId : string;
    public createdDatetime : string;
    public lastQueryDatetime : string;
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
    public packageId : number;
    public teachId : string;
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
    public teaches : Teach[];

    public constructor(init?:Partial<TeachList>)
    {
        this.teaches = undefined;
        (<any>Object).assign(this, init);
    }
}

export class TeachIdList
{
    public teachIds : string[];

    public constructor(init?:Partial<TeachIdList>)
    {
        this.teachIds = undefined;
        (<any>Object).assign(this, init);
    }
}