import { Metrics } from './Metrics';
import { ActionMetaData } from './Action';
import { FilledEntity } from './FilledEntity';

export class ScoreInput
{
    public filledEntities : FilledEntity[];
    public context : {};
    public maskedActions : string[];

    public constructor(init?:Partial<ScoreInput>)
    {
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
        (<any>Object).assign(this, init);
    }
}

export class UnscoredAction extends ScoredBase
{
    public reason : string;

    public constructor(init?:Partial<UnscoredAction>)
    {
        super(init);
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
        (<any>Object).assign(this, init);
    }
}