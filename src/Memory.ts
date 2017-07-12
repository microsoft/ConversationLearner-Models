import { JsonProperty } from 'json-typescript-mapper';

export class Memory {
    @JsonProperty('entityName')
    public entityName : string;

    @JsonProperty('entityValue')
    public entityValue : string;

    public constructor(init?:Partial<Memory>)
    {
        this.entityName = undefined;
        this.entityValue = undefined;
        (<any>Object).assign(this, init);
    }
}
