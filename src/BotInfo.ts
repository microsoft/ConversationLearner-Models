import { Template } from './Template'
import { CallbackAPI } from './CallbackAPI'

/** Information about the running bot */
export class BotInfo {
  /** APICallbacks available to BLIS */
  public callbacks: CallbackAPI[]

  public templates: Template[]

  public constructor(init?: Partial<BotInfo>) {
    Object.assign(this, init)
  }
}
