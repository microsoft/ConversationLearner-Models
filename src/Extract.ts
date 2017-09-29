import { LabeledEntity } from './TrainDialog';
import { EntityMetaData } from './Entity'
import { Metrics } from './Metrics'
import { AppDefinition } from './AppDefinition';

export class PredictedEntity extends LabeledEntity
{
    public score : number;
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
    public text : string;
    public predictedEntities : PredictedEntity[];
    public metrics : Metrics;
    public packageId : string;
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

