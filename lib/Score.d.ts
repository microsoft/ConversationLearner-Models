import { Metrics } from './Metrics';
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
    constructor(init?: Partial<ScoredAction>);
}
export declare class ScoreResponse {
    scoredActions: ScoredAction[];
    unscoredActions: UnscoredAction[];
    metrics: Metrics;
    constructor(init?: Partial<ScoreResponse>);
}
