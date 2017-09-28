import { JsonProperty } from 'json-typescript-mapper';
import { LabeledEntity } from './TrainDialog';
import { EntityMetaData } from './Entity'
import { Metrics } from './Metrics'
import { AppDefinition } from './AppDefinition';

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

    @JsonProperty({clazz: AppDefinition, name: 'definitions'})
    public definitions : AppDefinition;

    public constructor(init?:Partial<ExtractResponse>)
    {
        this.text = undefined;
        this.predictedEntities = undefined;
        this.metrics = undefined;
        this.packageId = undefined;
        this.definitions = undefined;
        (<any>Object).assign(this, init);
    }
}

