 import { ActionBase, ActionTypes } from './Action'
 import { ScoredAction } from './Score'

 export class ModelUtils  {


    /** Remove n words from start of string */
    public static RemoveWords(text : string, numWords : number) : string 
    {
        let firstSpace = text.indexOf(' ');
        let remaining = (firstSpace > 0) ? text.slice(firstSpace+1) : "";
        numWords--; 
        if (numWords == 0)
        {
            return remaining;
        }
        return this.RemoveWords(remaining, numWords); 
    }

    /** Return arguments for an action */
    public static GetArguments(action : ActionBase | ScoredAction) : string[]
    {
        if (action.metadata && action.metadata.actionType != ActionTypes.TEXT) {
            let argString = this.RemoveWords(action.payload, 1);
            return argString.split(',');
        }
        return null;
    }

    /** Return arguments for an action */
    public static GetPrimaryPayload(action : ActionBase | ScoredAction) : string
    {
        if (action.metadata && action.metadata.actionType != ActionTypes.TEXT) {
            let [apiName] = action.payload.split(' ');
            return apiName;
        }
        return action.payload;
    }
}    