import Obj from "../object";
import Columns from "./columns";

import {option, copy} from "../utils";


export default class DataObject extends Obj {
    constructor(d, parent) {
        super(d, parent);

        d = option(d, {
            columns: []
        });

        this.columns = new Columns({
            values: d.columns
        }, this);
    }

    __init(d, parent){
        this.__ = {
            parent: parent
        };
    }

    copy(){
    }

}
