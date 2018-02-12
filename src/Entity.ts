export enum EntityType {
  LOCAL = 'LOCAL',
  LUIS = 'LUIS'
}

export class EntityBase {
    public entityId : string;
    public entityName : string;
    public entityType : string;
    public version : number;
    public packageCreationId : number;
    public packageDeletionId : number;

    public isMultivalue : boolean;
        
    /** If set, has a negative and positive version */
    public isNegatible : boolean;

    /** If Negatable, the Id of negative entity associates with this Entity */
    public negativeId: string | null

    /** If a Negative, Id of positive entity associated with this Entity */
    public positiveId: string | null

    public constructor(init?:Partial<EntityBase>)
    {
        (<any>Object).assign(this, init);
    }
}

export class LabeledEntity extends EntityBase
{
    public startCharIndex : number;

    public endCharIndex : number;

    public entityText : string;

    public resolution: {};

    public builtinType: string;

    public constructor(init?:Partial<LabeledEntity>)
    {
        super(init);
        (<any>Object).assign(this, init);
    }
}

export class PredictedEntity extends LabeledEntity
{
    public score : number;

    public constructor(init?:Partial<PredictedEntity>)
    {
        super(init);
        (<any>Object).assign(this, init);
    }
}

export class EntityList {
  public entities: EntityBase[]

  public constructor(init?: Partial<EntityList>) {
    Object.assign(this, init)
  }
}

export class EntityIdList {
  public entityIds: string[]

    public constructor(init?:Partial<EntityIdList>)
    {
        (<any>Object).assign(this, init);
    }
}
