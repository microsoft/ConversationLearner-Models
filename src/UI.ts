import { Memory } from './Memory';
import { ScoreInput, ScoreResponse } from './Score';
import { ExtractResponse } from './Extract';
import { TrainExtractorStep, TrainScorerStep } from './TrainDialog';
import { EntityBase } from './Entity'

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
        this.trainExtractorStep = undefined;
        this.extractResponse = undefined;
        (<any>Object).assign(this, init);
    }
}

export class UIExtractResponse
{
    public extractResponse : ExtractResponse;

    public memories : Memory[];

    public constructor(init?:Partial<UIExtractResponse>)
    {
        this.extractResponse = undefined;
        this.memories = undefined;
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
        this.scoreResponse = undefined;
        this.scoreInput = undefined;
        this.memories = undefined;
        (<any>Object).assign(this, init);
    }
}

export class UITrainScorerStep
{
    public trainScorerStep : TrainScorerStep;

    public entities : EntityBase[];

    public constructor(init?:Partial<UITrainScorerStep>)
    {
        this.trainScorerStep = undefined;
        this.entities = undefined;
        (<any>Object).assign(this, init);
    }
}