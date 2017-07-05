import { LabeledEntity } from './TrainDialog';
import { Metrics } from './Metrics';
export declare class PredictedEntity extends LabeledEntity {
    score: number;
    constructor(init?: Partial<PredictedEntity>);
}
export declare class ExtractResponse {
    text: string;
    predictedEntities: PredictedEntity[];
    metrics: Metrics;
    packageId: string;
    constructor(init?: Partial<ExtractResponse>);
}
