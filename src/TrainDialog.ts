import { ScoreInput, ScoredAction } from './Score'
import { AppDefinition } from './AppDefinition'

export enum SenderType {
  User = 0,
  Bot = 1
}

export interface LabeledEntity {
  startCharIndex: number
  endCharIndex: number
  entityId: string
  entityName: string
  entityText: string
  resolution: {}
  builtinType: string
}

export interface TextVariation {
  text: string
  labelEntities: LabeledEntity[]
}

export interface TrainExtractorStep {
  textVariations: TextVariation[]
}

export interface TrainScorerStep {
  input: ScoreInput
  // I'd of the selected action
  labelAction: string
  // Score of the selected action
  scoredAction: ScoredAction | undefined
}

export interface TrainRound {
  extractorStep: TrainExtractorStep
  scorerSteps: TrainScorerStep[]
}

export interface TrainDialog {
  trainDialogId: string
  version: number
  packageCreationId: number
  packageDeletionId: number
  rounds: TrainRound[]
  definitions?: AppDefinition | null
}

export interface TrainResponse {
  packageId: number
  trainingStatus: string
  trainDialogId: string
}

export interface TrainDialogList {
  trainDialogs: TrainDialog[]
  definitions?: AppDefinition
}

export interface TrainDialogIdList {
  trainDialogIds: string[]
}

export interface ContextDialog {
  contextDialog: TrainRound[]
}
