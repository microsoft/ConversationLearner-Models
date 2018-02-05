import { PredictedEntity } from './Entity'
import { Metrics } from './Metrics'
import { AppDefinition } from './AppDefinition';

export class ExtractResponse
{
    public text : string;
    public predictedEntities : PredictedEntity[];
    public metrics : Metrics;
    public packageId : string;
    public definitions : AppDefinition;

    public constructor(init?:Partial<ExtractResponse>)
    {
        (<any>Object).assign(this, init);
    }
}

