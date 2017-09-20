import { JsonProperty } from 'json-typescript-mapper';

export const ActionTypes =
{
    TEXT : "TEXT",
    API_LOCAL : "API_LOCAL",
    API_AZURE : "API_AZURE",
    INTENT : "INTENT",
    CARD : "CARD"
}

export class EntitySuggestion
{
    @JsonProperty('entityName')  
    public entityName : string;

    @JsonProperty('entityId')  
    public entityId : string;

    public constructor(init?:Partial<EntitySuggestion>)
    {
        this.entityName = undefined;
        this.entityId = undefined;
        (<any>Object).assign(this, init);
    }

    public Equal(entitySuggestion : EntitySuggestion) : boolean
    {
        if (!entitySuggestion) return false;
        if (this.entityName != entitySuggestion.entityName) return false;
        if (this.entityId != entitySuggestion.entityId) return false;
        return true;
    }
}

export class ActionMetaData
{
    // Action Type
    @JsonProperty('actionType')  
    public actionType : string;

    // Entity Suggestion
    @JsonProperty({clazz: EntitySuggestion, name: 'entitySuggestion'})  
    public entitySuggestion : EntitySuggestion;

    public constructor(init?:Partial<ActionMetaData>)
    {
        this.actionType = undefined;
        this.entitySuggestion = undefined;
        (<any>Object).assign(this, init);
    }

    public Equal(metaData : ActionMetaData) : boolean
    {
        if (this.actionType != metaData.actionType) return false;
        if (!this.entitySuggestion && metaData.entitySuggestion) return false;
        return this.entitySuggestion.Equal(metaData.entitySuggestion);
    }
}

export class ActionBase
{
    @JsonProperty('actionId')
    public actionId : string;

    @JsonProperty('payload')
    public payload : string;

    @JsonProperty('isTerminal')
    public isTerminal : boolean;

    @JsonProperty('requiredEntities')
    public requiredEntities : string[];

    @JsonProperty('negativeEntities')
    public negativeEntities : string[];

    @JsonProperty('version')
    public version : number;

    @JsonProperty('packageCreationId')
    public packageCreationId : number;

    @JsonProperty('packageDeletionId')
    public packageDeletionId : number;

    @JsonProperty({clazz: ActionMetaData, name: 'metadata'})
    public metadata : ActionMetaData;

    public constructor(init?:Partial<ActionBase>)
    {
        this.actionId = undefined;
        this.payload = undefined;
        this.isTerminal = undefined;
        this.requiredEntities = undefined;
        this.negativeEntities = undefined;
        this.version = undefined;
        this.packageCreationId = undefined;
        this.packageDeletionId = undefined;
        this.metadata = new ActionMetaData();
        (<any>Object).assign(this, init);
    } 
}

export class ActionList
{
    @JsonProperty('actions')  
    public actions : ActionBase[];

    public constructor(init?:Partial<ActionList>)
    {
        this.actions = undefined;
        (<any>Object).assign(this, init);
    }
}

export class ActionIdList
{
    @JsonProperty('actionIds')  
    public actionIds : string[];

    public constructor(init?:Partial<ActionIdList>)
    {
        this.actionIds = undefined;
        (<any>Object).assign(this, init);
    }
}