export class Teach
{
    public teachId : string;
    public createdDatetime : string;
    public lastQueryDatetime : string;
    public packageId : number;

    public constructor(init?:Partial<Teach>)
    {
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
        (<any>Object).assign(this, init);
    } 
}

export class TeachList
{
    public teaches : Teach[];

    public constructor(init?:Partial<TeachList>)
    {
        (<any>Object).assign(this, init);
    }
}

export class TeachIdList
{
    public teachIds : string[];

    public constructor(init?:Partial<TeachIdList>)
    {
        (<any>Object).assign(this, init);
    }
}