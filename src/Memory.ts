export class MemoryValue {

    public value : string = null;
    public type : string = null;
    public resolution: {} = {};

    public constructor(init?:Partial<MemoryValue>)
    {
        (<any>Object).assign(this, init);
    }
}

export class Memory {
    public entityName : string;
    public entityValues : MemoryValue[];

    public constructor(init?:Partial<Memory>)
    {
        (<any>Object).assign(this, init);
    }
}
