import { EntityBase } from './Entity';
import { ActionBase } from './Action';

export class AppDefinition
{
    public entities : EntityBase[];
    public actions : ActionBase[];

    public constructor(init?:Partial<AppDefinition>)
    {
        (<any>Object).assign(this, init);
    }
}