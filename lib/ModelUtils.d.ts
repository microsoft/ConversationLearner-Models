import { ActionBase } from './Action';
import { ScoredAction } from './Score';
export declare class ModelUtils {
    /** Remove n words from start of string */
    static RemoveWords(text: string, numWords: number): string;
    /** Return arguments for an action */
    static GetArguments(action: ActionBase | ScoredAction): string[];
    /** Return arguments for an action */
    static GetPrimaryPayload(action: ActionBase | ScoredAction): string;
}
