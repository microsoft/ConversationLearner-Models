import { Metrics } from './Metrics'
import { ActionMetaData } from './Action'
import { FilledEntity } from './FilledEntity'

export interface ScoreInput {
  filledEntities: FilledEntity[]
  context: {}
  maskedActions: string[]
}

export interface ScoredBase {
  actionId: string
  payload: string
  isTerminal: boolean
  metadata: ActionMetaData
}

export interface UnscoredAction extends ScoredBase {
  reason: string
}

export interface ScoredAction extends ScoredBase {
  score: number
  metadata: ActionMetaData
}

export interface ScoreResponse {
  scoredActions: ScoredAction[]
  unscoredActions: UnscoredAction[]
  metrics: Metrics
}
