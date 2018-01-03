/** Information about the running bot */
export class Template
{
    public name : string;

    public variables : TemplateVariable[];

    public body? : string;

    public constructor(init?:Partial<Template>)
    {
        (<any>Object).assign(this, init);
    } 
}

export class TemplateVariable
{
    public key: string;
    public type: string;

    public constructor(init?:Partial<TemplateVariable>)
    {
        (<any>Object).assign(this, init);
    }
}