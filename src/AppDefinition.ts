import { EntityBase } from './Entity'
import { ActionBase } from './Action'
import { TrainDialog } from './TrainDialog'

export interface AppDefinition {
  entities: EntityBase[]
  actions: ActionBase[]
  trainDialogs: TrainDialog[]
}
