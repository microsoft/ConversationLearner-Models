import { EntityBase } from './Entity'
import { ActionBase } from './Action'
import { TrainDialog } from './TrainDialog'

export class AppDefinition {
  public entities: EntityBase[]
  public actions: ActionBase[]
  public trainDialogs: TrainDialog[]

  public constructor(init?: Partial<AppDefinition>) {
    ;(<any>Object).assign(this, init)
  }
}
