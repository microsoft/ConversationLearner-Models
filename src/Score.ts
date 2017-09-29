import { Metrics } from './Metrics';
import { ActionMetaData } from './Action';

export class ScoreInput
{
    public filledEntities : string[];
    public context : {};
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
    public actionId : string;
    public payload : string;
    public isTerminal : boolean;
    public metadata : ActionMetaData;

    public constructor(init?:Partial<ScoredBase>)
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
    public reason : string;

    public constructor(init?:Partial<UnscoredAction>)
    {
        super(init);
        this.reason = undefined;
        (<any>Object).assign(this, init);
    }
}

export class ScoredAction extends ScoredBase
{
    public score : number;
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
    public scoredActions : ScoredAction[];
    public unscoredActions : UnscoredAction[];
    public metrics : Metrics;

    public constructor(init?:Partial<ScoreResponse>)
    {
        this.scoredActions = undefined;
        this.unscoredActions = undefined;
        this.metrics = undefined;
        (<any>Object).assign(this, init);
    }
}