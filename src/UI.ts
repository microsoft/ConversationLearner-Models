import { Memory } from './Memory';
import { ScoreInput, ScoreResponse } from './Score';
import { TrainExtractorStep, TrainScorerStep } from './TrainDialog';
import { EntityBase } from './Entity'
import { ExtractResponse, TeachResponse } from './BlisModels'

export enum ScoreReason 
{
    // Action has been masked
    NotAvailable = "notAvailable",

    // Action can't be scored because it hasn't been trained yet
    NotScorable = "notScorable",

    // Score has not yet been calculated
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

export class UITeachResponse
{
    public teachResponse : TeachResponse;

    public memories : Memory[];

    public constructor(init?:Partial<UITeachResponse>)
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