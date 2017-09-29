export class Memory {
    public entityName : string;
    public entityValues : string[];

    public constructor(init?:Partial<Memory>)
    {
        this.entityName = undefined;
        this.entityValues = undefined;
        (<any>Object).assign(this, init);
    }
}
