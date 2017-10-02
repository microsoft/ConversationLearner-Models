export class Memory {
    public entityName : string;
    public entityValues : string[];

    public constructor(init?:Partial<Memory>)
    {
        (<any>Object).assign(this, init);
    }
}
