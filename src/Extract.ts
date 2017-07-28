import { JsonProperty } from 'json-typescript-mapper';
import { LabeledEntity } from './TrainDialog';
import { EntityMetaData } from './Entity'
import { Metrics } from './Metrics'
import { Memory } from './Memory';

export class PredictedEntity extends LabeledEntity
{
    @JsonProperty('score')
    public score : number;

    @JsonProperty({clazz: EntityMetaData, name: 'metadata'})
    public metadata : EntityMetaData;

    public constructor(init?:Partial<PredictedEntity>)
    {
        super(init);
        this.score = undefined;
        this.metadata = undefined;
        (<any>Object).assign(this, init);
    }
}

export class ExtractResponse
{
    @JsonProperty('text')
    public text : string;

    @JsonProperty({clazz: PredictedEntity, name: 'predictedEntities'})
    public predictedEntities : PredictedEntity[];

    @JsonProperty({clazz: Metrics, name: 'metrics'})
    public metrics : Metrics;

    @JsonProperty('packageId')
    public packageId : string;

    public constructor(init?:Partial<ExtractResponse>)
    {
        this.text = undefined;
        this.predictedEntities = undefined;
        this.metrics = undefined;
        this.packageId = undefined;
        (<any>Object).assign(this, init);
    }
}

export class UIExtractResponse
{
    @JsonProperty({clazz: ExtractResponse, name: 'extractResponse'})
    public extractResponse : ExtractResponse;

    @JsonProperty({clazz: Memory, name: 'memories'})
    public memories : Memory[];

    public constructor(init?:Partial<UIExtractResponse>)
    {
        this.extractResponse = undefined;
        this.memories = undefined;
        (<any>Object).assign(this, init);
    }
}

