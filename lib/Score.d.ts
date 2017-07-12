import { Metrics } from './Metrics';
import { ActionMetaData } from './Action';
import { Memory } from './Memory';
export declare class ScoreInput {
    filledEntities: string[];
    context: string;
    maskedActions: string[];
    constructor(init?: Partial<ScoreInput>);
}
export declare class UnscoredAction {
    actionId: string;
    reason: string;
    constructor(init?: Partial<ScoredAction>);
}
export declare class ScoredAction {
    actionId: string;
    score: number;
    payload: string;
    isTerminal: boolean;
    metadata: ActionMetaData;
    constructor(init?: Partial<ScoredAction>);
}
export declare class ScoreResponse {
    scoredActions: ScoredAction[];
    unscoredActions: UnscoredAction[];
    metrics: Metrics;
    constructor(init?: Partial<ScoreResponse>);
}
export declare class UIScoreResponse {
    scoreResponse: ScoreResponse;
    memories: Memory[];
    constructor(init?: Partial<UIScoreResponse>);
}
