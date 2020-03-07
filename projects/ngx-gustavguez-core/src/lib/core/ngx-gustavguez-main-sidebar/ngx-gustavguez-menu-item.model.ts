import { StringUtility } from '../../utilities/string.utility';

export class NgxGustavguezMenuItem {

    public id: string;
    
    constructor(
        public display?: string,
        public icon?: string,
        public action?: string[],
        public childs?: NgxGustavguezMenuItem[]
    ){
        this.id = StringUtility.randomString();
    }
}