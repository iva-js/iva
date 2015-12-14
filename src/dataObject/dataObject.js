import Obj from "../object";
import Column from "./column";

import {option, copy} from "../utils";


export default class DataObject extends Obj {
    constructor(d) {
        super(d);
        d = option(d, {});

        this.columns(d.columns);
    }

    __init(d){
        this.__ = {
            columns: {
                values: [],
                dirty: true
            },
            parent: {
                dirty: ()=>{}
            }
        };
    }

    columns(columns){
        let __ = this.__;

        if(columns === undefined){
            return __.columns.values;
        }

        __.columns.values = [];
        this.pushColumns(columns);
    }

    pushColumns(columns){
        let __ = this.__;

        if(!Array.isArray(columns)){
            throw new Error("Columns should be array and not " + typeof columns);
        }

        for(let i = 0; i < columns.length; i++){
            let column = columns[i];

            __.columns.values.push(new Column(column, this));
        }

        this.dirty(true);
    }

    getColumnById(id){
        let __ = this.__;

        for(let i = 0; i < __.column.values.length; i++){
            let column = __.column.values[i];

            if(column.id() === id){
                return column;
            }
        }
    }

    copy(){
    }

}
