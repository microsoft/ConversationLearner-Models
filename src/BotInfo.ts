import { Template } from './Template'
import { CallbackAPI } from './CallbackAPI'

/** Information about the running bot */
export interface BotInfo {
  /** APICallbacks available to BLIS */
  callbacks: CallbackAPI[]
  templates: Template[]
}
