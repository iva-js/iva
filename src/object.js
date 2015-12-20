
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

        if(d.fields){
            d.fields.forEach(field => {
                this.setField(field.query, field.value);
            });
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

    /**
     * Fields are used for storing additional data that can be used by custom data handlers.
     * Query is string in formart "a.b.c".
     */
    field(query, value){
        if(value === undefined){
            return this.getField(query);
        } else {
            return this.setField(query, value);
        }
    }

    getField(query, obj){
        let __ = this.__;

        if(typeof query !== "string"){
            throw new TypeError("Query should be string and not " + typeof query);
        }


        if(__.fields === undefined){
            return undefined;
        }

        if(obj === undefined){
            obj = __.fields;
        }

        let q = query.split(".");

        if(q.length === 1){
            return obj[query];
        }

        return this.getField(q.slice(1).join("."), obj[q[0]]);
    }

    setField(query, value, obj){
        let __ = this.__;

        if(typeof query !== "string"){
            throw new TypeError("Query should be string and not " + typeof query);
        }

        if(__.fields === undefined){
            __.fields = {};
        }

        if(obj === undefined){
            obj = __.fields;
        }

        if(typeof obj !== "object"){
            throw new TypeError("Can't set value to non-object field " + obj);
        }

        let q = query.split(".");

        if(q.length === 1){
            return obj[query] = value;
        }


        if(obj[q[0]] === undefined){
            obj[q[0]] = {};
        }
        

        this.setField(q.slice(1).join("."), value, obj[q[0]]);
    }

}
