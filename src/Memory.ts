import { JsonProperty } from 'json-typescript-mapper';

export class Memory {
    @JsonProperty('entityName')
    public entityName : string;

    @JsonProperty('entityValue')
    public entityValues : string[];

    public constructor(init?:Partial<Memory>)
    {
        this.entityName = undefined;
        this.entityValues = undefined;
        (<any>Object).assign(this, init);
    }
}
