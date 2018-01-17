import { ScoredAction } from './Score';
import { ActionPayload, ActionArgument } from './ActionPayload';

export const ActionTypes =
{
    TEXT : "TEXT",
    API_LOCAL : "API_LOCAL",
    // API_AZURE : "API_AZURE", TODO
    CARD : "CARD"
}

export class ActionMetaData
{
    // Action Type
    public actionType : string;

    public constructor(init?:Partial<ActionMetaData>)
    {
        (<any>Object).assign(this, init);
    }

    public Equal(metaData : ActionMetaData) : boolean
    {
        return (this.actionType == metaData.actionType);
    }
}

export class ActionBase
{
    public actionId : string;
    public payload : string;
    public isTerminal : boolean;
    public requiredEntities : string[];
    public negativeEntities : string[];
    public suggestedEntity : string;
    public version : number;
    public packageCreationId : number;
    public packageDeletionId : number;
    public metadata : ActionMetaData;

    public constructor(init?:Partial<ActionBase>)
    {
        this.metadata = new ActionMetaData();
        (<any>Object).assign(this, init);
    } 

    /** Return payload for an action */
    public static GetPayload(action : ActionBase | ScoredAction) : string
    {
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
            }
            catch {
                return action.payload
            }
        }
        if (action.metadata.actionType !== ActionTypes.TEXT) {
            let actionPayload = JSON.parse(action.payload) as ActionPayload;
            return actionPayload.payload;
        }
        return action.payload;
    }

    /** Return arguments for an action */
    public static GetActionArguments(action : ActionBase | ScoredAction) : ActionArgument[]
    {
        if (!action.metadata || action.metadata.actionType == ActionTypes.TEXT) {
            return null;
        }
        if (action.metadata.actionType !== ActionTypes.TEXT) {
            let actionPayload = JSON.parse(action.payload) as ActionPayload;
            return actionPayload.arguments;
        }
        return null;
    }
}

export class ActionList
{
  
    public actions : ActionBase[];

    public constructor(init?:Partial<ActionList>)
    {
        (<any>Object).assign(this, init);
    }
}

export class ActionIdList
{
  
    public actionIds : string[];

    public constructor(init?:Partial<ActionIdList>)
    {
        (<any>Object).assign(this, init);
    }
}

export interface TextPayload {
    text: string
    json: any
}