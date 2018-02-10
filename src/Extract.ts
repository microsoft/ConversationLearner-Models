import { LabeledEntity } from './TrainDialog'
import { EntityMetaData } from './Entity'
import { Metrics } from './Metrics'
import { AppDefinition } from './AppDefinition'

export interface PredictedEntity extends LabeledEntity {
  score: number | undefined
  metadata: EntityMetaData | undefined
}

export interface ExtractResponse {
  text: string
  predictedEntities: PredictedEntity[]
  metrics: Metrics
  packageId: string
  definitions: AppDefinition
}
