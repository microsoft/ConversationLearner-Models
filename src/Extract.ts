import { LabeledEntity } from './TrainDialog'
import { EntityMetaData } from './Entity'
import { Metrics } from './Metrics'
import { AppDefinition } from './AppDefinition'

export class PredictedEntity extends LabeledEntity {
  public score: number
  public metadata: EntityMetaData

  public constructor(init?: Partial<PredictedEntity>) {
    super(init)
    Object.assign(this, init)
  }
}

export class ExtractResponse {
  public text: string
  public predictedEntities: PredictedEntity[]
  public metrics: Metrics
  public packageId: string
  public definitions: AppDefinition

  public constructor(init?: Partial<ExtractResponse>) {
    Object.assign(this, init)
  }
}
