export class UserInput
{
    public text : string;

    public constructor(init?:Partial<UserInput>)
    {
        this.text = undefined;
        (<any>Object).assign(this, init);
    } 
}