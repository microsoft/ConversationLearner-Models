import { LabeledEntity } from './TrainDialog';
import { EntityMetaData } from './Entity';
import { Metrics } from './Metrics';
import { Memory } from './Memory';
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
export declare class UIExtractResponse {
    extractResponse: ExtractResponse;
    memories: Memory[];
    constructor(init?: Partial<UIExtractResponse>);
}
