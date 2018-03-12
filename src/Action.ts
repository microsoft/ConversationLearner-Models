import EntityIdSerializer from './slateSerializer'
import { ScoredAction } from './Score'

export const ActionTypes = {
  TEXT: 'TEXT',
  API_LOCAL: 'API_LOCAL',
  // API_AZURE : "API_AZURE", TODO
  CARD: 'CARD'
}

export class ActionBase {
  public actionId: string
  public actionType: string
  public payload: string
  public isTerminal: boolean
  public requiredEntities: string[]
  public negativeEntities: string[]
  public suggestedEntity: string | null
  public version: number
  public packageCreationId: number
  public packageDeletionId: number

  public constructor(init?: Partial<ActionBase>) {
    Object.assign(this, init)
  }

  // TODO: Refactor away from generic GetPayload for different action types
  // They all return strings but the strings are very different (Text is the substituted values, but other actions dont)
  // This causes issue of having to pass in entityValueMap even when it's not required, but making it optional ruins
  // safety for those places which should require it.
  // TODO: Remove ScoredAction since it doesn't have payload
  public static GetPayload(action: ActionBase | ScoredAction, entityValues: Map<string, string>): string {
    if (action.actionType === ActionTypes.TEXT) {
      /**
       * For backwards compatibility check if payload is of new TextPayload type
       * Ideally we would implement schema refactor:
       * 1. Make payloads discriminated unions (E.g. After checking the action.type, flow control knows the type of the payload property)
       * This removes the need for the GetPayload function and GetArguments which are brittle coding patterns.
       */
      try {
        const textPayload = JSON.parse(action.payload) as TextPayload
        return EntityIdSerializer.serialize(textPayload.json, entityValues)
      } catch (e) {
        const error = e as Error
        throw new Error(
          `Error when attempting to parse text action payload. This might be an old action which was saved as a string.  Please create a new action. ${error.message}`
        )
      }
    }
    if (action.actionType !== ActionTypes.TEXT) {
      let actionPayload = JSON.parse(action.payload) as ActionPayload
      return actionPayload.payload
    }
    return action.payload
  }

  /** Return arguments for an action */
  public static GetActionArguments(action: ActionBase | ScoredAction): ActionArgument[] {
    if (action.actionType !== ActionTypes.TEXT) {
      let actionPayload = JSON.parse(action.payload) as ActionPayload
      return actionPayload.arguments
    }

    return []
  }
}

export interface ActionList {
  actions: ActionBase[]
}

export interface ActionIdList {
  actionIds: string[]
}

// TODO: Remove was originally storing two properties text/json
// but now text is removed and this is only here for backwards compatibility
export interface TextPayload {
  json: any
}

export interface ActionPayload {
  payload: string
  arguments: ActionArgument[]
}

export interface ActionArgument {
  parameter: string
  value: TextPayload
}

export interface RenderedActionArgument {
  parameter: string
  value: string
}

export class TextAction extends ActionBase {
  value: any // json slate value

  constructor(action: ActionBase) {
    super(action)

    if (action.actionType !== ActionTypes.TEXT) {
      throw new Error(`You attempted to create text action from action of type: ${action.actionType}`)
    }

    this.value = JSON.parse(this.payload).json
  }
}

export class ApiAction extends ActionBase {
  name: string
  arguments: ActionArgument[]

  constructor(action: ActionBase) {
    super(action)

    if (action.actionType !== ActionTypes.API_LOCAL) {
      throw new Error(`You attempted to create api action from action of type: ${action.actionType}`)
    }

    const actionPayload: ActionPayload = JSON.parse(this.payload)
    this.name = actionPayload.payload
    this.arguments = actionPayload.arguments
  }
}

export class CardAction extends ActionBase {
  templateName: string
  arguments: ActionArgument[]

  constructor(action: ActionBase) {
    super(action)

    if (action.actionType !== ActionTypes.CARD) {
      throw new Error(`You attempted to create card action from action of type: ${action.actionType}`)
    }

    const actionPayload: ActionPayload = JSON.parse(this.payload)
    this.templateName = actionPayload.payload
    this.arguments = actionPayload.arguments
  }
}
