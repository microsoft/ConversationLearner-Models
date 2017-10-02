export class UserInput
{
    public text : string;

    public constructor(init?:Partial<UserInput>)
    {
        (<any>Object).assign(this, init);
    } 
}