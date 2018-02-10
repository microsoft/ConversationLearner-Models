import { ExtractResponse, PredictedEntity } from './Extract'
import { Teach, TeachResponse } from './Teach'
import { ContextDialog, TrainRound, TrainDialog, TrainExtractorStep, TrainScorerStep, TextVariation, LabeledEntity } from './TrainDialog'
import { LogDialog, LogRound, LogScorerStep } from './LogDialog'
import { EntityList, EntityBase } from './Entity'
import { ActionBase } from './Action'
import { AppDefinition } from './AppDefinition'

export class ModelUtils {
  /** Remove n words from start of string */
  public static RemoveWords(text: string, numWords: number): string {
    if (text.length === 0 || numWords === 0) {
      return text
    }

    const firstSpace = text.indexOf(' ')
    const remaining = firstSpace > 0 ? text.slice(firstSpace + 1) : ''
    numWords--

    return this.RemoveWords(remaining, numWords)
  }

  //====================================================================
  // CONVERSION: LabeledEntity == PredictedEntity
  //====================================================================
  public static ToLabeledEntity(predictedEntity: PredictedEntity): LabeledEntity {
    return {
      startCharIndex: predictedEntity.startCharIndex,
      endCharIndex: predictedEntity.endCharIndex,
      entityId: predictedEntity.entityId,
      entityName: predictedEntity.entityName,
      entityText: predictedEntity.entityText,
      builtinType: predictedEntity.builtinType,
      resolution: predictedEntity.resolution
    }
  }

  public static ToLabeledEntities(predictedEntities: PredictedEntity[]): LabeledEntity[] {
    let labeledEntities: LabeledEntity[] = []
    for (let predictedEntity of predictedEntities) {
      let labelEntity = ModelUtils.ToLabeledEntity(predictedEntity)
      labeledEntities.push(labelEntity)
    }
    return labeledEntities
  }

  public static ToPredictedEntity(labeledEntity: LabeledEntity): PredictedEntity {
    return {
      score: undefined,
      metadata: undefined,
      startCharIndex: labeledEntity.startCharIndex,
      endCharIndex: labeledEntity.endCharIndex,
      entityId: labeledEntity.entityId,
      entityName: labeledEntity.entityName,
      entityText: labeledEntity.entityText,
      builtinType: labeledEntity.builtinType,
      resolution: labeledEntity.resolution
    }
  }

  public static ToPredictedEntities(labeledEntities: LabeledEntity[], entityList: EntityList | null = null): PredictedEntity[] {
    let predictedEntities: PredictedEntity[] = []
    for (let labeledEntity of labeledEntities) {
      let predictedEntity = ModelUtils.ToPredictedEntity(labeledEntity)
      if ((!predictedEntity.entityName || !predictedEntity.metadata) && entityList) {
        let entity = entityList.entities.filter(a => a.entityId === predictedEntity.entityId)[0]
        if (entity) {
          predictedEntity.entityName = entity.entityName
          predictedEntity.metadata = entity.metadata
        }
      }
      predictedEntities.push(predictedEntity)
    }
    return predictedEntities
  }

  //====================================================================
  // CONVERSION: ExtractResponse == TextVariation
  //====================================================================
  public static ToTextVariation(extractResponse: ExtractResponse): TextVariation {
    let labeledEntities = this.ToLabeledEntities(extractResponse.predictedEntities)
    let textVariation = {
      text: extractResponse.text,
      labelEntities: labeledEntities
    }
    return textVariation
  }

  public static ToExtractResponses(textVariations: TextVariation[]): ExtractResponse[] {
    let extractResponses: ExtractResponse[] = []
    for (let textVariation of textVariations) {
      let predictedEntities = this.ToPredictedEntities(textVariation.labelEntities)
      let extractResponse: ExtractResponse = {
        definitions: {
          entities: [],
          actions: [],
          trainDialogs: []
        },
        packageId: '',
        metrics: {
          wallTime: 0
        },
        text: textVariation.text,
        predictedEntities: predictedEntities
      }
      extractResponses.push(extractResponse)
    }
    return extractResponses
  }

  public static ToTextVariations(extractResponses: ExtractResponse[]): TextVariation[] {
    let textVariations: TextVariation[] = []
    for (let extractResponse of extractResponses) {
      let labelEntities = this.ToLabeledEntities(extractResponse.predictedEntities)
      let textVariation: TextVariation = {
        text: extractResponse.text,
        labelEntities: labelEntities
      }
      textVariations.push(textVariation)
    }
    return textVariations
  }

  //====================================================================
  // CONVERSION: LogDialog == TrainDialog
  //====================================================================
  public static ToTrainDialog(
    logDialog: LogDialog,
    actions: ActionBase[] | null = null,
    entities: EntityBase[] | null = null
  ): TrainDialog {
    let trainRounds: TrainRound[] = []
    for (let logRound of logDialog.rounds) {
      let trainRound = ModelUtils.ToTrainRound(logRound)
      trainRounds.push(trainRound)
    }

    let appDefinition: AppDefinition | null = null
    if (entities != null && actions != null) {
      appDefinition = {
        entities,
        actions,
        trainDialogs: []
      }
    }

    return {
      packageCreationId: 0,
      packageDeletionId: 0,
      trainDialogId: '',
      version: 0,
      rounds: trainRounds,
      definitions: appDefinition
    }
  }

  //====================================================================
  // CONVERSION: LogRoung == TrainRound
  //====================================================================
  public static ToTrainRound(logRound: LogRound): TrainRound {
    return {
      extractorStep: {
        textVariations: [
          {
            labelEntities: ModelUtils.ToLabeledEntities(logRound.extractorStep.predictedEntities),
            text: logRound.extractorStep.text
          }
        ]
      },
      scorerSteps: logRound.scorerSteps.map<TrainScorerStep>(logScorerStep => ({
        input: logScorerStep.input,
        labelAction: logScorerStep.predictedAction,
        scoredAction: undefined
      }))
    }
  }

  //====================================================================
  // CONVERSION: LogScorerStep == TrainScorerStep
  //====================================================================
  public static ToTrainScorerStep(logScorerStep: LogScorerStep): TrainScorerStep {
    return {
      input: logScorerStep.input,
      labelAction: logScorerStep.predictedAction,
      scoredAction: undefined
    }
  }

  //====================================================================
  // CONVERSION: TrainDialog == ContextDialog
  //====================================================================
  public static ToContextDialog(trainDialog: TrainDialog): ContextDialog {
    let contextDialog: ContextDialog = {
      contextDialog: trainDialog.rounds
    }

    // TODO: Change to non destructive operation
    // Strip out "entityType" (*sigh*)
    for (let round of contextDialog.contextDialog) {
      for (let textVariation of round.extractorStep.textVariations) {
        for (let labeledEntity of textVariation.labelEntities) {
          delete (labeledEntity as any).entityType
        }
      }
    }
    return contextDialog
  }

  //====================================================================
  // CONVERSION: TeachResponse == Teach
  //====================================================================
  public static ToTeach(teachResponse: TeachResponse): Teach {
    return {
      teachId: teachResponse.teachId,
      trainDialogId: teachResponse.trainDialogId,
      createdDatetime: undefined,
      lastQueryDatetime: undefined,
      packageId: undefined
    }
  }
}
