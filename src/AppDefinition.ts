import { JsonProperty } from 'json-typescript-mapper';
import { EntityBase } from './Entity';
import { ActionBase } from './Action';

export class AppDefinition
{
    @JsonProperty({clazz: EntityBase, name: 'entities'})
    public entities : EntityBase[];

    @JsonProperty({clazz: ActionBase, name: 'actions'})
    public actions : ActionBase[];

    public constructor(init?:Partial<AppDefinition>)
    {
        this.entities = undefined;
        this.actions = undefined;
        (<any>Object).assign(this, init);
    }
}