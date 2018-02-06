import { Metrics } from './Metrics';
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
    public actionType : string;

    public constructor(init?:Partial<ScoredBase>)
    {
        (<any>Object).assign(this, init);
    }
}

export class UnscoredAction extends ScoredBase {
  public reason: string

  public constructor(init?: Partial<UnscoredAction>) {
    super(init)
    Object.assign(this, init)
  }
}

export class ScoredAction extends ScoredBase
{
    public score : number;

  public constructor(init?: Partial<ScoredAction>) {
    super(init)
    Object.assign(this, init)
  }
}

export class ScoreResponse {
  public scoredActions: ScoredAction[]
  public unscoredActions: UnscoredAction[]
  public metrics: Metrics

  public constructor(init?: Partial<ScoreResponse>) {
    Object.assign(this, init)
  }
}
