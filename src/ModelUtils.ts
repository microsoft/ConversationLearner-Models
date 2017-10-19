 import { ActionBase, ActionTypes } from './Action'
 import { ScoredAction } from './Score'
 import { 
    TextVariation, ExtractResponse,
    PredictedEntity, LabeledEntity,
    LogRound, TrainRound, LogDialog, TrainDialog,
    TrainExtractorStep, TrainScorerStep, LogScorerStep } from './BlisModels'

 export class ModelUtils  {


    /** Remove n words from start of string */
    public static RemoveWords(text : string, numWords : number) : string 
    {
        let firstSpace = text.indexOf(' ');
        let remaining = (firstSpace > 0) ? text.slice(firstSpace+1) : "";
        numWords--; 
        if (numWords == 0)
        {
            return remaining;
        }
        return this.RemoveWords(remaining, numWords); 
    }

    /** Return arguments for an action */
    public static GetArguments(action : ActionBase | ScoredAction) : string[]
    {
        if (action.metadata && action.metadata.actionType != ActionTypes.TEXT) {
            let argString = this.RemoveWords(action.payload, 1);
            return argString.split(',');
        }
        return null;
    }

    /** Return arguments for an action */
    public static GetPrimaryPayload(action : ActionBase | ScoredAction) : string
    {
        if (action.metadata && action.metadata.actionType != ActionTypes.TEXT) {
            let [apiName] = action.payload.split(' ');
            return apiName;
        }
        return action.payload;
    }

    //====================================================================
    // CONVERSION: LabeledEntity == PredictedEntity
    //====================================================================
    public static ToLabeledEntity(predictedEntity : PredictedEntity) : LabeledEntity {

        let labelEntity = new LabeledEntity({
            startCharIndex: predictedEntity.startCharIndex,
            endCharIndex: predictedEntity.endCharIndex,
            entityId: predictedEntity.entityId,
            entityName: predictedEntity.entityName,
            entityText: predictedEntity.entityText
        });

        return labelEntity;
    }

    public static ToLabeledEntities(predictedEntities : PredictedEntity[]) : LabeledEntity[] {

        let labeledEntities : LabeledEntity[] = [];
        for (let predictedEntity of predictedEntities)
        {
            let labelEntity = ModelUtils.ToLabeledEntity(predictedEntity);
            labeledEntities.push(labelEntity);
        }
        return labeledEntities;
    }

    public static ToPredictedEntity(labeledEntity : LabeledEntity) : PredictedEntity {

        let predictedEntity = new PredictedEntity({
                startCharIndex: labeledEntity.startCharIndex,
                endCharIndex: labeledEntity.endCharIndex,
                entityId: labeledEntity.entityId,
                entityName: labeledEntity.entityName,
                entityText: labeledEntity.entityText
            });
        return predictedEntity;
    }

    public static ToPredictedEntities(labeledEntities : LabeledEntity[]) : PredictedEntity[] {
        
        let predictedEntities : PredictedEntity[] = [];
        for (let labeledEntity of labeledEntities)
        {
            let predictedEntity = ModelUtils.ToPredictedEntity(labeledEntity);
            predictedEntities.push(predictedEntity);
        }
        return predictedEntities;
    }

    //====================================================================
    // CONVERSION: ExtractResponse == TextVariation 
    //====================================================================
    public static ToTextVariation(extractResponse: ExtractResponse) : TextVariation {
        let labeledEntities = this.ToLabeledEntities(extractResponse.predictedEntities);
        let textVariation = new TextVariation({
            text: extractResponse.text,
            labelEntities: labeledEntities
        });
        return textVariation;
    }

    public static ToExtractResponses(textVariations: TextVariation[]) : ExtractResponse[] {
        let extractResponses : ExtractResponse[] = [];
        for (let textVariation of textVariations)
        {
            let predictedEntities = this.ToPredictedEntities(textVariation.labelEntities);
            let extractResponse = new ExtractResponse({
                text: textVariation.text,
                predictedEntities: predictedEntities
            });
            extractResponses.push(extractResponse);
        }
        return extractResponses;
    }

    public static ToTextVariations(extractResponses: ExtractResponse[]) : TextVariation[] {
        let textVariations : TextVariation[] = [];
        for (let extractResponse of extractResponses)
        {
            let labelEntities = this.ToLabeledEntities(extractResponse.predictedEntities);
            let textVariation = new TextVariation({
                text: extractResponse.text,
                labelEntities: labelEntities
            });
            textVariations.push(textVariation);
        }
        return textVariations;
    }

    //====================================================================
    // CONVERSION: LogDialog == TrainDialog
    //====================================================================
    public static ToTrainDialog(logDialog: LogDialog): TrainDialog {

        let trainRounds : TrainRound[] = [];
        for (let logRound of logDialog.rounds)
        {
            let trainRound = ModelUtils.ToTrainRound(logRound);
            trainRounds.push(trainRound);
        }

        return new TrainDialog({
            rounds: trainRounds
        })
    }

    //====================================================================
    // CONVERSION: LogRoung == TrainRound
    //====================================================================
    public static ToTrainRound(logRound: LogRound): TrainRound {
        return new TrainRound({
            extractorStep: new TrainExtractorStep({
                textVariations: [new TextVariation({
                    labelEntities: ModelUtils.ToLabeledEntities(logRound.extractorStep.predictedEntities),
                    text: logRound.extractorStep.text
                })],
            }),
            scorerSteps: logRound.scorerSteps.map(scorerStep => new TrainScorerStep({
                input: scorerStep.input,
                labelAction: scorerStep.predictedAction,
            }))
        })
    }

    //====================================================================
    // CONVERSION: LogScorerStep == TrainScorerStep
    //====================================================================
    public static ToTrainScorerStep(logScorerStep: LogScorerStep): TrainScorerStep {
        return new TrainScorerStep({
            input: logScorerStep.input,
            labelAction: logScorerStep.predictedAction,
        })
    }
}    