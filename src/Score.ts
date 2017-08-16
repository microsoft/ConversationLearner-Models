import { JsonProperty } from 'json-typescript-mapper';
import { Metrics } from './Metrics';
import { ActionMetaData } from './Action';
import { Memory } from './Memory';

export class ScoreInput
{
    @JsonProperty('filledEntities')
    public filledEntities : string[];

    @JsonProperty('context')
    public context : {};

    @JsonProperty('maskedActions')
    public maskedActions : string[];

    public constructor(init?:Partial<ScoreInput>)
    {
        this.filledEntities = undefined;
        this.context = undefined;
        this.maskedActions = undefined;
        (<any>Object).assign(this, init);
    }
}

export class ScoredBase
{
    @JsonProperty('actionId')
    public actionId : string;

    @JsonProperty('payload')
    public payload : string;

    @JsonProperty('isTerminal')
    public isTerminal : boolean;

    @JsonProperty({clazz: ActionMetaData, name: 'metadata'})
    public metadata : ActionMetaData;

    public constructor(init?:Partial<ScoredAction>)
    {
        this.actionId = undefined;
        this.payload = undefined;
        this.isTerminal = undefined;
        this.metadata = undefined;
        (<any>Object).assign(this, init);
    }
}


export class UnscoredAction extends ScoredBase
{
    @JsonProperty('reason')
    public reason : string;

    public constructor(init?:Partial<ScoredAction>)
    {
        super(init);
        this.reason = undefined;
        (<any>Object).assign(this, init);
    }
}

export class ScoredAction extends ScoredBase
{
    @JsonProperty('score')
    public score : number;

    @JsonProperty({clazz: ActionMetaData, name: 'metadata'})
    public metadata : ActionMetaData;

    public constructor(init?:Partial<ScoredAction>)
    {
        super(init);
        this.score = undefined;
        this.metadata = undefined;
        (<any>Object).assign(this, init);
    }
}

export class ScoreResponse
{
    @JsonProperty({clazz: ScoredAction, name: 'scoredActions'})
    public scoredActions : ScoredAction[];

    @JsonProperty({clazz: UnscoredAction, name: 'unscoredActions'})
    public unscoredActions : UnscoredAction[];

    @JsonProperty({clazz: Metrics, name: 'metrics'})
    public metrics : Metrics;

    public constructor(init?:Partial<ScoreResponse>)
    {
        this.scoredActions = undefined;
        this.unscoredActions = undefined;
        this.metrics = undefined;
        (<any>Object).assign(this, init);
    }
}

export class UIScoreResponse
{
    @JsonProperty({clazz: ScoreResponse, name: 'scoreResponse'})
    public scoreResponse : ScoreResponse;

    @JsonProperty({clazz: ScoreInput, name: 'scoreInput'})
    public scoreInput : ScoreInput;

    @JsonProperty({clazz: Memory, name: 'memories'})
    public memories : Memory[];

    public constructor(init?:Partial<UIScoreResponse>)
    {
        this.scoreResponse = undefined;
        this.scoreInput = undefined;
        this.memories = undefined;
        (<any>Object).assign(this, init);
    }
}