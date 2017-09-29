import { ScoreInput, ScoredAction } from './Score';

export class LabeledEntity
{
    public startCharIndex : number;

    public endCharIndex : number;

    public entityId : string;

    public entityName : string;

    public entityText : string;

    public constructor(init?:Partial<LabeledEntity>)
    {
        this.startCharIndex = undefined;
        this.endCharIndex = undefined;
        this.entityId = undefined;
        this.entityName = undefined;
        this.entityText = undefined;
        (<any>Object).assign(this, init);
    }
}

export class TextVariation
{
    public text : String;

    public labelEntities : LabeledEntity[];

    public constructor(init?:Partial<TextVariation>)
    {
        this.text = undefined;
        this.labelEntities = undefined;
        (<any>Object).assign(this, init);
    }
}

export class TrainExtractorStep
{
    public textVariations : TextVariation[];

    public constructor(init?:Partial<TrainExtractorStep>)
    {
        this.textVariations = undefined;
        (<any>Object).assign(this, init);
    }
}

export class TrainScorerStep
{
    public input : ScoreInput;

    // I'd of the selected action
    public labelAction : string;

    // Score of the selected action
    public scoredAction : ScoredAction;

    public constructor(init?:Partial<TrainScorerStep>)
    {
        this.input = undefined;
        this.labelAction = undefined;
        this.scoredAction = undefined;
        (<any>Object).assign(this, init);
    }
}

export class TrainRound
{
    public extractorStep : TrainExtractorStep;

    public scorerSteps : TrainScorerStep[];

    public constructor(init?:Partial<TrainRound>)
    {
        this.extractorStep = undefined;
        this.scorerSteps = undefined;
        (<any>Object).assign(this, init);
    }
}

export class TrainDialog
{
    public trainDialogId : string;
    public version : number;
    public packageCreationId : number;
    public packageDeletionId : number;
    public rounds : TrainRound[];

    public constructor(init?:Partial<TrainDialog>)
    {
        this.trainDialogId = undefined;
        this.version = undefined;
        this.packageCreationId = undefined;
        this.packageDeletionId = undefined;
        this.rounds = undefined;
        (<any>Object).assign(this, init);
    }
}

export class TrainResponse
{
    public packageId : number;
    public trainingStatus : string;
    public trainDialogId : string;

    public constructor(init?:Partial<TrainResponse>)
    {
        this.packageId = undefined;
        this.trainingStatus = undefined;
        this.trainDialogId = undefined;
        (<any>Object).assign(this, init);
    } 
}

export class TrainDialogList
{
    public trainDialogs : TrainDialog[];

    public constructor(init?:Partial<TrainDialogList>)
    {
        this.trainDialogs = undefined;
        (<any>Object).assign(this, init);
    }
}

export class TrainDialogIdList
{
    public trainDialogIds : string[];

    public constructor(init?:Partial<TrainDialogIdList>)
    {
        this.trainDialogIds = undefined;
        (<any>Object).assign(this, init);
    }
}