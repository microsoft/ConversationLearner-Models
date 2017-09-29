export class Metrics
{
    public wallTime : number;

    public constructor(init?:Partial<Metrics>)
    {
        this.wallTime = undefined;
        (<any>Object).assign(this, init);
    }
}