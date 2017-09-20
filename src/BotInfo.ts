import { JsonProperty } from 'json-typescript-mapper';

/** Information about the running bot */
export class BotInfo
{
    /** APICallbacks available to BLIS */
    @JsonProperty("callbacks")
    public callbacks : string[];

    public constructor(init?:Partial<BotInfo>)
    {
        this.callbacks = undefined;
        (<any>Object).assign(this, init);
    } 
}