import { Memory } from './Memory'
import { ScoreInput, ScoreResponse } from './Score'
import { TrainExtractorStep, TrainScorerStep } from './TrainDialog'
import { EntityBase } from './Entity'
import { ExtractResponse } from './Extract'
import { TeachResponse } from './Teach'

export enum ScoreReason {
  // Action has been masked
  NotAvailable = 'notAvailable',

  // Action can't be scored because it hasn't been trained yet
  NotScorable = 'notScorable',

  // Score has not yet been calculated
  NotCalculated = 'notCalculated'
}

export interface UIScoreInput {
  trainExtractorStep: TrainExtractorStep
  extractResponse: ExtractResponse
}

export interface UIExtractResponse {
  extractResponse: ExtractResponse
  memories: Memory[]
}

export interface UITeachResponse {
  teachResponse: TeachResponse
  memories: Memory[]
}

export interface UIScoreResponse {
  scoreResponse: ScoreResponse
  scoreInput: ScoreInput
  memories: Memory[]
}

export interface UITrainScorerStep {
  trainScorerStep: TrainScorerStep
  entities: EntityBase[]
}
