import { StringUtility } from '../../utilities/string.utility';

export class NgxGustavguezNavItemModel {

    public id: string;
    
    constructor(
        public display?: string,
        public icon?: string,
        public action?: string,
        public childs?: NgxGustavguezNavItemModel[]
    ){
        this.id = StringUtility.randomString();
    }
}