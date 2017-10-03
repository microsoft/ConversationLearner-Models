export const ActionTypes =
{
    TEXT : "TEXT",
    API_LOCAL : "API_LOCAL",
    API_AZURE : "API_AZURE",
    INTENT : "INTENT",
    CARD : "CARD"
}

export class ActionMetaData
{
    // Action Type
    public actionType : string;

    public constructor(init?:Partial<ActionMetaData>)
    {
        (<any>Object).assign(this, init);
    }

    public Equal(metaData : ActionMetaData) : boolean
    {
        return (this.actionType == metaData.actionType);
    }
}

export class ActionBase
{
    public actionId : string;
    public payload : string;
    public isTerminal : boolean;
    public requiredEntities : string[];
    public negativeEntities : string[];
    public suggestedEntity : string;
    public version : number;
    public packageCreationId : number;
    public packageDeletionId : number;
    public metadata : ActionMetaData;

    public constructor(init?:Partial<ActionBase>)
    {
        this.metadata = new ActionMetaData();
        (<any>Object).assign(this, init);
    } 
}

export class ActionList
{
  
    public actions : ActionBase[];

    public constructor(init?:Partial<ActionList>)
    {
        (<any>Object).assign(this, init);
    }
}

export class ActionIdList
{
  
    public actionIds : string[];

    public constructor(init?:Partial<ActionIdList>)
    {
        (<any>Object).assign(this, init);
    }
}