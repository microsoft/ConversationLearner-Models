import { EntityBase } from './Entity';
import { ActionBase } from './Action';

export class AppDefinition
{
    public entities : EntityBase[];
    public actions : ActionBase[];

    public constructor(init?:Partial<AppDefinition>)
    {
        this.entities = undefined;
        this.actions = undefined;
        (<any>Object).assign(this, init);
    }
}