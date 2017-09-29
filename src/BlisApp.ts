export class BlisAppMetaData
{
    public botFrameworkApps : string[];

    public constructor(init?:Partial<BlisAppMetaData>)
    {
        this.botFrameworkApps = undefined;
        (<any>Object).assign(this, init);
    }
}

export class BlisAppBase
{
    public appName : string;
    public appId : string;
    public luisKey : string;
    public locale : string;
    public metadata : BlisAppMetaData;

    public constructor(init?:Partial<BlisAppBase>)
    {
        this.appName = undefined;
        this.appId = undefined;
        this.luisKey = undefined;
        this.locale = undefined;
        this.metadata = undefined;
        (<any>Object).assign(this, init);
    }
}

export class BlisAppList
{
    public apps : BlisAppBase[];

    public constructor(init?:Partial<BlisAppList>)
    {
        this.apps = undefined;
        (<any>Object).assign(this, init);
    }
}

export class BlisAppIdList
{
    public appIds : string[];

    public constructor(init?:Partial<BlisAppIdList>)
    {
        this.appIds = undefined;
        (<any>Object).assign(this, init);
    }
}