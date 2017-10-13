import { Memory } from './Memory';
import { ScoreInput, ScoreResponse } from './Score';
import { TrainExtractorStep, TrainScorerStep } from './TrainDialog';
import { EntityBase } from './Entity'
import { ExtractResponse } from './BlisModels'

export enum ScoreReason 
{
    NotAvailable = "notAvailable",
    NotScorable = "notScorable",
    NotCalculated = "notCalculated"
}

export class UIScoreInput
{
    public trainExtractorStep : TrainExtractorStep;

    public extractResponse : ExtractResponse;

    public constructor(init?:Partial<UIScoreInput>)
    {
        (<any>Object).assign(this, init);
    }
}

export class UIExtractResponse
{
    public extractResponse : ExtractResponse;

    public memories : Memory[];

    public constructor(init?:Partial<UIExtractResponse>)
    {
        (<any>Object).assign(this, init);
    }
}

export class UIScoreResponse
{
    public scoreResponse : ScoreResponse;

    public scoreInput : ScoreInput;

    public memories : Memory[];

    public constructor(init?:Partial<UIScoreResponse>)
    {
        (<any>Object).assign(this, init);
    }
}

export class UITrainScorerStep
{
    public trainScorerStep : TrainScorerStep;

    public entities : EntityBase[];

    public constructor(init?:Partial<UITrainScorerStep>)
    {
        (<any>Object).assign(this, init);
    }
}