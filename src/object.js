
import {toString} from "./utils";

export default class Obj {
    constructor(d, parent){
        if(parent === undefined){
            throw new Error(`Where are your parents ${toString(d)}?!`);
        }

        this.__init(d, parent);
    }

    __init(d, parent){
        let __ = this.__ = {
            dirty: true,
            parent: parent
        };

        if(d.values){
            __.values = d.values;
        }
    }

    dirty(d){
        let __ = this.__;
        if(d === undefined){
            return __.dirty;
        }
        __.dirty = d;
        if(d === true){
            __.parent.dirty(true);
        }
    }

    values(values){
        let __ = this.__;

        if(values === undefined){
            return __.values;
        }

        __.values = values;
        __.dirty = true;
    }
}
