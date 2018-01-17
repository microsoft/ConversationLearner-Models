import { ScoreInput, ScoredAction } from './Score';
import { AppDefinition } from './AppDefinition';

export enum SenderType {
    User = 0,
    Bot = 1
}

export class LabeledEntity
{
    public startCharIndex : number;

    public endCharIndex : number;

    public entityId : string;

    public entityName : string;

    public entityText : string;

    public resolution: {};

    public builtinType: string;

    public constructor(init?:Partial<LabeledEntity>)
    {
        (<any>Object).assign(this, init);
    }
}

export class TextVariation
{
    public text : string;

    public labelEntities : LabeledEntity[];

    public constructor(init?:Partial<TextVariation>)
    {
        (<any>Object).assign(this, init);
    }
}

export class TrainExtractorStep
{
    public textVariations : TextVariation[];

    public constructor(init?:Partial<TrainExtractorStep>)
    {
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
        (<any>Object).assign(this, init);
    }
}

export class TrainRound
{
    public extractorStep : TrainExtractorStep;

    public scorerSteps : TrainScorerStep[];

    public constructor(init?:Partial<TrainRound>)
    {
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

    public definitions? : AppDefinition;

    public constructor(init?:Partial<TrainDialog>)
    {
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
        (<any>Object).assign(this, init);
    } 
}

export class TrainDialogList
{
    public trainDialogs : TrainDialog[];

    public definitions? : AppDefinition;

    public constructor(init?:Partial<TrainDialogList>)
    {
        (<any>Object).assign(this, init);
    }
}

export class TrainDialogIdList
{
    public trainDialogIds : string[];

    public constructor(init?:Partial<TrainDialogIdList>)
    {
        (<any>Object).assign(this, init);
    }
}

export class ContextDialog
{
    public contextDialog : TrainRound[];

    public constructor(init?:Partial<ContextDialog>)
    {
        (<any>Object).assign(this, init);
    }
}