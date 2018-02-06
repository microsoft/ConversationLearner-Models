import { ScoredAction } from './Score'

export const ActionTypes = {
  TEXT: 'TEXT',
  API_LOCAL: 'API_LOCAL',
  // API_AZURE : "API_AZURE", TODO
  CARD: 'CARD'
}

export interface ActionMetaData {
  actionType: string
}

export class ActionBase {
  public actionId: string
  public payload: string
  public isTerminal: boolean
  public requiredEntities: string[]
  public negativeEntities: string[]
  public suggestedEntity: string | null
  public version: number
  public packageCreationId: number
  public packageDeletionId: number
  public metadata: ActionMetaData

  public constructor(init?: Partial<ActionBase>) {
    Object.assign(this, init)
  }

  /** Return payload for an action */
  public static GetPayload(action: ActionBase | ScoredAction): string {
    if (!action.metadata || action.metadata.actionType === ActionTypes.TEXT) {
      /**
       * For backwards compatibility check if payload is of new TextPayload type
       * Ideally we would implement schema refactor:
       * 1. Move action type to be toplevel property
       * 2. Make payloads discriminated unions (E.g. After checking the action.type, flow control knows the type of the payload property)
       * This removes the need for teh GetPayload function and GetArguments which are brittle coding patterns.
       */
      try {
        const textPayload = JSON.parse(action.payload) as TextPayload
        return textPayload.text
      } catch (e) {
        return action.payload
      }
    }
    if (action.metadata.actionType !== ActionTypes.TEXT) {
      let actionPayload = JSON.parse(action.payload) as ActionPayload
      return actionPayload.payload
    }
    return action.payload
  }

  /** Return arguments for an action */
  public static GetActionArguments(action: ActionBase | ScoredAction): ActionArgument[] {
    if (!action.metadata || action.metadata.actionType === ActionTypes.TEXT) {
      return []
    }
    if (action.metadata.actionType !== ActionTypes.TEXT) {
      let actionPayload = JSON.parse(action.payload) as ActionPayload
      return actionPayload.arguments
    }
    return []
  }

  public static GetActionArgumentValuesAsPlainText(action: ActionBase | ScoredAction): string[] {
    if (!action.metadata || action.metadata.actionType === ActionTypes.TEXT) {
      return []
    }
    if (action.metadata.actionType !== ActionTypes.TEXT) {
      let actionPayload = JSON.parse(action.payload) as ActionPayload
      return actionPayload.arguments.map(a => getActionArgumentValueAsPlainText(a))
    }
    return []
  }
}

export class ActionList {
  public actions: ActionBase[]

  public constructor(init?: Partial<ActionList>) {
    Object.assign(this, init)
  }
}

export class ActionIdList {
  public actionIds: string[]

  public constructor(init?: Partial<ActionIdList>) {
    Object.assign(this, init)
  }
}

export interface TextPayload {
  text: string
  json: any
}

export interface ActionPayload {
  payload: string
  arguments: ActionArgument[]
}

export interface ActionArgument {
  parameter: string
  value: TextPayload | string
}

export const getActionArgumentValueAsPlainText = (actionArgument: ActionArgument): string =>
  typeof actionArgument.value === 'string' ? actionArgument.value : actionArgument.value.text
