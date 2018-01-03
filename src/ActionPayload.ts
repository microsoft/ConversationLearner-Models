export class ActionPayload
{
    public payload: string;
    public arguments: ActionArgument[];

    public static GetArguments(actionPayload: ActionPayload) : string[] {
        let argString: string[] = [];
        for (let actionArgument of actionPayload.arguments) {
            argString.push(actionArgument.value);
        }
        return argString;
    }

    public constructor(init?:Partial<ActionPayload>)
    {
        (<any>Object).assign(this, init);
    }
}

export class ActionArgument
{
    public parameter: string;
    public value: string;

    public constructor(init?:Partial<ActionArgument>)
    {
        (<any>Object).assign(this, init);
    }
}
