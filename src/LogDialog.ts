import { ScoreResponse, ScoreInput } from './Score';
import { ExtractResponse } from './Extract';
import { Metrics } from './Metrics';

export class LogExtractorStep extends ExtractResponse
{
    public stepBeginDatetime : string;
    public stepEndDatetime : string;

    public constructor(init?:Partial<LogExtractorStep>)
    {   
        super();
        this.stepBeginDatetime = undefined;
        this.stepEndDatetime = undefined;
        (<any>Object).assign(this, init);
    }
}

export class LogScorerStep
{
    public input : ScoreInput;
    public predictedAction : string;
    public predictionDetails : ScoreResponse;
    public stepBeginDatetime : string;
    public stepEndDatetime : string;
    public metrics : Metrics;

    public constructor(init?:Partial<LogScorerStep>)
    {
        this.input = undefined;
        this.predictedAction = undefined;
        this.predictionDetails = undefined;
        this.stepBeginDatetime = undefined;
        this.stepEndDatetime = undefined;
        this.metrics = undefined;
        (<any>Object).assign(this, init);
    }
}

export class LogRound
{
    public extractorStep : LogExtractorStep;
    public scorerSteps : LogScorerStep[];

    public constructor(init?:Partial<LogRound>)
    {
        this.extractorStep = undefined;
        this.scorerSteps = undefined;
        (<any>Object).assign(this, init);
    }
}

export class LogDialog
{
    public logDialogId : string;
    public dialogBeginDatetime : string;
    public dialogEndDatetime : string;
    public packageId : number;
    public metrics : string;
    public rounds : LogRound[];

    public constructor(init?:Partial<LogDialog>)
    {
        this.logDialogId = undefined;
        this.dialogBeginDatetime = undefined;
        this.dialogEndDatetime = undefined;
        this.packageId = undefined;
        this.metrics = undefined;
        this.rounds = undefined;
        (<any>Object).assign(this, init);
    }
}

export class LogDialogList
{
    public logDialogs : LogDialog[];

    public constructor(init?:Partial<LogDialogList>)
    {
        this.logDialogs = undefined;
        (<any>Object).assign(this, init);
    }
}

export class LogDialogIdList
{
    @JsonProperty('logdialogIds')  
    public logDialogIds : string[];

    public constructor(init?:Partial<LogDialogIdList>)
    {
        this.logDialogIds = undefined;
        (<any>Object).assign(this, init);
    }
}