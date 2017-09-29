/** Information about the running bot */
export class BotInfo
{
    /** APICallbacks available to BLIS */
    public callbacks : string[];

    public constructor(init?:Partial<BotInfo>)
    {
        this.callbacks = undefined;
        (<any>Object).assign(this, init);
    } 
}