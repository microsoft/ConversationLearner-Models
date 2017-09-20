import { JsonProperty } from 'json-typescript-mapper';
import { Memory } from './Memory';
import { ScoreInput, ScoreResponse } from './Score';
import { ExtractResponse } from './Extract';
import { TrainExtractorStep } from './TrainDialog';
import { BlisAppBase } from './BlisApp';

export enum ScoreReason 
{
    NotAvailable = "notAvailable",
    NotScorable = "notScorable",
    NotCalculated = "notCalculated"
}

export class UIScoreInput
{
    @JsonProperty({clazz: TrainExtractorStep, name: 'trainExtractorStep'})
    public trainExtractorStep : TrainExtractorStep;

    @JsonProperty({clazz: ExtractResponse, name: 'extractResponse'})
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
    @JsonProperty({clazz: ExtractResponse, name: 'extractResponse'})
    public extractResponse : ExtractResponse;

    @JsonProperty({clazz: Memory, name: 'memories'})
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