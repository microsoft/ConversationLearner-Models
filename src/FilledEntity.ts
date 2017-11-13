import { MemoryValue } from './Memory';

export class FilledEntity {

    public entityId : string = null;
    public values : MemoryValue[] = [];

    public constructor(init?:Partial<FilledEntity>)
    {
        (<any>Object).assign(this, init);
    }
}