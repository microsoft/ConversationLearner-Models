import { MemoryValue } from './Memory';

const SUBSTITUTE_PREFIX = "$";

export class FilledEntity {

    public entityId : string = null;
    public values : MemoryValue[] = [];

    public constructor(init?:Partial<FilledEntity>)
    {
        (<any>Object).assign(this, init);
    }

    public static EntityValueAsString(fe: FilledEntity) : string
    {
        // Print out list in friendly manner
        let group = "";
        for (let key in fe.values)
        {
            let index = +key;
            let prefix = "";
            if (fe.values.length != 1 && index == fe.values.length-1)
            {
                prefix = " and ";
            }
            else if (index != 0)
            {
                prefix = ", ";
            }
            let value = fe.values[key];
            let text = value.displayText ? value.displayText : value.userText;
            group += `${prefix}${text}`;
        }
        return group;  
    }
}

export class FilledEntityMap {
    
    public map : {[key: string] : FilledEntity } = {};

    public constructor(init?:Partial<FilledEntityMap>)
    {
        (<any>Object).assign(this, init);
    }

    public EntityValueAsList(entityName : string) : string[]
    {
        if (!this.map[entityName]) {
            return [];
        }

        return this.map[entityName].values.map(v => v.userText);  
    }

    public EntityValueAsString(entityName : string) : string
    {
        if (!this.map[entityName]) {
            return null;
        }
        
        // Print out list in friendly manner
        return FilledEntity.EntityValueAsString(this.map[entityName]);  
    }

    public Split(action : string) : string[] {
        return action.split(/[\s,:.?!\[\]]+/);
    }

    public SubstituteEntities(text: string) : string {
        let words = this.Split(text);

        for (let word of words) 
        {
            if (word.startsWith(SUBSTITUTE_PREFIX))
            {
                // Key is in form of $entityName
                let entityName = word.substr(1, word.length-1);

                let entityValue = this.EntityValueAsString(entityName);
                if (entityValue) {
                    text = text.replace(word, entityValue);
                }
            }
        }
        return text;
    }

    /** Extract contigent phrases (i.e. [,$name]) */
    private SubstituteBrackets(text : string) : string {
        
        let start = text.indexOf('[');
        let end = text.indexOf(']');

        // If no legal contingency found
        if (start < 0 || end < 0 || end < start) 
        {
            return text;
        }

        let phrase = text.substring(start+1, end);

        // If phrase still contains unmatched entities, cut phrase
        if (phrase.indexOf(SUBSTITUTE_PREFIX) > 0)
        {
            text = text.replace(`[${phrase}]`, "");
        }
        // Otherwise just remove brackets
        else
        {
            text = text.replace(`[${phrase}]`, phrase);
        }
        return this.SubstituteBrackets(text);
    }

    public async Substitute(text: string) : Promise<string> {
        
        // First replace all entities
        text = <string> await this.SubstituteEntities(text);

        // Remove contingent entities
        text = this.SubstituteBrackets(text);
        return text;
    }
}