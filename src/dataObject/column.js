import Obj from "../object";

import {isNumeric, option} from "../utils";

export default class Column extends Obj {
    constructor(d, parent){
        d = option(d, {});

        if(d.id === undefined){
            throw new Error("d.id should be provided");
        }

        super(d, parent);

        this.values(d.values);
    }

    __init(d, parent){
        let __ = this.__ = {
            id: d.id,
            values: [],
            dirty: true,

            parent: parent
        };
    }

    id(id){
        let __ = this.__;
        if(id === undefined){
            return __.id;
        }
        __.id = id;

        this.dirty(true);
    }

    values(values){
        let __ = this.__;

        if(values === undefined){
            return __.values;
        }

        if(!Array.isArray(values)){
            throw new Error("d.values should be array and not " + typeof d.values);
        }
        __.values = [];
        this.pushValues(values);
    }

    pushValues(values){
        let __ = this.__;

        for(let i = 0; i < values.length; i++){
            let value = values[i];
            __.values.push(this.createValue(value));
        }

        this.dirty(true);
    }

    popValues(amount){
        let __ = this.__;

        if(amount === undefined){
            amount = 0;
        }
        if(!isNumeric(amount)){
            throw new Error("Can't pop " + amount + " values");
        }

        for(let i = 0; i < amount; i++){
            __.values.pop();
        }

        this.dirty(true);
    }

    value(i, value){
        let __ = this.__;

        if(i === undefined){
            throw new Error("You should provied index for " + value);
        }
        if(value === undefined){
            return __.values[i];
        }

        __.values[i] = value;
        this.dirty(true);
    }

    createValue(value){
        if(typeof value === "object"){
            let tmp = {};
            if(value.y === undefined){
                throw new Error("Every value should have y defined, but " + value + " doesn't");
            }
            tmp.y = value.y;

            // This is done for less memory
            if(value.x){
                tmp.x = value.x;
            }
            if(value.label){
                tmp.label = value.label;
            }

            return tmp;
        }

        if(isNumeric(value)){
            return {
                y: value
            };
        }

        throw new Error("Value should be either object or nubmer but not " + typeof value);
    }

}
