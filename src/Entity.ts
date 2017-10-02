export enum EntityType {
    LOCAL = "LOCAL",
    LUIS = "LUIS"
};

export class EntityMetaData
{
    public isBucket : boolean;
        
    /** If set, has a negative and positive version */
    public isReversable : boolean;

    /** If Negatable, the Id of negative entity associates with this Entity */
    public negativeId : string;

    /** If a Negative, Id of positive entity associated with this Entity */
    public positiveId : string;

    public constructor(init?:Partial<EntityMetaData>)
    {
        (<any>Object).assign(this, init);
    }

    /** Make negate of given metadata */
    public MakeNegative(posId : string) : EntityMetaData
    {
        return new EntityMetaData({ isBucket : this.isBucket, negativeId : null, positiveId : posId});
    }

}

export class EntityBase {
    public entityId : string;
    public entityName : string;
    public entityType : string;
    public version : number;
    public packageCreationId : number;
    public packageDeletionId : number;
    public metadata : EntityMetaData;

    public constructor(init?:Partial<EntityBase>)
    {
        (<any>Object).assign(this, init);
    }
}

export class EntityList
{
    public entities : EntityBase[];

    public constructor(init?:Partial<EntityList>)
    {
        (<any>Object).assign(this, init);
    }
}

export class EntityIdList
{
    public entityIds : string[];

    public constructor(init?:Partial<EntityIdList>)
    {
        (<any>Object).assign(this, init);
    }
}