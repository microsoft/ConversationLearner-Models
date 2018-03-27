import { Template } from './Template'
import { CallbackAPI } from './CallbackAPI'

export interface IUser {
  name: string
  id: string
}

/** Information about the running bot */
export interface BotInfo {
  user: IUser
  /** APICallbacks available to BLIS */
  callbacks: CallbackAPI[]
  templates: Template[]
}
