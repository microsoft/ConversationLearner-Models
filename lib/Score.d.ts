import { Metrics } from './Metrics';
import { ActionMetaData } from './Action';
import { Memory } from './Memory';
export declare class ScoreInput {
    filledEntities: string[];
    context: string;
    maskedActions: string[];
    constructor(init?: Partial<ScoreInput>);
}
export declare class ScoredBase {
    actionId: string;
    payload: string;
    isTerminal: boolean;
    metadata: ActionMetaData;
    constructor(init?: Partial<ScoredAction>);
}
export declare class UnscoredAction extends ScoredBase {
    reason: string;
    constructor(init?: Partial<ScoredAction>);
}
export declare class ScoredAction extends ScoredBase {
    score: number;
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
