export class MemoryValue {

    public userText: string | null = null;
    public displayText: string | null = null;
    public builtinType : string | null = null;
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
