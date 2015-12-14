import {isNumeric} from "../utils";

export default class Column {
    constructor(d){
        if(d.id === undefined){
            throw new Error("d.id should be provided");
        }

        this.__init(d);
        this.values(d.values);
    }

    __init(d){
        let __ = this.__ = {
            id: d.id,
            values: [],
            dirty: true
        };
    }

    id(id){
        let __ = this.__;
        if(id === undefined){
            return __.id;
        }
        __.id = id;
        __.dirty = true;
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

            __.values.push(tmp);
        }

        this.dirty(true);
    }

    popValues(amount){
        let __ = this.__;

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
    }

    dirty(d){
        let __ = this.__;
        if(d === undefined){
            return __.dirty;
        }
        __.dirty = d;
    }
}
