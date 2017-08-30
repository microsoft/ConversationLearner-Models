import { LabeledEntity } from './TrainDialog';
import { EntityMetaData } from './Entity';
import { Metrics } from './Metrics';
export declare class PredictedEntity extends LabeledEntity {
    score: number;
    metadata: EntityMetaData;
    constructor(init?: Partial<PredictedEntity>);
}
export declare class ExtractResponse {
    text: string;
    predictedEntities: PredictedEntity[];
    metrics: Metrics;
    packageId: string;
    constructor(init?: Partial<ExtractResponse>);
}
