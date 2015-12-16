
import Obj from "../object";
import Column from "./column";

import {option} from "../utils";

export default class Columns extends Obj {
    constructor(d, parent){
        d = option(d, {});
        let values = option(d.values, []);
        
        super(d, parent);

        let __ = this.__;

        this.values(values);
    }

    values(values){
        let __ = this.__;

        if(values === undefined){
            return __.values;
        }

        __.values = [];
        this.pushValues(values);
    }

    pushValues(values){
        let __ = this.__;

        if(!Array.isArray(values)){
            throw new Error("Columns should be array and not " + typeof values);
        }

        values.forEach(value => {
            __.values.push(new Column(value, this));
        });

        this.dirty(true);
    }

    getColumnById(id){
        let __ = this.__;
        let columns = __.values;

        for(let i = 0; i < columns.length; i++){
            let column = columns[i];

            if(column.id() === id){
                return column;
            }
        }
    }


}
